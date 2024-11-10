/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import React from 'react'
import Image from 'next/image'
import {TypeAnimation} from 'react-type-animation'
import Social from '../social/page'      
const HeroSection = () => {
    return (
      <div>
        <section>
          <div className='grid grid-cols-1 sm:grid-cols-12 py-12'>
            {/* Text Section */}
            <div className='col-span-7 place-self-center text-center sm:text-left'>
              <h1 className='text-white mb-4 text-4xl sm:text-3xl lg:text-6xl font-extrabold'>
                <span className='text-transparent text-white'>
                  Hello I am{''}
                </span>
                <br />
                <TypeAnimation
                  sequence={[
                    'Alishba',
                    1000,
                    'Full-Stack Developer',
                    1000,
                    'Front-End',
                    1000,
                    'Back-End',
                    1000,
                  ]}
                  wrapper='span'
                  speed={50}
                  repeat={Infinity}
                />
              </h1>
              <p className='text-white text-base sm:text-lg mb-10 lg:text-xl'>
              I am a full-stack developer  . My experience in front-end and back-end development,
              combined with a strong foundation in design,
              allows me to build visually appealing and highly functional web applications.
              </p>
              {/* <div>
                <button className='px-6 py-3 text-sm w-fit rounded-full mr-4 bg-white hover:bg-slate-500'>
                  Hire Me
                </button>
                <button className='px-6 py-3 text-sm w-fit rounded-full bg-transparent hover:bg-slate-500 text-white border border-white mt-3'>
                  Download CV
                </button>
              </div> */}

                  {/* <div className='mb-8 xl:mb-0'>
                  <Social containerstyle="flex gap-6" iconstyle={'w-9 h-9 color-white border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500'}/>
                </div> */}
            </div>
            <div className=''>
              <div className='w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[500px] lg:h-[500px] relative'>
                <Image
                  src={'/heroimage.png'}
                  alt='hero Image'
                  className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                  width={500}
                  height={500}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
   
  )
}

export default HeroSection
