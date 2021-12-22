
import { useContext }       from 'react';
import { Link }             from 'react-router-dom';
import { UilFacebookMessengerAlt, UilEstate, UilSignout, UilCompass,UilHeart } from '@iconscout/react-unicons';

import { UserContext }      from '../context/firebase/user';
import { FirebaseContext }  from '../context/firebase/firebase';
import * as ROUTES          from '../constants/Routes';
import Logo                 from '../assets/images/logo.png';
import userAvatar           from '../assets/images/avatars/dali.jpg';

export default function Header(){

    //* Init Context
    const { user } = useContext(UserContext);
    const { auth }  = useContext(FirebaseContext);

    console.log(user, auth);

    return(
        <header className='w-screen bg-white border-b border-gray-300'>
            <nav className='lg:w-6/12 md:w-full h-[3.75rem] flex justify-between items-center mx-auto'>
                <Link
                    to={ROUTES.DASHBOARD}>
                        <img
                        className='object-scale-down h-8 mx-4'
                        src={Logo}
                        alt='Logo'
                        />
                </Link>
                {
                    user? //! If Block
                    (
                        <div className='flex justify-center items-center'>
                            <Link
                                to={ROUTES.DASHBOARD}>
                                <UilEstate className='mr-6'
                                />
                            </Link>
                            <Link
                                to={ROUTES.DASHBOARD}>
                                <UilFacebookMessengerAlt className='mr-6'
                                />
                            </Link>
                            <Link
                                to={ROUTES.DASHBOARD}>
                                <UilCompass className='mr-6'
                                />
                            </Link>
                            <Link
                                to={ROUTES.DASHBOARD}>
                                <UilHeart className='mr-6'
                                />
                            </Link>
                            <Link
                                to={ROUTES.DASHBOARD}>
                                <UilSignout className='h-10' onClick={() => auth.signOut()}
                                />
                            </Link>
                            <Link
                                to={`/p/${user.displayName}`}>
                                <img
                                    src={userAvatar}
                                    alt={user.displayName}
                                    className='object-contain w-6 h-6 rounded-3xl inline mx-4'
                                />
                            </Link>
                        </div>
                    )
                : //! Else block
                    (
                        <div className='flex items-center'>
                            <Link to={ROUTES.LOGIN}>
                                <button
                                    className='bg-blue-400 text-white text-sm font-bold py-1.5 px-3 rounded mr-3 focus:outline outline-blue-500'
                                    >Log In
                                </button>
                            </Link>
                            <Link to={ROUTES.SIGNUP}>
                                <button
                                    className='text-blue-400 text-sm font-bold focus:outline-none focus:text-gray-500'
                                    >Sign Up
                                </button>
                            </Link>
                        </div>
                    )
                }
            </nav>
        </header>
    );
}