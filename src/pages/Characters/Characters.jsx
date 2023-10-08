import React from 'react';

const Characters = () => {
    return (
        <div>
            <h2 className='bg-gradient-to-r from-green-500 to-blue-500 hover:bg-gradient-to-r hover:from-blue-500 hover:to-green-500 p-5 text-2xl w-2/4 mx-auto rounded-full my-10'>Most Favorite Characters</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10 gap-5 '>
                <div className="card p-0 w-auto bg-base-100 shadow-xl">
                    <figure><img src="https://publish.one37pm.net/wp-content/uploads/2022/03/how-many-batman-movies-are-there-mobile.jpg?resize=720%2C780" alt="cosplayers" /></figure>
                    <div className="card-body">
                        <p>Batman</p>
                    </div>
                </div>
                <div className="card p-0 w-auto bg-base-100 shadow-xl">
                    <figure><img src="https://hips.hearstapps.com/hmg-prod/images/henry-cavill-superman-1536761926.jpg?crop=0.49925925925925924xw:1xh;center,top&resize=1200:*" alt="cosplayers" /></figure>
                    <div className="card-body">
                        <p>Superman</p>
                    </div>
                </div>
                <div className="card p-0 w-auto bg-base-100 shadow-xl">
                    <figure><img src="https://www.nme.com/wp-content/uploads/2020/12/jason-momoa-aquaman.jpg" alt="cosplayers" /></figure>
                    <div className="card-body">
                        <p>Aquaman</p>
                    </div>
                </div>
                <div className="card p-0 w-auto bg-base-100 shadow-xl">
                    <figure><img src="https://illgetdrivethru.files.wordpress.com/2020/02/best-order-to-watch-wonder-woman-films.jpg?w=600" alt="cosplayers" /></figure>
                    <div className="card-body">
                        <p>Wonder Woman</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Characters;