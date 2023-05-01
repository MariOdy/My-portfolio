import React from "react";

import FoggyClock from "public/images/foggy-clock.png";
import CurrencyExchange from "public/images/currency-exchange.png";
import Quizical from "public/images/quizical.png";
import Froggy from "public/images/froggy.png";
import MemeGenerator from "public/images/memegenerator.png";
import WeatherApp from "public//images/weather-app.png";
import CryptoKitties from "public//images/cryptokitties.png";
import FortuneCookie from "public//images/fortune-cookie.png";
import AmIOld from "public//images/am-i-old.png";
import Easybank from "public//images/easybank.png";

import ProjectCard from "./ProjectCard";
import { ProjectsWrapper, Header, Title, ProjectsGrid } from "./styles";

export interface Project {
  title: string;
  thumbnail: any;
  link: string;
}

const projects: Project[] = [
  {
    title: "Easybank landing page",
    thumbnail: Easybank,
    link: "https://easybank.mariody.vercel.app/",
  },
  {
    title: "Am I Old?",
    thumbnail: AmIOld,
    link: "https://my-age.vercel.app/",
  },
  {
    title: "FortuneCookie",
    thumbnail: FortuneCookie,
    link: "https://fortune-cookie.mariody.vercel.app/",
  },
  {
    title: "CryptoKitties",
    thumbnail: CryptoKitties,
    link: "https://crypto-kitties.mariody.vercel.app/",
  },
  {
    title: "Weather App",
    thumbnail: WeatherApp,
    link: "https://weather.mariody.vercel.app",
  },
  {
    title: "Currency Exchange",
    thumbnail: CurrencyExchange,
    link: "https://reexchanger.mariody.vercel.app",
  },
  {
    title: "Quizical",
    thumbnail: Quizical,
    link: "https://quizzical-swart.vercel.app",
  },
  {
    title: "Foggy Clock",
    thumbnail: FoggyClock,
    link: "https://foggy-clock.vercel.app",
  },

  {
    title: "Meme Generator",
    thumbnail: MemeGenerator,
    link: "https://meme-generator.mariody.vercel.app",
  },
  {
    title: "Froggy",
    thumbnail: Froggy,
    link: "https://froggy-game.vercel.app",
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
