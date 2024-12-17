import api from "./axios";

export const getPatients = async () => {
  try {
    const response = await api.get("/patient");
    return response.data;
  } catch (error) {
    console.error("Error fetching patient:", error);
    throw error;
  }
};

export const addPatient = async (row) => {
  try {
    const response = await api.post("/patient", row);
    return response.data;
  } catch (error) {
    console.error("Error adding row:", error);
    throw error;
  }
};

export const updatePatient = async (id, updatedRow) => {
  try {
    const response = await api.put(`/patient/${id}`, updatedRow);
    return response.data;
  } catch (error) {
    console.error("Error updating row:", error);
    throw error;
  }
};

export const deletePatient = async (id) => {
  try {
    const response = await api.delete(`/patient/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting row:", error);
    throw error;
  }
};
