import React from "react";
import { ProjectsGrid, ProjectsWrapper } from "./styles";

const Projects: React.FC = () => {
  return (
    <ProjectsWrapper>
      <h2>My projects</h2>
      <ProjectsGrid>
        <a href="https://quizzical-swart.vercel.app/">
          <img src="./images/quizical.png" alt="" />
        </a>
        <a href="https://froggy-game.vercel.app/">
          <img src="./images/froggy.png" alt="" />
        </a>
        <a href="https://meme-generator.mariody.vercel.app/">
          <img src="./images/memegenerator.png" alt="" />
        </a>
        <a href="/">
          <img src="./images/coming.png" alt="" />
        </a>
      </ProjectsGrid>
    </ProjectsWrapper>
  );
};

export default Projects;
