import React from 'react'
import HomeButton from './HomeButton'

export default function HomeLatest() {
    return (
        <div className='mt-[84px] mx-6'>
            <div>
                <h2 className='font-medium text-2xl leading-7 mb-6'>The Latest</h2>
                <a href="#">
                    <img className='object-contain' src="https://static.nike.com/a/images/w_1920,c_limit,f_auto,q_auto/2ed5b117-04a6-40a0-b6c7-ad07b2de726a/image.jpg" alt="Latest" />
                    <div className='max-[600px]:text-left text-center block mt-12 mx-6'>
                        <p className='leading-6 mb-1'>Just In</p>
                        <h3 className='font-nike font-medium min-[960px]:text-7xl text-5xl tracking-tighter mb-2'>
                            NIKE AIR MAX PULSE
                        </h3>
                        <p className='mt-6'>
                            Powered by the underground sounds of London comes a silhouette infused with an unreal sensation of Air and durable
                            <br />
                            design details, now in a new colour. 
                            <br />
                            <br />
                            Shop the Air Max Pulse in Cobblestone.
                        </p>
                        <HomeButton bgColor={"black"} textColor={"white"} link={"#"} children={"Shop Now"}/>
                    </div>
                </a>
            </div>
        </div>
    )
}
