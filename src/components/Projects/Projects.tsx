import React from "react";
import ProjectCard from "./ProjectCard";
import { ProjectsWrapper, Header, Title, ProjectsGrid } from "./styles";

export interface Project {
  title: string;
  thumbnail: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "Quizical",
    thumbnail: "/images/quizical.png",
    link: "https://quizzical-swart.vercel.app",
  },
  {
    title: "Froggy",
    thumbnail: "/images/froggy.png",
    link: "https://froggy-game.vercel.app",
  },
  {
    title: "Meme Generator",
    thumbnail: "/images/memegenerator.png",
    link: "https://meme-generator.mariody.vercel.app",
  },
  {
    title: "Weather App",
    thumbnail: "/images/weather-app.png",
    link: "https://weather.mariody.vercel.app",
  },
];

const Projects: React.FC = () => (
  <ProjectsWrapper id="projects">
    <Header>
      <Title>Recent Projects 👾</Title>
    </Header>
    <ProjectsGrid>
      {projects.map((project) => (
        <li key={project.title}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ProjectsGrid>
  </ProjectsWrapper>
);

export default Projects;
