import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { List, ListItem, ListItemText } from "@mui/material";
import { sideNavOptions } from "./constant";

const SideNav = () => {
  const location = useLocation();
  const activeSideNav = Object.keys(sideNavOptions).find((key) =>
    location.pathname.startsWith(key)
  );
  const navItems = activeSideNav ? sideNavOptions[activeSideNav] : [];

  return (
    <List sx={{ width: "300px" }}>
      {navItems.map((item) => (
        <ListItem sx={{ paddingLeft: "30px" }} key={item.path}>
          <NavLink
            to={item.path}
            style={({ isActive }) => ({
              textDecoration: "none",
              color: isActive ? "blue" : "black",
            })}
          >
            <ListItemText primary={item.label} />
          </NavLink>
        </ListItem>
      ))}
    </List>
  );
};

export default SideNav;
