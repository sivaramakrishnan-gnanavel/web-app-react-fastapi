import * as React from "react";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid2";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";

export default function FolderList({ ListItems }) {
  const iconMapper = {
    Speed: <ImageIcon />,
    Sets: <WorkIcon />,
    TimeGap: <BeachAccessIcon />,
    Status: <WorkIcon />,
  };

  console.log(ListItems);
  return (
    <Grid container spacing={2} sx={{ width: "100%", margin: 0 }}>
      {ListItems.length > 0 ? (
        ListItems.map((arr, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                borderRadius: "8px",
              }}
            >
              <ListItem>
                <ListItemAvatar>
                  <Avatar>{iconMapper[arr.title]}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={arr.title} secondary={arr.data} />
              </ListItem>
            </List>
          </Grid>
        ))
      ) : (
        <Grid item xs={12} sm={4} sx={{ paddingLeft: "2px" }}>
          No Record Found
        </Grid>
      )}
    </Grid>
  );
}
