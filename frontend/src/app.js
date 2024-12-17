import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/layout";
import Overview from "./pages/dashboard/overview";
import Performance from "./pages/dashboard/performance";
import PatternOne from "./pages/activity/patternOne";
import PatternTwo from "./pages/activity/patternTwo";
import Task from "./pages/task";
import ActivityTracker from "./pages/tracker/activity";
import PatientTracker from "./pages/tracker/patients";
import TaskLayout from "./components/layouts/taskLayout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="overview" element={<Overview />} />
          <Route path="performance" element={<Performance />} />
        </Route>
        <Route path="activity" element={<Layout />}>
          <Route index element={<PatternOne />} />
          <Route path="pattern-one" element={<PatternTwo />} />
          <Route path="pattern-two" element={<PatternTwo />} />
          <Route path="pattern-three" element={<PatternTwo />} />
          <Route path="pattern-four" element={<PatternTwo />} />
          <Route path="pattern-five" element={<PatternTwo />} />
        </Route>
        <Route path="tracker" element={<Layout />}>
          <Route index element={<PatientTracker />} />
          <Route path="patient-tracker" element={<PatientTracker />} />
          <Route path="patient-tracker/:id" element={<ActivityTracker />} />
          <Route path="activity-tracker" element={<ActivityTracker />} />
        </Route>
        <Route path="tasks" element={<TaskLayout />}>
          <Route index element={<Task />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
