import React from 'react';

const Footer = () => {
    let date = new Date()
    let year = date.getFullYear();
    return (
      <div className="bg-secondary py-3">
        <p className="mb-0 text-white text-center">
          Copyright &copy; <small>{year} Yoga exprat..</small>
        </p>
      </div>
    );
};

export default Footer;