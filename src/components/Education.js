import React from "react";
import "./Education.css";

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "Vishwakarma University, Pune",
      year: "2021 - 2025",
      description: "",
    },
    {
      degree: "12th Class",
      institution: "Narayana Junior College, Hyderabad",
      year: "2021",
      description: "",
    },
    {
        degree: "10th Class",
        institution: "Jawahar Navodaya Vidyalaya, Pokharapur, Solapur",
        year: "2019",
        description: "",
      },
  ];

  return (
    <section className="education" id="education">
      <h1 className="section-title">Education</h1>
      <div className="education-container">
        {educationData.map((item, index) => (
          <div className="education-item" key={index}>
            <h3 className="degree">{item.degree}</h3>
            <p className="institution">{item.institution}</p>
            <p className="year">{item.year}</p>
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
