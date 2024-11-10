/* eslint-disable @next/next/no-img-element */
"use client"
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <div className='bg-slate-300'>
     
     <header className='text-black body-font'>
     
    <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
     
    <a className='flex titlefont font-medium items-center text-black mb-4 md:mb-0'>

    
    <img src="https://img.freepik.com/free-vector/flat-design-atheism-logo-template_23-2149242249.jpg?semt=ais_hybrid" 
    alt="a logo"
     className='w-10 h-10 rounded-full'
     />
    
    <span className='ml-3 text-xl'>My Potfolio</span></a>

     <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-purple-500 flex flex-wrap items-center text-base justify-center'>
         <Link className='ml-2 mr-5 hover:text-purple-600 ' href='/'>Home</Link>
         <Link className='ml-2 mr-5 hover:text-purple-600 ' href='/about'>About</Link>
         <Link className='ml-2 mr-5 hover:text-purple-600 ' href='/myproject'>Project</Link>
         <Link className='ml-2 mr-5 hover:text-purple-600 ' href='/contact'>Contact</Link>
         <Link className='ml-2 mr-5 hover:text-purple-600 ' href='/myskill'>Sills</Link>
     </nav>

    </div>
      
    </header>

     <footer>
      <ul>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
        <li><a href=""></a></li>
      </ul>
     </footer>
      
      </div>
    </>
  )
}

export  default Navbar
