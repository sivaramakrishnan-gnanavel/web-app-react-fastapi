import React from "react";

import AppRouter from "./routes/app.routes";
import customTheme from "../themes/light";

import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./stores/app.context";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const Application: React.FC = () => {
  return (
    <BrowserRouter>
      <AppProvider>
        <ThemeProvider theme={customTheme}>
          <AppRouter />
          <CssBaseline />
        </ThemeProvider>
      </AppProvider>
    </BrowserRouter>
  );
};

export default Application;
