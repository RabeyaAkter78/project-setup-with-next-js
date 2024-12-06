'use client';
import { AllImages } from '@/assets/Allimages/AllImages';
import React from 'react';

const HeroPage = () => {
    const imageStyle = {
        backgroundImage: `URL(${AllImages.hero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        // opacity: 0.08,
        backgroundColor: "rgba(64, 64, 64, 0.7)",
        backgroundBlendMode: "overlay",
    };
    return (
        <div className='' style={imageStyle}>
            <div className='container mx-auto flex flex-col items-center justify-center h-full'>
                <h1 className='text-3xl md:text-6xl font-bold text-white'>Welcome to MVV </h1>
                <p className='text-white'>Professional design and build contractor</p>
            </div>
        </div>
    );
};

export default HeroPage;