import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import Application from "./app";

import { AppProvider } from "./services/contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <Application />
    </AppProvider>
  </React.StrictMode>
);
