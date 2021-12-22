import { useState, useEffect, useContext } from 'react';

import { UserContext } from '../context/firebase/user';
import { getUserByUserId } from '../services/firebase/firebase';


export function useUser(){
    //* Init State
    const [activeUser, setActiveUser] = useState({});

    //* Init Context
    const { user }  = useContext(UserContext);

    //* Init Side Effect
    useEffect(() => {
        async function getUserObjByUserId() {
            // in here we need to query for the user data in the firestore
            const [response] = await getUserByUserId(user.uid);
            setActiveUser({ ...response }); // pass the user res to state
        }
        if (user && user.id) {
            getUserObjByUserId();
        }
    }, [user]);

    return { user: activeUser }; // return activeUser as user to the hook when called
}
