import React from "react";

import Project1 from "../../../../assets/img1.jpg";
import Project2 from "../../../../assets/img2.jpg";
import Project3 from "../../../../assets/img1.jpg";
import Project4 from "../../../../assets/img2.jpg";
import Project5 from "../../../../assets/img1.jpg";
import Project6 from "../../../../assets/img2.jpg";
import Project7 from "../../../../assets/img1.jpg";
import Project8 from "../../../../assets/img2.jpg";
import Project9 from "../../../../assets/img1.jpg";
import Project10 from "../../../../assets/img2.jpg";

import "./styles.css";

const portfolio = [
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Project6,
  Project7,
  Project8,
  Project9,
  Project10
];

const Projects = () => {
  return (
    <div className="projects">
      <h1>Our Latest Projects</h1>
      <p>Here is our latest projects.</p>

      <div className="portfolio">
        {portfolio.map((c, i) => (
          <div
            className="faceImg "
            style={{ backgroundImage: `url(${c})` }}
            key={i}
          >
            <p>Project #{i}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
