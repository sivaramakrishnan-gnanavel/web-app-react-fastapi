// components/Layout.tsx
import React from "react";
import TabsNav from "../tabsNav";
import SideNav from "../sideNav";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import PrimarySearchAppBar from "../navbar";

const Layout = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Box
        display={"flex"}
        flexDirection={"column"}
        paddingTop={"30px"}
        gap="20px"
      >
        <TabsNav />
        <Box display="flex" flexDirection={"row"}>
          <SideNav />
          <Box component="main" sx={{ padding: "16px", flexGrow: 1 }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
