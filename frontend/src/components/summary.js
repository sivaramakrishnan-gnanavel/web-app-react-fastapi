import React from "react";
import { Box, Typography, LinearProgress, Avatar } from "@mui/material";

function BulletWithProgress({ title, description, progress }) {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        width: "100%",
        padding: "16px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        marginBottom: "16px",
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Avatar sx={{ marginRight: "16px", bgcolor: "primary.main" }}>
        {title.charAt(0)} {/* Initial of the title */}
      </Avatar>

      <Box flex={1}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>

        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ height: 8, borderRadius: "4px" }}
        />
      </Box>

      <Typography
        variant="body2"
        sx={{ marginLeft: "16px", fontWeight: "bold" }}
      >
        {progress}%
      </Typography>
    </Box>
  );
}

export default BulletWithProgress;