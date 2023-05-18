import React from 'react'
import SizeTable from '../components/ProductDetail/SizeTable'
import ProductInfo from '../components/ProductDetail/ProductInfo'
import AddToBagButton from '../components/ProductDetail/AddToBagButton'
import FavoriteButton from '../components/ProductDetail/FavoriteButton'
import Description from '../components/ProductDetail/Description'
import ProductDetailModal from '../components/ProductDetail/ProductDetailModal'
import DetailAccordion from '../components/ProductDetail/DetailAccordion'
import FreeDeliveryandReturnsContent from '../components/ProductDetail/FreeDeliveryandReturnsContent'
import ReviewContent from '../components/ProductDetail/ReviewContent'
import AlsoLike from '../components/ProductDetail/AlsoLike'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import supabase from '../config/supbase'
import Loading from '../components/Loading'
// Breakpoint: 960px

export default function ProductDetail() {
    const {productId} = useParams();
    
    const {isLoading, data : product, error} = useQuery({
        queryKey: ["products", productId],
        queryFn: () => supabase.from("products").select("title, price, thumbnail, category (name)").eq("id",productId).single(),
        select: (res) => res.data
    });
    if (isLoading) return <Loading/>;
    return (
        <div className='bg-white text-black w-full'>
            <Navbar/>
            <div className='pt-[60px] grid min-[960px]:grid-cols-2'>
                <ProductInfo title={product.title} price={product.price} thumbnail = {product.thumbnail} gender={product.category.name}/>
                <div className='mb-8 '>
                    <SizeTable/>
                    <div className='mb-6 px-6'>
                        <AddToBagButton/>
                        <FavoriteButton/>
                    </div>
                    <Description/>
                    <ProductDetailModal/>
                    <div className='mt-10'>
                        <DetailAccordion title={"Free Delivery and Returns"} content={<FreeDeliveryandReturnsContent/>}/>
                        <DetailAccordion title={"Reviews"} content={<ReviewContent/>}/>
                    </div>
                </div>
            </div>
            <AlsoLike/>
            <Footer/>
        </div>
    )
}
