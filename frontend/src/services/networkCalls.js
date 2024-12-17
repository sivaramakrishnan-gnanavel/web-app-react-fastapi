import api from "./axios";

export const getRows = async () => {
  try {
    const response = await api.get("/rows");
    return response.data;
  } catch (error) {
    console.error("Error fetching rows:", error);
    throw error;
  }
};

export const addRow = async (row) => {
  try {
    const response = await api.post("/rows", row);
    return response.data;
  } catch (error) {
    console.error("Error adding row:", error);
    throw error;
  }
};

export const updateRow = async (id, updatedRow) => {
  try {
    const response = await api.put(`/rows/${id}`, updatedRow);
    return response.data;
  } catch (error) {
    console.error("Error updating row:", error);
    throw error;
  }
};

export const deleteRow = async (id) => {
  try {
    const response = await api.delete(`/rows/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting row:", error);
    throw error;
  }
};
