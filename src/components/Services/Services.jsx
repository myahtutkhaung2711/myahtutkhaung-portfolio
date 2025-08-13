import React from 'react';
import './Services.css';

const services = [
  'Web Development',
  'UI/UX Design',
  'Responsive Design',
  'Performance Optimization',
];

const Services = () => {
    return (
        <section id="services" className="container">
        <h2 className="mb-4 text-center">Services</h2>
        <div className="row">
            {services.map((service, idx) => (
            <div key={idx} className="col-md-6 mb-3">
                <div className="service-card p-3 border rounded shadow-sm text-center">
                <h5>{service}</h5>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Services;
