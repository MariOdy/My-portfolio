import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WorkType from "./components/WorkType/WorkType";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";
import { HireMeBanner } from "./components/HireMe/HireMe";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <AboutMe />
        <WorkType />
        <HireMeBanner />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
