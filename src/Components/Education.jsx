// Components/Education.js
import React from "react";

const Education = ({ educationDetails }) => {
  return (
    <section id="education" style={{ padding: "3rem", backgroundColor: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>Education</h2>
      <div style={{ marginTop: "1rem" }}>
        {educationDetails.map((education, index) => (
          <div
            key={index}
            style={{
              marginBottom: "1.5rem",
              padding: "3.5rem",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#fff",
              fontFamily: "Arial, sans-serif",
            }}
          >
            <h3 style={{ margin: "0 0 0.5rem 0", fontFamily: "Arial, sans-serif" }}>{education.institution}</h3>
            <p style={{ margin: "0.5rem 0" }}>{education.degree}</p>
            <p style={{ margin: "0.5rem 0" }}>{education.branch}</p>
            {education.CGPA && <p style={{ margin: "0.5rem 0", color: "#555" }}>CGPA: {education.CGPA}</p>}
            {education.percentage && <p style={{ margin: "0.5rem 0", color: "#555" }}>Percentage: {education.percentage}</p>}
            <p style={{ margin: "0.5rem 0", color: "#555" }}>{education.year}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
