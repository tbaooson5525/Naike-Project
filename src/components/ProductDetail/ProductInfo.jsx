import React from 'react'

export default function ProductInfo({title, price, thumbnail, gender}) {
    return (
        <div className='bg-white text-black mt-[60px]'>
            <div className='px-6 pb-3 pt-5'>
                <h1 className='text-2xl font-medium'>{title}</h1>
                <h2 className='font-medium'>{gender}'s Shoes</h2>
                <p className='font-medium'>{price}</p>
            </div>
            <div>
                <img src={thumbnail} alt='...'/>
            </div>
        </div>
    )
}
