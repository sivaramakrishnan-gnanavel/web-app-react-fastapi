export const sideNavOptions = {
  "/dashboard": [
    { path: "/dashboard/overview", label: "Overview" },
    { path: "/dashboard/performance", label: "Performance" },
  ],
  "/activity": [
    { path: "/activity/pattern-one", label: "Pattern One" },
    { path: "/activity/pattern-two", label: "Pattern Two" },
    { path: "/activity/pattern-three", label: "Pattern Three" },
    { path: "/activity/pattern-four", label: "Pattern Four" },
    { path: "/activity/pattern-five", label: "Pattern Five" },
  ],
  "/tracker": [
    { path: "/tracker/patient-tracker", label: "Patient Tracker" },
    { path: "/tracker/activity-tracker", label: "Activity Tracker" },
  ],
  "/tasks": [],
};

export const tabs = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Activity", path: "/activity" },
  { label: "Trackers", path: "/tracker" },
  { label: "Tasks", path: "/tasks" },
];
