import { AllImages } from '@/assets/Allimages/AllImages';
import Image from 'next/image';
import React from 'react';

const AboutUs = () => {
    return (
        <div className='bg-primary pt-36  pb-16 '>
            <div className='container mx-auto md:pb-40 px-4 md:px-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div>
                        <div className='relative'>
                            <Image src={AllImages.about1} alt="about-us" width={0} height={0} className=''></Image>
                            <Image src={AllImages.about2} alt="about-us" width={0} height={0}
                                className='md:absolute top-20 left-20 transform translate-x-1/2 -translate-y-1/2  md:translate-x-0 md:translate-y-0   md:top-72 md:left-56 h-full w-auto'></Image>
                        </div>
                    </div>

                    <div className='md:mt-20'>
                        <h1 className='text-3xl md:text-6xl font-bold text-white mb-20 border-b-2 border-white pb-10'>About Us</h1>
                        <p className='text-white md:text-xl'>Welcome to MVW, your trusted design and build contractor based in London. We are dedicated to guiding our clients through every phase of their projects, from initial planning to final completion and everything in between.
                        </p>
                        <p className='mt-10 text-white md:text-xl'>Our team has collaborated with leading architects, investors, engineers, and property specialists, bringing extensive experience across various property and construction sectors. We have recently expanded our services to include general construction, architectural and design, facility and property management, and property investment
                        </p>
                        <button className='text-white font-bold bg-buttonCollor mt-20 px-8 py-3'>
                            View More
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default AboutUs;