import React, { useState } from "react";
import { Tabs, Tab } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import { tabs } from "./constant";

const TabsNav = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const currentTab = tabs.findIndex((tab) =>
      location.pathname.startsWith(tab.path)
    );
    if (currentTab !== -1) setActiveTab(currentTab);
  }, [location.pathname]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    navigate(tabs[newValue].path);
  };

  return (
    <Tabs value={activeTab} onChange={handleTabChange} indicatorColor="primary">
      {tabs.map((tab, index) => (
        <Tab key={index} label={tab.label} />
      ))}
    </Tabs>
  );
};

export default TabsNav;
