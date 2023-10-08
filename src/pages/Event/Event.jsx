import React, { useEffect, useState } from 'react';
import Marquee from "react-fast-marquee";
import Aos from 'aos';
import 'aos/dist/aos.css'
import { Link } from 'react-router-dom';
const Event = () => {
    useEffect( () => {
        Aos.init();
    },[])
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch('events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])
    return (
        <div>
            <Marquee className='mt-3'>
                Our Ongoing Events
            </Marquee>
            <div className=''>
            {
                events.map(event => <div key={event.id}>
                    <div className="card lg:h-80 lg:w-auto lg:card-side bg-base-100 shadow-xl my-4 " data-aos="flip-up">
                        <figure><img src={event.image} alt="Album" /></figure>
                        <div className="card-body">
                        <p>{event.anime_name}</p>
                            <div className="card-actions justify-center">
                                <Link to={`/event/${event.id}`}>
                                <button className="text-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 text-white font-bold p-2 rounded-full">Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                    
                </div>)
            }
            </div>
        </div>
    );
};

export default Event;