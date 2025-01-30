import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <h2>Projects</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <h4>E-Commerce Website</h4>
          <p>Developed a feature-rich e-commerce platform with product listings, a shopping cart, payment gateway integration, and user authentication. Built using the MERN stack with a focus on scalability and user experience.</p>
        </div>
        <div className="testimonial-card">
          <h4>Task Management App</h4>
          <p>A productivity application that allows users to create, track, and manage tasks with deadlines. Integrated features like drag-and-drop functionality and push notifications for better task organization.</p>
        </div>
        <div className="testimonial-card">
          <h4> Weather Forecast Dashboard</h4>
          <p>A sleek and responsive weather dashboard that displays real-time weather data for any location. Integrated APIs to fetch accurate forecasts and designed an intuitive UI for seamless navigation.</p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
