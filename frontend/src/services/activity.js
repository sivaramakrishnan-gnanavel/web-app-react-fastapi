import api from "./axios";

export const getActivity = async () => {
  try {
    const response = await api.get("/activity");
    return response.data;
  } catch (error) {
    console.error("Error fetching activity:", error);
    throw error;
  }
};

export const addActivity = async (row) => {
  try {
    const response = await api.post("/activity", row);
    return response.data;
  } catch (error) {
    console.error("Error adding row:", error);
    throw error;
  }
};

export const updateActivity = async (id, updatedRow) => {
  try {
    const response = await api.put(`/activity/${id}`, updatedRow);
    return response.data;
  } catch (error) {
    console.error("Error updating row:", error);
    throw error;
  }
};

export const deleteActivity = async (id) => {
  try {
    const response = await api.delete(`/activity/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting row:", error);
    throw error;
  }
};
