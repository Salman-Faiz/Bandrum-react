
import { useEffect, useState } from 'react';
import Service from './Service';



const OurServices = () => {
    const [ourServices,setOurServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setOurServices(data));
        // console.log(ourServices.length);
    },[])
    return (
        <div className='pt-10'>
            <h1 className='text-4xl text-center font-semibold '>Our Services</h1>
            <div className='grid  grid-col-1 md:grid-cols-3 gap-5 md:max-w-6xl md:mx-auto py-10'>
           {
            ourServices.map(service  => <Service key={service.id} service={service}></Service> )
           }
          
        </div>
        </div>
    );
};

export default OurServices;