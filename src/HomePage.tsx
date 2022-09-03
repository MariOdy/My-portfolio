import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WorkType from "./components/WorkType/WorkType";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import { HireMeBanner } from "./components/HireMe/HireMe";
import { Container } from "Container.styled";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Container as="main">
        <Hero />
        <Projects />
        <AboutMe />
        <WorkType />
        <HireMeBanner />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
