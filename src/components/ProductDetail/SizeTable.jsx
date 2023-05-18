import React from 'react'
import SizeButton from './SizeButton'


export default function SizeTable() {
    const testProducts = {
        id: 1,
        name: "Air Jordan Low SE",
        category: "Men",
        price: "3,369,000₫",
        imgUrl: "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e11b8744-3c83-485c-9dd3-e51230e051a1/air-jordan-low-se-shoes-KKFsH5.png",
        size: ['EU 40','EU 40.5','EU 41','EU 41.5','EU 42','EU 42.5','EU 43','EU 43.5','EU 44','EU 44.5','EU 45','EU 45.5','EU 46','EU 46.5','EU 47']
    }
    const sizes = testProducts.size.map((size, index) => {
        return (
            <SizeButton key={index} props={size}/>
        )
    })
    return (
        <div className='px-6 my-5'>
            <div className='flex justify-between'>
                <h3 className='font-medium'>Select Size</h3>
                <a className='text-[#707072]' href="#">Size Guide</a>
            </div>
            <div className='grid grid-cols-3 gap-[7px] mt-2'>
                {sizes}
            </div>
        </div>
    )
}
