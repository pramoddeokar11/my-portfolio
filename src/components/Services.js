import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>My Skills</h2>
      <div className="service-cards">
        <div className="service-card">
          <img src="/images/service1.jpg" alt="Service 1" />
          <h3>Programming Languages</h3>
          <p>Java</p>
        </div>
        <div className="service-card">
          <img src="/images/service2.jpg" alt="Service 2" />
          <h3>Web Development</h3>
          <p>React.js, Node.js, Express.js, HTML, CSS, JavaScript </p>
        </div>
        <div className="service-card">
          <img src="/images/service3.jpg" alt="Service 3" />
          <h3>Database</h3>
          <p>MongoDB, MySQL</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
