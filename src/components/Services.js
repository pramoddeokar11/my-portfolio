import React from 'react';
import './Services.css';

// Import images from the 'src/assets' folder
import service1Image from '../assets/service1.jpg';
import service2Image from '../assets/service2.jpg';
import service3Image from '../assets/service3.jpg';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>My Skills</h2>
      <div className="service-cards">
        <div className="service-card">
          <img src={service1Image} alt="Service 1" />
          <h3>Programming Languages</h3>
          <p>Java</p>
        </div>
        <div className="service-card">
          <img src={service2Image} alt="Service 2" />
          <h3>Web Development</h3>
          <p>React.js, Node.js, Express.js, HTML, CSS, JavaScript </p>
        </div>
        <div className="service-card">
          <img src={service3Image} alt="Service 3" />
          <h3>Database</h3>
          <p>MongoDB, MySQL</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
