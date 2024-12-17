import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import DashboardPage from "../pages/dashboard.page";
import OverviewPage from "../pages/overview.page";
import ActivityPage from "../pages/activity.page";
import TaskPage from "../pages/tasks.page";
import LoginPage from "../pages/login.page";
import ResponsiveAppBar from "../../components/navbars";
import AppLayout from "../../layouts/app.layouts";

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout>
            <DashboardPage />
          </AppLayout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <AppLayout>
            <DashboardPage />
          </AppLayout>
        }
      />
      <Route path="/tasks" element={<TaskPage />} />
      <Route path="/overview" element={<OverviewPage />} />
      <Route path="/activity" element={<ActivityPage />} />
    </Routes>
  );
};

export default AppRouter;
