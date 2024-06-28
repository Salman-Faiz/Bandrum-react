import React from 'react';

const Service = ({service}) => {
    return (
       
            <div> 
                <img src='https://dklassgh.net/wp-content/uploads/2020/12/How-To-Promote-Your-Music.jpg' alt="" />
                <h1>{service.name}</h1>
                <p>{service.price}</p>
                <p>{service.shortDescription}</p>
               </div>
       
    );
};

export default Service;