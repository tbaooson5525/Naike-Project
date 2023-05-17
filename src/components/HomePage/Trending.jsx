import React from 'react'
import HomeButton from './HomeButton'

export default function Trending() {
    return (
        <div className='mt-[84px] mx-6'>
            <h2 className='text-2xl leading-7 font-medium mb-6'>Trending</h2>
            <img className='object-cover w-full h-[500px] min-[960px]:h-[700px]' src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1321,c_limit/d2ae9f16-9f00-4bf3-ba0b-f3640bab7db6/nike-just-do-it.jpg" alt="Trending Image" />
            <div className='mx-6 mt-12 text-center max-[600px]:text-left'>
                <h3 className='font-nike text-5xl font-medium tracking-tighter min-[960px]:text-7xl'>MOVE TO BLOOM</h3>
                <p className='mt-6'>
                    Naomi Osaka's Collection is an evolution of style dedicated to the
                    <br />
                    beauty and strength of self-expression. Grounded in florals from her
                    <br />
                    Japanese heritage, it reminds us to blossom where we're planted and
                    <br />
                    embrace our beautiful truth.
                </p>
                <HomeButton bgColor={"black"} textColor={"white"} className='mt-6' children={"Shop"}/>
            </div>
        </div>
    )
}
