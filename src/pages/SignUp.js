import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UilFacebook } from '@iconscout/react-unicons';


import * as ROUTES from '../constants/Routes';
import { FirebaseContext } from "../context/firebase/firebase";
import { UsernameExist } from "../services/firebase/firebase";
import Logo from '../assets/images/logo.png';




export default function SignUp(){
    //* Init State
    const[username, setUsername] = useState('');
    const[fullname, setFullname] = useState('');
    const[email, setEmail]       = useState('');
    const[password, setPassword] = useState('');

    //* Init Context
    const { auth, db } = useContext(FirebaseContext);

    //* Init Route Hooks
    let navigate = useNavigate();

    //! Form Handler
    const isInValid = username === '' || fullname === '' || email === '' || password === '';
    const [error, setError] = useState('');

    const handleSignUp = async (event) => {
        event.preventDefault();

        //? If username doesnt Exist, created user
        const doesUsernameExit =  await(UsernameExist(username));
        if(doesUsernameExit && doesUsernameExit.length === 0){
            try{
                const createdUserResult = await auth.createUserWithEmailAndPassword(email, password);

                await createdUserResult.user.updateProfile({
                    displayName:username,
                });

                await db.collection('users').add({

                    userId:createdUserResult.user.uid,
                    username:username.toLocaleLowerCase(),
                    fullname:fullname,
                    emailAddress:email.toLocaleLowerCase(),
                    following:[],
                    followers:[],
                    dateCreated:Date.now()

                });
                navigate( ROUTES.DASHBOARD,{replace:true});
            }
            catch(error){
                setError(error.message);
            }
        }
        //? Reset username field of form
        else{
            setError('Sorry, username already exist');
            document.getElementById('username').style.border = `1px solid red`;
            setUsername('');
        }
    }


    //* Side Effect Setup
    useEffect( () => {
        document.title = 'Sign Up';
    },[]);


    //* Render UI
    return(
        <div className='max-w-screen-sm h-screen mx-auto flex flex-col items-center'>
            <div className='w-[22rem] flex flex-col items-center py-3  mb-2 mt-10 bg-white border border-gray-200'>
                <img
                    src={Logo}
                    alt='Instagram Logo'
                    className='block py-2 mt-4'
                />

                <p
                    className='text-md text-center font-bold px-3 mb-4 w-4/5 text-gray-500 tex'
                    >Sign up to see photos and videos from your friends.
                </p>

                <button
                    className='w-4/5 bg-blue-400 py-1 mb-4 text-sm text-white font-semibold  rounded-md'
                    ><UilFacebook className='inline mr-2 my-auto' /> Login with Facebook
                </button>

                <p
                    className='text-md text-gray-400 mb-2'
                    > <hr />OR<hr />
                </p>
                { error && <span className='text-xs font-semibold text-red-400 px-4 py-1 text-center bg-red-50 rounded-md w-4/5'>{error}</span>}
                <form onSubmit={handleSignUp} method='POST' className='w-4/5 flex flex-col py-3'>
                    <input
                        type='text'
                        className='py-2 px-1 border border-gray-300 rounded-sm mb-1 text-sm text-gray-500 word-space-tighter'
                        id='username'
                        placeholder='Username'
                        onChange={({target})=> setUsername(target.value.toLocaleLowerCase())}
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
                        onChange={({target})=> setEmail(target.value.toLocaleLowerCase())}
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
                        className={isInValid?'py-1.5 bg-blue-200 text-white text-sm font-semibold rounded-md transition linear delay-200 cursor-not-allowed focus:outline outline-blue-500':'py-1.5 bg-blue-400 text-white text-sm font-semibold rounded-md transition ease delay-200 focus:outline outline-blue-500'}
                        disabled={isInValid}
                        >Sign up
                    </button>

                    <p
                        className='text-xs text-gray-500 text-center px-3 py-2 mt-3'
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
    );
}