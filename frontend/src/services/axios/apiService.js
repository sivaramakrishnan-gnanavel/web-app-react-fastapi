import api from "../axios";

const urlMapper = {
  activity: "activity",
  activityProgressBar: "activity/progressBar",
  getTasks: "activity/overview-tasks",
  getAttendance: "activity/attendance",
  getPatientTasks: "activity/patients-tasks",
  task: "task",
};

const apiService = async (url, method, config = {}) => {
  try {
    const endpoint = urlMapper[url];
    if (!endpoint) throw new Error("Invalid URL provided in urlMapper");

    const response = await api({
      url: endpoint,
      method,
      ...config,
    });

    return { data: response.data, error: null };
  } catch (error) {
    const errorMsg =
      error.response?.data?.detail ||
      error.response?.data?.message ||
      error.message ||
      "An unexpected error occurred.";

    return { data: null, error: errorMsg };
  }
};

export default apiService;
