import React, { useState } from 'react'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';


export default function HeaderCarousel() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const imgCarousel = [
        {
            id: 1,
            key: 1,
            name: "Tees",
            imgUrl: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/8b8054bd-e5e4-4c0d-9c6b-79c57367b041/nike-just-do-it.jpg"
        },
        {
            id: 2,
            key: 2,
            name: "Kicks",
            imgUrl: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/1d682443-c8ba-453b-8f3a-c53d8e76ea41/nike-just-do-it.jpg"
        },
        {
            id: 3,
            key: 3,
            name: "Accessories",
            imgUrl: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/12f2c38e-484a-44be-a868-2fae62fa7a49/nike-just-do-it.jpg"
        },
        {
            id: 4,
            key: 4,
            name: "Sandals",
            imgUrl: "https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_300,c_limit/6ae71b3c-8d00-4242-9781-11a2f97c8910/nike-just-do-it.jpg"
        },
    ]

    const goToNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % imgCarousel.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide(
        currentSlide === 0 ? imgCarousel.length - 1 : currentSlide - 1
        );
    };

    return (
        <div className='w-full overflow-auto'>
            {/* <div className='flex justify-end pt-0.5 px-12 mb-3'>
                <div className='bg-[#e5e5e5] h-12 w-12 flex items-center justify-center rounded-full'>
                    <ArrowBackIosNewRoundedIcon onClick={goToPrevSlide}/>
                </div>
                <div className='bg-[#e5e5e5] h-12 w-12 flex items-center justify-center rounded-full'>
                    <ArrowBackIosNewRoundedIcon className='rotate-180' onClick={goToNextSlide}/>
                </div>
            </div> */}
            <div className='flex gap-x-3 min-[600px]:px-12 min-[600px]:py-[30px]'>
                {imgCarousel.map((slide, index) => (
                    <a key={slide.key} href="#">
                        <div className={`slide ${index === currentSlide ? 'active' : ''} min-h-[150px] min-w-[150px]`}>
                            <img className=' object-cover' src={slide.imgUrl} alt={slide.name} />
                            <h3 className='mt-12 text-xl font-medium'>{slide.name}</h3>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
}