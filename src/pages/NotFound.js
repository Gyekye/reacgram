import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import * as ROUTES from '../constants/Routes';


export default function NotFound(){

    //* Init Side Effect
    useEffect( () => {
        document.title = 'Page Not found | Instagram'
    })

    //* Render UI
    return(
        <div className='w-screen h-screen'>
            <Header />
            <h1
                className='text-2xl font-bold text-center tracking-wide py-2 mt-8'
                >Sorry, this page isn't available.
            </h1>

            <p
                className='text-md text-gray-500 text-center py-2'
                >The link you followed may be broken, or the page may have been removed.

                <Link
                    to={ROUTES.DASHBOARD}
                    className='text-blue-800 mx-1'
                    >Go back to Instagram
                </Link>
            </p>
        </div>
    )
}