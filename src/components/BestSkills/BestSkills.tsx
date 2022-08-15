import React from "react";
import Resume from "../buttons/Resume";
import "./BestSkills.css";

const BestSkills: React.FC = () => {
  return (
    <div className="BestSkills container">
      <img src="./images/diagram.png" alt=""></img>

      <div className="BestSkills--info">
        <h2>My Best Skills</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit nullam placerat
          est quis lorem tristique aliquet cras quis tristique felis vitae
          eleifend sapien.
        </p>
        <div className="info--percantage">
          <div>
            HTML/CSS
            <br />
            <span>90%</span>
          </div>
          <div>
            JavaScript
            <br />
            <span>90%</span>
          </div>
          <div>
            Adaptive
            <br />
            <span>90%</span>
          </div>
          <div>
            ES6+
            <br />
            <span>90%</span>
          </div>
        </div>
        <Resume />
      </div>
    </div>
  );
};

export default BestSkills;
