import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import WorkType from "./components/WorkType/WorkType";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";
import AboutMe from "./components/AboutMe/AboutMe";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <AboutMe />
      <WorkType />
      <Contacts />
      <Footer />
    </>
  );
};

export default HomePage;
