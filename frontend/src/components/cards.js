import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";

export default function ProgressCard({ title, desc, progress }) {
  return (
    <Card>
      <CardContent>
        <Box display="flex" flexDirection={"column"} gap="10px">
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {desc}
          </Typography>
          <LinearProgress variant="determinate" value={progress} />
        </Box>
      </CardContent>
    </Card>
  );
}
