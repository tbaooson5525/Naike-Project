import React from 'react'
import HomeButton from './HomeButton'

export default function Header() {
    return (
        <div className='flex mt-12 mb-[84px] mx-6 text-center max-[600px]:text-left max-[600px]:w-auto max-[600px]:h-auto min-[601px]:justify-center'>
            <div className='min-[601px]:w-[60%]'>
                <p className='mb-1 font-sans'>Summer Essentials</p>
                <h1 className='font-nike font-medium text-5xl tracking-tighter'>CHASE THE DAY</h1>
                <p className='mt-6'>
                    Move. Explore. Bring your boldest. Get after summer's endless possibilities with ready-for-anything fits.
                </p>
                <HomeButton bgColor={"black"} textColor={"white"} link={"/products"} children={"Shop"}/>
            </div>
        </div>
    )
}
