import React from "react";
import { Box } from "@mui/material";

const FlexStack = ({ children, ...props }) => {
  return (
    <Box
      display={"flex"}
      flexDirection="row"
      alignItems="center"
      gap={"5px"}
      {...props}
    >
      {children}
    </Box>
  );
};

export default FlexStack;
