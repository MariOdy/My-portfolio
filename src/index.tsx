import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "css/normalize.css";
import "css/styles.css";
import "css/typography.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
