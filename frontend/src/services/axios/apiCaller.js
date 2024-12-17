// src/components/ApiCaller.js
import React, { useState } from "react";
import apiService from "./apiService";
import useApiHandler from "../../services/axios/useApiHandler";
import ResponseAlert from "../../components/responseAlert";
import { Button, TextField } from "@mui/material";

const ApiCaller = () => {
  const [url, setUrl] = useState("");
  const [data, setData] = useState("");
  const { response, error, handleApiCall } = useApiHandler();

  const handleGet = () => {
    handleApiCall(() => apiService(url, "GET"));
  };

  const handlePost = () => {
    handleApiCall(() =>
      apiService(url, "POST", {
        data: JSON.parse(data),
      })
    );
  };

  const handlePut = () => {
    handleApiCall(() =>
      apiService(url, "PUT", {
        data: JSON.parse(data),
      })
    );
  };

  const handleDelete = () => {
    handleApiCall(() => apiService(url, "DELETE"));
  };

  return (
    <div style={{ padding: "20px" }}>
      <TextField
        label="API URL"
        fullWidth
        variant="outlined"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Request Body (JSON)"
        fullWidth
        variant="outlined"
        value={data}
        onChange={(e) => setData(e.target.value)}
        margin="normal"
      />
      <div style={{ marginTop: "10px" }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleGet}
          style={{ marginRight: "10px" }}
        >
          GET
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={handlePost}
          style={{ marginRight: "10px" }}
        >
          POST
        </Button>
        <Button
          variant="contained"
          color="warning"
          onClick={handlePut}
          style={{ marginRight: "10px" }}
        >
          PUT
        </Button>
        <Button variant="contained" color="error" onClick={handleDelete}>
          DELETE
        </Button>
      </div>

      <ResponseAlert
        open={Boolean(response)}
        message={response ? JSON.stringify(response) : ""}
        severity="success"
        onClose={() => {}}
      />
      <ResponseAlert
        open={Boolean(error)}
        message={error || ""}
        severity="error"
        onClose={() => {}}
      />
    </div>
  );
};

export default ApiCaller;
