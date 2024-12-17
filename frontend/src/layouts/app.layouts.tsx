import React from "react";
import ResponsiveAppBar from "../components/navbars";

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ResponsiveAppBar />
      {children}
    </>
  );
};

export default AppLayout;
