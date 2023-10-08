import React from 'react';

const Card = () => {
    return (
        <div>
            <h2 className='bg-gradient-to-r from-orange-500 to-yellow-500 hover:bg-gradient-to-r hover:from-yellow-500 hover:to-orange-500 p-5 text-2xl w-2/4 mx-auto rounded-full my-10'>Most Favorite Cosplayers</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10 gap-5 '>
                <div className="card p-0 w-auto bg-base-100 shadow-xl">
                    <figure><img src="https://images.squarespace-cdn.com/content/v1/596001c2579fb355caec7aac/1508871926372-34FX30TCWCSUVNA4KT76/20160916152629861.png" alt="cosplayers" /></figure>
                    <div className="card-body">
                        <p>Harley Joker</p>
                    </div>
                </div>
                <div className="card p-0 w-auto bg-base-100 shadow-xl">
                    <figure><img src="https://images.squarespace-cdn.com/content/v1/596001c2579fb355caec7aac/1508872653703-9DZ5QWCI6PBTNNTSU2YW/20160916153157269.png" alt="cosplayers" /></figure>
                    <div className="card-body">
                        <p>Kakashi Lamake</p>
                    </div>
                </div>
                <div className="card p-0 w-auto bg-base-100 shadow-xl">
                    <figure><img src="https://i.pinimg.com/736x/30/13/89/3013893b905844979fd4b4185261151f.jpg" /></figure>
                    <div className="card-body">
                        <p>Wolverine Logan</p>
                    </div>
                </div>
                <div className="card p-0 w-auto bg-base-100 shadow-xl">
                    <figure><img src="https://i.pinimg.com/236x/70/21/bd/7021bd3f8d5cc9bce0b18c9d4f8611b0.jpg" alt="cosplayers" /></figure>
                    <div className="card-body">
                        <p>Oliver Queen</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;