import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Marquee from "react-fast-marquee";
import Event from '../Event/Event';
import Footer from '../shared/Footer/Footer';
import Slider from '../shared/Slider/Slider';
import Card from '../Card/Card';
import Characters from '../Characters/Characters';

const Home = () => {
    return (
        <div className='font-josephin text-3xl'>
            <Navbar></Navbar>
            <Marquee className='mt-3'>
                Do you love COMICS? Let's get started being your favorite comic character with us.
            </Marquee>
            <Slider></Slider>
            <Event></Event>
            <Card></Card>
            <Characters></Characters>
            <Footer></Footer>
        </div>
    );
};

export default Home;