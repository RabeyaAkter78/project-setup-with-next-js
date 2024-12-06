import { AllImages } from '@/assets/Allimages/AllImages';
import React from 'react';

const ConnectWithUS = () => {
    const imageStyle = {
        backgroundImage: `URL(${AllImages.hero.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "50vh",
        // opacity: 0.08,
        backgroundColor: "rgba(64, 64, 64, 0.7)",
        backgroundBlendMode: "overlay",
    };
    return (
        <div className='' style={imageStyle}>
            <div className='container mx-auto flex flex-col items-center justify-center h-full'>
                <h1 className='text-3xl md:text-6xl font-bold text-white text-center'>HOME IS A PLACE TO LIVE <br></br> MVV IS THE WAY TO CREATE IT
                               </h1>
                <button className='text-white font-bold bg-primary mt-10 px-20 py-3 border-2  border-white'> Connect With Us</button>
            </div>
        </div>
    );
};

export default ConnectWithUS;