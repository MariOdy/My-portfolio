import React from "react";
import Resume from "../buttons/Resume";
import { BestSkillsInfo, BestSkillsWrapper, InfoPercantage } from "./styles";

const BestSkills: React.FC = () => {
  return (
    <BestSkillsWrapper>
      <img src="./images/diagram.png" alt=""></img>

      <BestSkillsInfo>
        <h2>My Best Skills</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing elit nullam placerat
          est quis lorem tristique aliquet cras quis tristique felis vitae
          eleifend sapien.
        </p>
        <InfoPercantage>
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
        </InfoPercantage>
        <Resume />
      </BestSkillsInfo>
    </BestSkillsWrapper>
  );
};

export default BestSkills;
