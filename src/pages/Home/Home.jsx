import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Marquee from "react-fast-marquee";
import Event from '../Event/Event';
import Footer from '../shared/Footer/Footer';
import Slider from '../shared/Slider/Slider';

const Home = () => {
    return (
        <div className='font-josephin text-3xl'>
            <Navbar></Navbar>
            <Marquee className='mt-3'>
                Do you love ANIME? Let's get started being your favorite anime character with us.
            </Marquee>
            <Slider></Slider>
            <Event></Event>
            <Footer></Footer>
        </div>
    );
};

export default Home;