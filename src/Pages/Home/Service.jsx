import React from 'react';

const Service = ({service}) => {
    const {name,price,shortDescription,image} = service;
    return (
       
            <div className='flex-col p-5 bg-gradient-to-r from-violet-200 to-red-300 rounded-lg space-y-4 '> 
                <img className='w-full h-52 rounded-lg' src={image} alt="" />
               <div className='flex justify-between items-center flex-grow'>
               <h1 className='text-2xl font-bold'>{name}</h1>
               <p className='text-lg font-semibold text-blue-600'>Price :{price}</p>
               </div>
                <div className='flex-grow'>
                <p className='text-green-800  text-xl'>{shortDescription}</p>
                </div>
                <button className='btn bg-orange-400 text-white text-xl'>Details</button>
                  
               </div>
       
    );
};

export default Service;

