
import React from 'react';
import Image from 'next/image';
import Navbar from '../navebar/page';



const About = () => {
    return (
        <div className='About'>
            
            <Navbar />
            <h1 className=' text-3xl text-center md:text-5xl font-bold mt-4 md:mt-0 text-white text-glow'>About Me</h1>
            <div className=' mx-auto my-6 p-4 flex flex-col md:flex-row items-center max-w-4xl border border-gray-300'>
                <div className='flex-shrink-0 mb-4 md:mb-0'>
                    <Image 
                        className='m-3'
                        src={'/thard3-removebg-preview.png'} 
                        alt='girl image'
                        width={400} 
                        height={400}
                    />
                </div>

                <div className='text-white ml-4 md:ml-6'>
                    <p className="mt-2">
                        My name is Alishba, and I am a software engineer and graphic designer. I am passionate about technology and design, and I am always ready to embrace new challenges.
                    </p>
                    <p className="mt-2">
                        I have honed my skills in IT and design fields, specializing in technologies such as TypeScript, Next.js, and Tailwind CSS. I strive to learn new skills while working on projects, constantly aiming to improve the quality of my work.
                    </p>
                    <p className="mt-2">
                        My goal is to create innovative and user-friendly applications that simplify peoples lives. I have a keen interest in the perfect combination of design and development, and I want to showcase my creativity in every project.
                    </p>
                    <p className="mt-2">
                        Feel free to connect with me on LinkedIn or reach out for any project collaboration!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
