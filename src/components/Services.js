import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Skills</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>Programming Languages</h3>
          <p>Java</p>
        </div>
        <div className="service-card">
          <h3>Web Development</h3>
          <p>React.js, Node.js, Express.js, HTML, CSS, JavaScript </p>
        </div>
        <div className="service-card">
          <h3>Database</h3>
          <p>MongoDB, MySQL</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
