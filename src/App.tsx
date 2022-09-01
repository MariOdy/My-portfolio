import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import NotFounded from "./components/NotFounded/NotFounded";
import HomePage from "./HomePage";

const App: React.FC = () => {
  return (
    <ParallaxProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFounded />} />
        </Routes>
      </BrowserRouter>
    </ParallaxProvider>
  );
};

export default App;
