
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
            <h1 className='text-4xl text-center font-semibold bg-gradient-to-r from-red-300 to-violet-300 text-orange-900 rounded-2xl py-2'>Our Services</h1>
            <div className='grid  grid-col-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto py-10'>
           {
            ourServices.map(service  => <Service key={service.id} service={service}></Service> )
           }
          
        </div>
        </div>
    );
};

export default OurServices;