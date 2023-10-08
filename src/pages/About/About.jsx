import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const About = () => {
    return (
        <div className='font-josephin'>
            <Navbar></Navbar>
            <div className='my-10'>
                <h2 className='text-xl'>We have a variety of cosplayers from <span className='bg-red-600 hover:bg-red-500 rounded-xl p-2 text-white'>Marvel</span> and <span className='p-2 bg-black hover:bg-gray-800 text-white rounded-xl'>DC</span>. 
                <br />
                <br />
                We also have cosplayers from <span className='text-white bg-purple-600 hover:bg-purple-500 rounded-xl p-2'>Anime</span>
                </h2>
                <br />
                <h2 className='text-xl mb-10'>Our cosplayers unites together and make themeselves part of the commity of their comics with other cosplayers.</h2>
                <figure className='my-5'>
                    <img className='w-3/4 mx-auto' src="https://www.cnet.com/a/img/resize/5456582f68ea37241bc8be82df0271cfae613cf2/hub/2019/07/20/7f96b79b-c745-4fd8-8e24-a6bbdc6d83b2/marvel-avengers-sdcc-2019-cosplay-3416.jpg?auto=webp&width=1200" alt="" />
                </figure>
                <figcaption>Ironman from Marvel</figcaption>
                <figure className='my-5'>
                    <img className='w-3/4 mx-auto' src="https://rogersenpai.com/wp-content/uploads/2019/01/MG_7799-1024x683.jpg" alt="" />
                </figure>
                <figcaption>Avengers from Marvel</figcaption>
                <figure className='my-5'>
                    <img className='w-3/4 mx-auto' src="https://s.yimg.com/uu/api/res/1.2/GA.Mhh5LRKofeBqZ2fkjng--~B/Zmk9ZmlsbDtoPTQyMTtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2022-06/96c90040-f95e-11ec-bfbe-40c825502c60.cf.jpg" alt="" />
                </figure>
                <figcaption>Justice League from DC</figcaption>
                <figure className='my-5'>
                    <img className='w-3/4 mx-auto' src="https://live.staticflickr.com/3071/2644183001_bdb6e6b95b_z.jpg" alt="" />
                </figure>
                <figcaption>Naruto from Anime</figcaption>
                <figure className='my-5'>
                    <img className='w-3/4 mx-auto' src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F07%2F23%2FSan-Diego-Comic-Con-Cosplay-072322-03.jpg" alt="" />
                </figure>
                <figcaption>The Seven from The Boys</figcaption>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;