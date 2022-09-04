import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

import NotFounded from "components/NotFounded/NotFounded";
import HomePage from "pages/HomePage";
import Contacts from "components/Contacts/Contacts";

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<NotFounded />} />
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
};

export default App;
