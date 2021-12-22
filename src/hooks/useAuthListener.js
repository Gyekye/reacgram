import { useState, useEffect, useContext } from "react";

import { FirebaseContext } from '../context/firebase/firebase';


//? create a function that makes a request to firebase to check if a user has been authenticated

export function useAuthListener(){
    //* Init State
    //* Init State with user details saved in localStorage.
    const[user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { auth }       = useContext(FirebaseContext);

    //* Init Side Effect
    useEffect( () => {
        const listener = auth.onAuthStateChanged( (authUser) =>{

            localStorage.setItem('authUser', JSON.stringify(authUser));
            setUser(authUser);
        } );

        return () => listener();
    }, [auth]);

    return { user }
}
