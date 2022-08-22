import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import CallToAction from "./components/CallToAction/CallToAction";
import BestSkills from "./components/BestSkills/BestSkills";
import WorkType from "./components/WorkType/WorkType";
import Banner from "./components/Banner/Banner";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import Projects from "./components/Projects/Projects";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <Hero />
      <Banner />
      <WorkType />
      <CallToAction />
      <BestSkills />
      <Projects />
      <Contacts />
      <Footer />
    </>
  );
};

export default HomePage;
