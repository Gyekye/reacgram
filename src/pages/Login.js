import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/Routes';
import Logo from '../assets/images/logo.png';


export default function Login(){

    //* Init State
    const[emailAddress, setEmailAddress] = useState('');
    const[password, setPassword] = useState('');

    //! Form error handler
    const[error, setError] = useState('');
    const isInValid = emailAddress === '' || password === '';

    //* Init Side Effect
    useEffect(() => {
        return document.title = 'Login'
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

                <form method='POST' className='w-4/5 flex flex-col'>
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
                    >Log in with Facebook
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