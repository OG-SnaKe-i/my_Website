// App.js
import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import Education from "./Components/Education";

import "./styles.css";

const siteProps = {
  name: "Shailesh Kadam",
  title: "Software Developer | DevOps Engineer | Cybersecurity Enthusiast",
  email: "shaileshkadam000000@gmail.com",
  gitHub: "OG-SnaKe-i",
  instagram: "og_snakei",
  linkedIn: "shailesh-kadam-2b7540243",
  medium: "",
  twitter: "",
  youTube: "",
};

const primaryColor = "#4E567E";
const secondaryColor = "#D2F1E4";

const educationDetails = [
  {
    institution: "Lokmanya Tilak College of Engineering, Navi Mumbai, Maharashtra",
    degree: "B.E",
    branch: "Computer Science and Engineering (IoT and Cybersecurity including Blockchain Technology) | Minor in AI and ML",
    CGPA: "8.24/10 (Up to 7th Sem)",
    year: "Oct 2021 - Jun 2025",
  },
  {
    institution: "Sheth J.T.T College of Science and Arts, Thane, Maharashtra",
    degree: "HSC - Maharashtra State Board",
    branch: "Science",
    percentage: "74.77%",
    year: "May 2020",
  },
];

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Education educationDetails={educationDetails} />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
