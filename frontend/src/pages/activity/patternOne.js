import React from "react";
import Box from "@mui/material/Box";
import FolderList from "../../components/lists";

const PatternOne = () => (
  <Box display={"flex"}>
    <FolderList ListItems={[]} />
    <FolderList ListItems={[]} />
  </Box>
);

export default PatternOne;
