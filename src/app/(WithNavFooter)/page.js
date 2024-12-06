import React from 'react';
import HeroPage from './home-page/hero/page';
import AboutUs from './home-page/about-us/page';
import ConnectWithUS from './home-page/connect-with-us/page';

const Homepage = () => {
    return (
        <div>
            <HeroPage />
            <AboutUs />
            <ConnectWithUS />
        </div>
    );
};

export default Homepage;