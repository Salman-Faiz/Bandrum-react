import React from 'react';

const Service = ({service}) => {
    const {name,price,shortDescription,image} = service;
    return (
       
            <div className='p-5 bg-gradient-to-r from-violet-200 to-red-300 rounded-lg space-y-4'> 
                <img className='w-full h-52 rounded-lg' src={image} alt="" />
               <div className='flex justify-between items-center'>
               <h1 className='text-2xl font-bold'>{name}</h1>
               <p className='text-lg font-semibold text-blue-600'>Price :{price}</p>
               </div>
                <p className='text-green-800 text-xl'>{shortDescription}</p>
                <button className='btn btn-accent'>Details</button>
                  
               </div>
       
    );
};

export default Service;

