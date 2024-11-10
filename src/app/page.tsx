
import React from 'react'
import Navbar from './navebar/page'
import HeroSection from './herosection/page'
// import Footer from './footer/page'
// import Image from 'next/image'
// import {TypeAnimation} from 'react-type-animation'
const Home = () => {
  return (
    <div>
      <Navbar />
      
      <main className='flex min-h-screen flex-col bg-[#1212] '>
        <div className='contaniner mx-auto px-12 py-4'>
        <HeroSection/>
        </div>
      </main>
      {/* <Footer/> */}
    </div>
  )
}

export default Home