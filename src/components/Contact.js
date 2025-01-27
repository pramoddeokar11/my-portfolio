import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_sn9eryu', // Replace with your EmailJS service ID
        'template_et5ukoy', // Replace with your EmailJS template ID
        form.current,
        'CjNr6Gi3_r6Ju6mOg' // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message sent successfully!');
        },
        (error) => {
          console.log(error.text);
          alert('An error occurred, please try again.');
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <p>
        Email: deokarpd115@gmail.com &nbsp; 
      </p>
      <h4>
        Let’s Communicate!<br></br> Share your details, I’ll contact you. 👇
      </h4>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
