
import React from 'react'
import Navbar from '../navebar/page';
import { TbBrandHtml5 , TbBrandCss3 , TbBrandJavascript ,TbBrandTypescript ,TbBrandGithubFilled , TbBrandTailwind } from "react-icons/tb";

const MyExperience = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-3xl text-center md:text-5xl font-bold m-10 text-white'>My Skills</h1>

      <div className='container'>
        <div className='box'>
          <TbBrandHtml5 className='text-5xl' />
          <h1 className='mt-1 text-lg font-semibold text-gray-800'>HTML</h1>
        </div>

        <div className='box'>
          <TbBrandCss3 className='text-5xl' />
          <h1 className='mt-1 text-lg font-semibold text-gray-800'>CSS</h1>
        </div>

        <div className='box'>
          <TbBrandJavascript className='text-5xl' />
          <h1 className='mt-1 text-lg font-semibold text-gray-800'>JavaScript</h1>
        </div>

        <div className='box'>
          <TbBrandTypescript className='text-5xl' />
          <h1 className='mt-1 text-lg font-semibold text-gray-800'>TypeScript</h1>
        </div>

        <div className='box'>
          <TbBrandGithubFilled className='text-5xl' />
          <h1 className='mt-1 text-lg font-semibold text-gray-800'>GitHub</h1>
        </div>

        <div className='box'>
          <TbBrandTailwind className='text-5xl' />
          <h1 className='mt-1 text-lg font-semibold text-gray-800'>Tailwind</h1>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;