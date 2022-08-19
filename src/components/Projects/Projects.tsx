import React from "react";
import "./Projects.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Projects: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <section className="Projects container">
      {/* add projects  */}
      <h2>Projects</h2>
      <div className="projects-grid">
        <div>
          img
        </div>
        <div>2</div>
        <div>3</div>
      </div>
    </section>
  );
};

export default Projects;
