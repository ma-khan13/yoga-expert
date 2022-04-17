import React, { useEffect, useState } from 'react';
import Service from '../Service/Service'
const Services = () => {
    let [services, setServices] = useState([])
    useEffect(()=> {
        fetch('services_data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
      <div>
        {services.slice(0, 4).map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </div>
    );
};

export default Services;