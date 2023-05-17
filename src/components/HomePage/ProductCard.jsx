import React from 'react'

export default function ProductCard(props) {
    return (
        <div className='block min-h-[300px] pl-2'>
            <a href="#">
                <img className=' object-cover' src={props.thumbnail} alt={props.name} />
                <div className='flex justify-between mt-3 mr-4'>
                    <div>
                        <h4 className='font-medium'>{props.name}</h4>
                        <p className='text-[#757575] text-sm'>{props.category}'s Shoes</p>
                    </div>
                    <p className='text-sm font-medium '>{props.price}</p>
                </div>
            </a>
        </div>
    )
}
