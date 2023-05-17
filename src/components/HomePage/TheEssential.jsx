import React from 'react'
import HomeButton from './HomeButton'

export default function TheEssential() {
    return (
        <div className='mt-[84px] mx-6'>
            <h2 className='text-2xl leading-7 font-medium mb-6'>The Essentials</h2>
            <div className='grid gap-y-2 min-[600px]:grid-cols-3 min-[600px]:gap-x-3'>
                <div className='relative'>
                    <img className='object-cover h-[540px]' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/d94bfa7e-9357-406a-a124-1940712dfa0b/nike-just-do-it.png" alt="Men's" />
                    <HomeButton  absolute={true} bgColor={"white"} textColor={"black"} children={"Men's"}/>
                </div>
                <div className='relative'>
                    <img className='object-cover h-[540px]' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/dc62b322-5c3f-4508-b21c-950683ed460f/nike-just-do-it.png" alt="Women's" />
                    <HomeButton  absolute={true} bgColor={"white"} textColor={"black"} children={"Women's"}/>
                </div>
                <div className='relative'>
                    <img className='object-cover h-[540px]' src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_540,c_limit/58359474-a0de-4329-959c-55d1652d0912/nike-just-do-it.png" alt="Kid's" />
                    <HomeButton absolute={true} bgColor={"white"} textColor={"black"} children={"Kid's"}/>
                </div>
            </div>
        </div>
    )
}
