import React from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'


export default function TimeLine(){
    const photos = false;
    return(
        <main className="order-first">
        {/** Checking for photos */}

        {!photos ? (
                <Skeleton width={600} height={500} className="mb-5" />
            ) : (
                photos.map((content) => <p>I will be a photo!</p>)
            )}
        </main>
    )
}