import React from 'react';
import './Hero.css'; // Ensure you have this CSS file imported
import heroImage from '../assets/hero-image.JPG'; // Corrected file path and case for the image

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h3>Pramod Dattatray Deokar.</h3>
        <h2>A Passionate Full-Stack Developer</h2>
        <p>
          I specialize in building modern, responsive, and scalable web applications from scratch.
          With expertise in React.js, Node.js, Express.js, and MongoDB, I turn ideas into impactful digital solutions.
        </p>
        <a href="https://pramoddeokar11.github.io/my-portfolio/Pramod.pdf" download className="btn">📝 Download Resume</a>
      </div>
      <img src={heroImage} alt="Hero" className="hero-image" />
    </section>
  );
}

export default Hero;
