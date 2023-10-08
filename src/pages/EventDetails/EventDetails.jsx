import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Navbar from "../shared/Navbar/Navbar";
const EventDetails = () => {
    const events = useLoaderData();
    const { id } = useParams();
    const event = events.find(event => event.id === id);
    console.log(event)
    return (
        <div>
            <Navbar></Navbar>
            <p className="font-josephin text-center text-3xl my-10">Be Whomever You Want!</p>
            <div className="font-josephin my-8 lg:mx-40">
                <img src={event.image} alt="" />
                <h2 className="my-4 text-left text-4xl font-bold">{event.anime_name}</h2>

                <p className="text-left text-lg">Price: {event.price}</p>
                <p className="text-left text-lg">{event.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7 my-10">
                    <img src={event.image1} alt="" />
                    <img src={event.image2} alt="" />
                    <img src={event.image3} alt="" />
                    <img src={event.image4} alt="" />
                    
                </div>
                <p className="text-2xl text-center">All the cosplayer of {event.anime_name}.</p>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default EventDetails;