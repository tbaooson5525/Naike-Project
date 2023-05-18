import React from 'react'
import Carousel from 'react-multi-carousel'

export default function ProductInfo() {
    const testProducts = {
        id: 1,
        name: "Air Jordan Low SE",
        category: "Men",
        price: "3,369,000₫",
        imgUrl: [
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e11b8744-3c83-485c-9dd3-e51230e051a1/air-jordan-low-se-shoes-KKFsH5.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/e0776e3d-b5ef-4d4f-bccf-a16614f3d795/air-jordan-low-se-shoes-KKFsH5.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/cfe1c8dd-e312-4017-80ac-e467762e8638/air-jordan-low-se-shoes-KKFsH5.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/789c6956-e6a7-4321-a670-99fd31e101ec/air-jordan-low-se-shoes-KKFsH5.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/6bced853-afb8-4ebd-b031-9f6fdd57ef5a/air-jordan-low-se-shoes-KKFsH5.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/678f8dba-50fb-496b-8727-025145cde122/air-jordan-low-se-shoes-KKFsH5.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/9b86363d-5ead-4db4-900f-139bf8ad9d2f/air-jordan-low-se-shoes-KKFsH5.png",
            "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/007d5170-77dc-4004-986f-9f7c44a70f73/air-jordan-low-se-shoes-KKFsH5.png"
        ],
        size: ['EU 40','EU 40.5','EU 41','EU 41.5','EU 42','EU 42.5','EU 43','EU 43.5','EU 44','EU 44.5','EU 45','EU 45.5','EU 46','EU 46.5','EU 47']
    }
    const responsive = {
        u960: {
            breakpoint: { max: 4000, min: 960 },
            items: 1
        },
        o960: {
            breakpoint: { max: 960, min: 0 },
            items: 1
        },
    };
    const imgCarousel = testProducts.imgUrl.map((index) => {
        return (
            <img key={index} className='w-full object-cover' src={[index]} alt="" />
        )
    })

    return (
        <div className='bg-white text-black'>
            <div className='px-6 pb-3 pt-5'>
                <h1 className='text-2xl font-medium'>{testProducts.name}</h1>
                <h2 className='font-medium'>{testProducts.category}'s Shoes</h2>
                <p className='font-medium'>{testProducts.price}</p>
            </div>
            <div>
                <Carousel ssr={true} arrows={true} responsive={responsive}>
                    {imgCarousel}
                </Carousel>
            </div>
        </div>
    )
}
