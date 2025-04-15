// Components/About.js

import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I'm a final-year Computer Science and Engineering student specializing in IoT, Cybersecurity, and Blockchain, with a minor in AI and ML. I am passionate about secure software development, DevOps workflows, and solving complex problems with innovative software solutions.";

const skillsList = [
  "Languages: C, Java, Python, Solidity",
  "Cloud Platforms: AWS (EC2, S3, Lambda, CloudFormation), Azure (Storage, Networking)",
  "DevOps Tools: Git, GitHub, Jenkins, Terraform, Ansible, Docker, Kubernetes",
  "Database: MySQL, Firebase",
  "Operating Systems: Ubuntu, Kali Linux, Windows",
  "Cybersecurity tools: Nmap, Metasploit, Burp Suite, OWASP ZAP, Wireshark",
  "CI/CD, Infrastructure as Code, Containerization",
];

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
      </div>
    </section>
  );
};

export default About;
