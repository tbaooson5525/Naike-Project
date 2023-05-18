import React from 'react'
import ProductCard from '../HomePage/ProductCard'
import Carousel from 'react-multi-carousel'

export default function AlsoLike() {
    const testProducts = [
        {
            id: 1,
            key: 1,
            name: "Nike Air Force 1",
            price: "2,920,000đ",
            category: "Men",
            thumbnail: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1defaebe-cdc7-49ec-8530-acd53889a052/custom-nike-air-force-1-low-by-you.png"
        },
        {
            id: 2,
            key: 2,
            name: "Nike Air Force 2",
            price: "3,920,000đ",
            category: "Women",
            thumbnail: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e9d41cd4-a2c5-4ca7-a3aa-f4bf597658d0/custom-nike-air-force-1-mid-by-you-shoes.png"
        },
        {
            id: 3,
            key: 3,
            name: "Nike Air Force 3",
            price: "4,920,000đ",
            category: "Women",
            thumbnail: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/e3d72728-4900-4e71-a4ea-1f323bb570d8/custom-nike-air-force-1-high-by-you-shoes.png"
        },
        {
            id: 4,
            key: 4,
            name: "Nike Air Force 4",
            price: "5,220,000đ",
            category: "Men",
            thumbnail: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1defaebe-cdc7-49ec-8530-acd53889a052/custom-nike-air-force-1-low-by-you.png"
        },
        {
            id: 5,
            key: 5,
            name: "Nike Air Force 4",
            price: "5,220,000đ",
            category: "Men",
            thumbnail: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1defaebe-cdc7-49ec-8530-acd53889a052/custom-nike-air-force-1-low-by-you.png"
        },
        {
            id: 6,
            key: 6,
            name: "Nike Air Force 4",
            price: "5,220,000đ",
            category: "Men",
            thumbnail: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1defaebe-cdc7-49ec-8530-acd53889a052/custom-nike-air-force-1-low-by-you.png"
        },
        {
            id: 7,
            key: 7,
            name: "Nike Air Force 4",
            price: "5,220,000đ",
            category: "Men",
            thumbnail: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/1defaebe-cdc7-49ec-8530-acd53889a052/custom-nike-air-force-1-low-by-you.png"
        },
    ]
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1444 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1444, min: 960 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 960, min: 600 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 1
        }
    };

    const product = testProducts.map((items) => {
        return (
            <ProductCard 
                key={items.key}
                name={items.name} 
                price={items.price} 
                thumbnail={items.thumbnail} 
                category={items.category}
            />
        )
    })
    return (
        <div className='px-6 py-[60px]'>
            <h1 className='mb-6 text-[20px] font-medium'>You Might Also Like</h1>
            <Carousel className='' arrows={true} responsive={responsive}>
                {product}
            </Carousel>
        </div>
    )
}
