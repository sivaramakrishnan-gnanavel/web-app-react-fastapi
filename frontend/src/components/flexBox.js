import React from "react";
import Box from "@mui/material/Box";

const FlexBox = ({ children, ...props }) => {
  return (
    <Box display={"flex"} flexDirection={"column"} flex={1} {...props}>
      {children}
    </Box>
  );
};

export default FlexBox;
