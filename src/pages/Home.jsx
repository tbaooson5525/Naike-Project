import React from 'react'
import Header from '../components/HomePage/Header';
import HeaderVideo from '../components/HomePage/HeaderVideo';
import HeaderCarousel from '../components/HomePage/HeaderCarousel';
import HomeLatest from '../components/HomePage/HomeLatest';
import HomePopular from '../components/HomePage/HomePopular';
import Trending from '../components/HomePage/Trending';
import TheEssential from '../components/HomePage/TheEssential';

export default function Home() {
    return (
        <div>
            <HeaderVideo/>
            <Header/>
            <HeaderCarousel/>
            <Trending/>
            <HomeLatest/>
            <HomePopular/>
            <TheEssential/>
        </div>
    )
}
