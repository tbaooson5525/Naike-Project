import React from 'react'
import Header from '../components/HomePage/Header';
import HeaderVideo from '../components/HomePage/HeaderVideo';
import HeaderCarousel from '../components/HomePage/HeaderCarousel';
import HomeLatest from '../components/HomePage/HomeLatest';
import HomePopular from '../components/HomePage/HomePopular';
import Trending from '../components/HomePage/Trending';
import TheEssential from '../components/HomePage/TheEssential';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


export default function Home() {
    return (
        <div className='bg-white text-black'>
            <Navbar/>
            <HeaderVideo/>
            <Header/>
            <HeaderCarousel/>
            <Trending/>
            <HomeLatest/>
            <HomePopular/>
            <TheEssential/>
            {/* <Footer/> */}
        </div>
    )
}
