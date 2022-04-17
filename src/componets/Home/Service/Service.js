import React from 'react';

const Service = ({service}) => {
    return (
      <div>
        <h1>{service.title}</h1>
        <p>{service.course_fee}</p>
      </div>
    );
};

export default Service;