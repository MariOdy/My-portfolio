import React from "react";
import "./App.css";

import Header from "./Header";
import Hero from "./components/Hero/Hero";
import CallToAction from "./components/CallToAction/CallToAction";
import BestSkills from "./components/BestSkills/BestSkills";
import WorkType from "./components/WorkType/WorkType";
import Banner from "./components/Banner/Banner";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./Footer";
import Projects from "./components/Projects/Projects";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Banner />
      <WorkType />
      <CallToAction />
      <BestSkills />
      <Projects />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
