import React, { useState, useEffect } from "react";
import PatientTable from "../../components/tables/patient";
import ProgressCard from "../../components/cards";
import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import useApiHandler from "../../services/axios/useApiHandler";
import apiService from "../../services/axios/apiService";

const PatientTracker = () => {
  const { response, error, handleApiCall } = useApiHandler();

  useEffect(() => {
    handleApiCall(() => apiService("activityProgressBar", "GET"));
  }, []);

  return (
    <Box display={"flex"} flexDirection={"column"} gap="20px">
      {error && (
        <Box
          sx={{
            color: "red",
            textAlign: "center",
            padding: "10px",
            background: "#f8d7da",
            borderRadius: "4px",
          }}
        >
          Failed - {error}
        </Box>
      )}
      <Grid container spacing={2} sx={{ width: "100%", margin: 0 }}>
        {(response || []).map((arr, index) => (
          <Grid item size={6} key={index}>
            <ProgressCard
              title={arr.title}
              desc={arr.desc}
              progress={arr.progress}
            />
          </Grid>
        ))}
      </Grid>
      <PatientTable />
    </Box>
  );
};

export default PatientTracker;
