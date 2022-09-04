import React from "react";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import Projects from "components/Projects/Projects";
import AboutMe from "components/AboutMe/AboutMe";
import InstaPromo from "components/InstaPromo";
import WorkType from "components/WorkType/WorkType";
import HireMeBanner from "components/HireMe/HireMe";
import Footer from "components/Footer/Footer";

import Container from "components/Container";

const HomePage: React.FC = () => (
  <>
    <Header />
    <Container as="main">
      <Hero />
      <Projects />
      <AboutMe />
      <InstaPromo />
      <WorkType />
      <HireMeBanner />
    </Container>
    <Footer />
  </>
);

export default HomePage;
