import { db } from '../../lib/firebase/firebase';


//? an async function that makes a get request to firestore to check for username exits
 export const UsernameExist = async (username) =>{

    //? Request Query
    const results = await db.collection('users').where('username', '==', username).get();

    //? return query result
    return results.docs.map((user) => user.data().length > 0);
}

//? async functionn to to get user by user id
export async function getUserByUserId(userId) {
    const result = await db
        .firestore()
        .collection('users')
        .where('userId', '==', userId)
        .get();

    const user = result.docs.map((item) => ({
        ...item.data(),
        docId: item.id
    }));

    return user;
}