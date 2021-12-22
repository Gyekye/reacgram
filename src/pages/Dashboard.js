import React         from 'react';
import { useEffect } from 'react';

import Header   from '../components/Header';
import Sidebar  from '../components/sidebar/Index';
import TimeLine from '../components/TimeLine';


export default function Dashboard(){


    //* Init Side Effect
    useEffect( ()=>{
        document.title = 'Instagram';
    });


    //* Render UI
    return(
        <div className=''>
            <Header />
            <div className='flex justify-around bg-red-100'>

            </div>
        </div>
    );
}