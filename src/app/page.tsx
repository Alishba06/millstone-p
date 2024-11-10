
import React from 'react'
import Navbar from './navebar/page'
import HeroSection from './herosection/page'

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <main className='flex min-h-screen flex-col bg-[#1212] '>
        <div className='contaniner mx-auto px-12 py-4'>
        <HeroSection/>
        </div>
      </main>
     
    </div>
  )
}

export default Home