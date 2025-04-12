/**
 * Portfolio component
 *
 * Highlights certifications and learning achievements.
 */

import React from "react";
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "Credly Certifications - Shailesh Kadam",
    description:
      "Verified certifications on platforms like Microsoft, AWS, and cybersecurity-focused credentials via Credly.",
    url: "https://www.credly.com/users/shailesh-kadam.a9329c47",
  },
  {
    title: "Microsoft Learn Profile - Shailesh Kadam",
    description:
      "Track of my progress and completed modules, skill paths, and technical learning on Microsoft Learn.",
    url: "https://learn.microsoft.com/en-us/users/ShaileshKadam-8272",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Certifications & Learning</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
