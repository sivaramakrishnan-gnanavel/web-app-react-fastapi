import api from "./axios";

const uriMapper = {
  task: "/task",
  activity: "/activity",
};

export const getResponse = async (url, method) => {
  let response = null;
  try {
    if (method === "GET") {
      response = await api.get(url);
    } else if (method === "GET") {
      response = await api.get("/task");
    }
    return response.data;
  } catch (error) {
    console.error("Error fetching task:", error);
    throw error;
  }
};

export const getTasks = async () => {
  try {
    const response = await api.get("/task");
    return response.data;
  } catch (error) {
    console.error("Error fetching task:", error);
    throw error;
  }
};

export const addTask = async (row) => {
  try {
    const response = await api.post("/task", row);
    return response.data;
  } catch (error) {
    console.error("Error adding row:", error);
    throw error;
  }
};

export const updateTask = async (id, updatedRow) => {
  try {
    const response = await api.put(`/task/${id}`, updatedRow);
    return response.data;
  } catch (error) {
    console.error("Error updating row:", error);
    throw error;
  }
};

export const deleteTask = async (id) => {
  try {
    const response = await api.delete(`/task/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting row:", error);
    throw error;
  }
};
