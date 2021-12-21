import { useState,useEffect,useContext } from 'react';
import { Link,useNavigate } from 'react-router-dom';

import { FirebaseContext } from '../context/firebase/firebase';

import * as ROUTES from '../constants/Routes';
import Logo from '../assets/images/logo.png';
import { UilFacebook } from '@iconscout/react-unicons';


export default function Login(){

    //* Init Context
    //? Destructure auth api value from the FirebaseContext value list
    const { auth } = useContext(FirebaseContext);

    //* Init State
    const[emailAddress, setEmailAddress] = useState('');
    const[password, setPassword] = useState('');

    //* Routing Hooks
    let navigate = useNavigate();

    //! Form  handler
    const[error, setError] = useState('');
    const isInValid = emailAddress === '' || password === '';
    const handleSubmit =  async (event) => {

        //? prevents form from reloading
        event.preventDefault();

        try{
            //? make a request to Fire signInWithEmailAndPassword api
            await auth.signInWithEmailAndPassword(emailAddress, password);

            //* Save user details in an obj
            const userObj = {
                email:emailAddress,
                password:password,
            }

            //? Save it to local Storage
            localStorage.setItem('user', JSON.stringify(userObj))

            //? after auth success redirect to Dashboard Page
            navigate(ROUTES.DASHBOARD, {replace: true})

        }
        catch(error){
            //* setError to the error from catch
            setError(error.message);
        }
    }
    //* userObj

    //* Init Side Effect
    useEffect(() => {
        //? set page title
        document.title = 'Login';

        //* get user details from localstorage
        const userData = localStorage.getItem('user');

        //* check for a user data
        if( userData ){

            //? if a user is found in local Storage, parse it to javascript obj
            const foundUser = JSON.parse(userData)

            //* pass user Data to state
            setEmailAddress(foundUser.email);
            setPassword(foundUser.password)
        }
    },[])


    //* Render UI
    return(
        <div className='max-w-screen-sm h-screen mx-auto flex flex-col items-center'>
            <div className='w-[22rem] h-[26rem] flex flex-col items-center justify-around mb-4 mt-10 bg-white border border-gray-200'>
                <img
                    src={Logo}
                    alt='Instagram Logo'
                    className='block py-6'
                />
                { error && <span className='text-xs font-semibold text-red-400 px-4 py-1 text-center bg-red-50 rounded-md w-4/5'>{error}</span>}
                <form method='POST' onSubmit={handleSubmit} className='w-4/5 flex flex-col'>
                    <input
                        type='text'
                        className='py-2 px-1 border border-gray-300 rounded-sm mb-1 text-sm text-gray-500 word-space-tighter'
                        placeholder='Phone number, username or email'
                        onChange={({target}) => setEmailAddress(target.value)}
                        value={emailAddress}
                    />

                    <input
                        type='password'
                        className='py-2 px-1 border border-gray-300 rounded-sm mb-2 text-sm text-gray-500 word-space-tighter'
                        placeholder='Password'
                        onChange={({target}) => setPassword(target.value)}
                        value={password}
                    />

                    <button
                        className={isInValid?'py-1 bg-blue-200 text-white rounded-md opacity-70 cursor-not-allowed':'py-1 bg-blue-400 text-white rounded-md focus:outline outline-blue-500'}
                        disabled={isInValid}
                        >Log in
                    </button>
                </form>

                <p
                    className='text-xs text-gray-500 mt-2 mb-1 font-semibold'
                    >OR
                </p>

                <Link
                    className='text-blue-900 text-sm font-semibold word-space-tighter'
                    to='#'
                    ><UilFacebook className='inline mr-1 my-auto ' />Log in with Facebook
                </Link>

                <Link
                    className='text-xs text-blue-800 font-md'
                    to='#'
                    >Forgot Password ?
                </Link>

            </div>
            <div className='w-[22rem] h-[5rem] flex items-center justify-center bg-white border border-gray-200'>
                <p
                    className='text-gray-500 text-sm mr-2 word-space-tighter'
                    >Dont have an account ?
                </p>

                <Link
                    className='text-sm font-semibold text-blue-400'
                    to={ROUTES.SIGNUP}
                    >Sign up
                </Link>
            </div>
        </div>
    )
}