import React from 'react'
// breakpoint : 620px
export default function HeaderVideo() {
    return (
        <div className='mb-12 mx-6'>
            <video className='w-full h-auto object-cover' poster='https://static.nike.com/a/images/f_auto,cs_srgb/w_1920,c_limit/467ca0c5-304e-4431-adc1-a8d761c942cf/image.jpg' loop controls autoPlay src="/Nike Header.mp4"></video>
        </div>
    )
}
