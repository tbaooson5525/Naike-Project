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
// Breakpoint: 960px

export default function ProductDetail() {
    return (
        <div className='bg-white text-black w-full'>
            <div className='grid min-[960px]:grid-cols-2'>
                <ProductInfo/>
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
        </div>
    )
}
