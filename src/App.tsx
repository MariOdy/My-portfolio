import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFounded from "./components/NotFounded/NotFounded";
import HomePage from "./HomePage";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFounded />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
