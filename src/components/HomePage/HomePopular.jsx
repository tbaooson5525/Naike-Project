import React from 'react'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductCard from './ProductCard';

export default function HomePopular() {
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
            items: 5
        },
        desktop: {
            breakpoint: { max: 1444, min: 960 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 960, min: 600 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 600, min: 0 },
            items: 2
        }
    };

    const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
        const { carouselState: { currentSlide } } = rest;
        return (
            <div className="carousel-button-group">
                <ArrowBackIosNewRoundedIcon className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
                <ArrowBackIosNewRoundedIcon onClick={() => next()} />
            </div>
        );
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
        <div>
            <div className='flex justify-between px-6 pt-6 items-center'>
                <div>
                    <h2 className='font-medium text-2xl leading-7'>Popular Right Now</h2>
                </div>

                <div className='flex items-center gap-3'>
                    <a href="#">Shop</a>
                    {/* <div className='bg-[#e5e5e5] h-12 w-12 flex items-center justify-center rounded-full'>
                        <ArrowBackIosNewRoundedIcon/>
                    </div>
                    <div className='bg-[#e5e5e5] h-12 w-12 flex items-center justify-center rounded-full'>
                        <ArrowBackIosNewRoundedIcon className='rotate-180'/>
                    </div> */}
                </div>
            </div>
            <Carousel className='mt-12' arrows={true} customButtonGroup={<ButtonGroup />} responsive={responsive}>
                {product}
            </Carousel>
        </div>
    )
}
