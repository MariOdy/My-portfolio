import React from "react";
import "./Projects.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Projects: React.FC = () => {

  return (
    <section className="Projects container">
      <h2>Projects</h2>
      <div className="projects-grid">
        <a href=""><img src="./images/quizical.png" alt="" /></a>
        <a href=""><img src="./images/froggy.png" alt="" /></a>
        <a href=""><img src="./images/memegenerator.png" alt="" /></a>
        <a href=""><img src="./images/coming.png" alt="" /></a>
        
        
        
      </div>
    </section>
  );
};

export default Projects;
