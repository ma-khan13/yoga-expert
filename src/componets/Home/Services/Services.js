import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service'
const Services = () => {
    let [services, setServices] = useState([])
    useEffect(()=> {
        fetch('services_data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    },[])
    return (
      <Row className="g-4 my-5" >
        <h1>Services</h1>
        {services.slice(0, 4).map((service) => (
          <Service service={service} key={service.id}></Service>
        ))}
      </Row>
    );
};

export default Services;