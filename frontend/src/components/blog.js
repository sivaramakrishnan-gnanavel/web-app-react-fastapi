import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import { Favorite, Comment, Visibility } from "@mui/icons-material";

import FolderList from "./lists";
import FlexStack from "./flexStack";

const BlogPost = (props) => {
  return (
    <Box display={"flex"} gap={"30px"}>
      <Box
        component="img"
        src="https://via.placeholder.com/300"
        alt="Blog Thumbnail"
        sx={{ width: "800px", height: "600px", borderRadius: 2 }}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap="10px"
        paddingRight={"20px"}
      >
        <Typography variant="h5" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {props.description}
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="flex-start"
          alignItems="center"
        >
          <FlexStack aria-label="speed">
            <Visibility />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Speed
            </Typography>
            <Typography variant="body2">{props.recommendedSpeed}</Typography>
          </FlexStack>
          <FlexStack aria-label="sets">
            <Favorite color="error" />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Sets
            </Typography>
            <Typography variant="body2">{props.recommendedSets}</Typography>
          </FlexStack>
          <FlexStack aria-label="time-gap">
            <Comment />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Time Gap
            </Typography>
            <Typography variant="body2">{props.timeGap}</Typography>
          </FlexStack>
          <FlexStack aria-label="time-gap">
            <Comment />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              Level
            </Typography>
            <Typography variant="body2">{props.level}</Typography>
          </FlexStack>
        </Stack>
        <Box>
          <Button variant="contained">Download</Button>
        </Box>
        <Box display={"flex"} flexDirection={"column"} paddingTop={"20px"}>
          <Typography variant="h6" gutterBottom>
            Your progress
          </Typography>
          <FolderList ListItems={props.yourProgress} />
        </Box>
      </Box>
    </Box>
  );
};

export default BlogPost;
