import React from 'react'
import HeroSection from "../components/Herosection";
import ProductGallery from '../components/ProductGallery';
const Home = () => {
  return (
    <div className='mt-36'>
    <HeroSection />
    <ProductGallery/>
    </div>
  )
}

export default Home