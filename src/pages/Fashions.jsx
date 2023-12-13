import React from 'react';
import Navbar from '../shared/Navbar/Navbar';

const Fashions = ({ fashion }) => {
    const { image, price, brandName } = fashion;
    return (

        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img className='w-[200px] h-[200px]' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{brandName}</h2>
                    <p>{price}</p>
                    <button className='btn'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default Fashions;