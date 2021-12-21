import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UilFacebook } from '@iconscout/react-unicons';


import * as ROUTES from '../constants/Routes';
import Logo from '../assets/images/logo.png';




export default function SignUp(){
    //* Init State
    const[username, setUsername] = useState('');
    const[fullname, setFullname] = useState('');
    const[email, setEmail]       = useState('')
    const[password, setPassword] = useState('')


    //! Form Handler
    const isInValid = username === '' || fullname === '' || email === '' || password === ''
    const [error, setError] = useState('')

    const handleSignUp = async (event) => {
        event.preventDefault()
        try{
            await fetch("https://random-data-api.com/api/bank/random_bank").then(res => res.json()).then(data => console.log(data))
        }catch(error){
            setError(error.message)
        }
    }


    //* Side Effect Setup
    useEffect( () => {
        document.title = 'Sign Up'
    },[]);


    //* Render UI
    return(
        <div className='max-w-screen-sm h-screen mx-auto flex flex-col items-center'>
            <div className='w-[22rem] h-[34rem] flex flex-col items-center  mb-4 mt-10 bg-white border border-gray-200'>
                <img
                    src={Logo}
                    alt='Instagram Logo'
                    className='block py-7'
                />

                <p
                    className='text-md text-center font-semibold px-3 mb-2 w-4/5 text-gray-500'
                    >Sign up to see photos and videos from your friends.
                </p>

                <button
                    className='w-4/5 bg-blue-400 py-1 mb-4 text-sm text-white font-semibold  rounded-md'
                    ><UilFacebook className='inline mr-2 my-auto' /> Login with Facebook
                </button>

                <p
                    className='text-md text-gray-400 mb-2'
                    >OR
                </p>
                <span>{error}</span>
                <form onSubmit={handleSignUp} method='POST' className='w-4/5 flex flex-col py-3'>
                    <input
                        type='text'
                        className='py-2 px-1 border border-gray-300 rounded-sm mb-1 text-sm text-gray-500 word-space-tighter'
                        placeholder='Username'
                        onChange={({target})=> setUsername(target.value)}
                        value={username}
                    />

                    <input
                        type='text'
                        className='py-2 px-1 border border-gray-300 rounded-sm mb-1 text-sm text-gray-500 word-space-tighter'
                        placeholder='Fullname'
                        onChange={({target})=> setFullname(target.value)}
                        value={fullname}
                    />

                    <input
                        type='email'
                        className='py-2 px-1 border border-gray-300 rounded-sm mb-1 text-sm text-gray-500 word-space-tighter'
                        placeholder='Email'
                        onChange={({target})=> setEmail(target.value)}
                        value={email}
                    />

                    <input
                        type='password'
                        className='py-2 px-1 border border-gray-300 rounded-sm mb-4 text-sm text-gray-500 word-space-tighter'
                        placeholder='Password'
                        onChange={({target})=> setPassword(target.value)}
                        value={password}
                    />

                    <button
                        className={isInValid?'py-1.5 bg-blue-200 text-white text-sm font-semibold rounded-md transition ease delay-200 cursor-not-allowed focus:outline outline-blue-500':'py-1.5 bg-blue-400 text-white text-sm font-semibold rounded-md transition ease delay-200 focus:outline outline-blue-500'}
                        disabled={isInValid}
                        >Sign up
                    </button>

                    <p
                        className='text-xs text-gray-500 text-center px-3 mt-3'
                        >By signing up, you agree to our Terms , Data Policy and Cookies Policy .
                    </p>
                </form>

            </div>
            <div className='w-[22rem] h-[5rem] flex items-center justify-center bg-white border border-gray-200'>
                <p
                    className='text-gray-500 text-sm mr-2'
                    >Already have an account ?
                </p>

                <Link
                    className='text-sm font-semibold text-blue-400'
                    to={ROUTES.LOGIN}
                    >Login up
                </Link>
            </div>
        </div>
    )
}