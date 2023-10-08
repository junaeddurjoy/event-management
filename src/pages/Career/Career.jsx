import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import Footer from '../shared/Footer/Footer';

const Career = () => {
    return (
        <div className='font-josephin'>
            <Navbar></Navbar>
            <div className='text-3xl my-5'>
                You can build your career haere with us.
                <ul className='text-left'>
                    <li>
                        <div>
                            <p>
                                Makeup Artist
                            </p>
                            <p className='text-xl'>
                                As there are a lot of events ongoing and cosplayers are always present and cosplaying, make up artist are required for all the cosplayers.
                            </p>
                            <figure>
                            <img className='w-3/4 mx-auto' src="https://thumbs.dreamstime.com/b/makeup-artist-puts-face-painting-cute-women-form-skeleton-woman-162121239.jpg" alt="" />
                            </figure>
                        </div>
                    </li>
                    <li>
                        <div>
                            <p>
                                Cosplayers
                            </p>
                            <p className='text-xl'>
                                As the events are always for the cosplaying and cosplayers can join whatever time. Even they are the life of this event.
                            </p>
                            <figure>
                            <img className='w-3/4 mx-auto' src="https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/03/14/08/14-03-lgf-2.jpg?width=1200&height=900&fit=crop" alt="" />
                            </figure>
                        </div>
                    </li>
                </ul>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Career;