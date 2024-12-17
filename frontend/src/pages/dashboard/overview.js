import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import BulletWithProgress from "../../components/summary";
import FlexBox from "../../components/flexBox";
import AttendanceHighlighter from "../../components/calendar";
import useApiHandler from "../../services/axios/useApiHandler";
import apiService from "../../services/axios/apiService";

const Overview = () => {
  const {
    response: itemsResponse,
    error: itemsError,
    loading: itemsLoading,
    handleApiCall: fetchItems,
  } = useApiHandler();

  const {
    response: datesResponse,
    error: datesError,
    loading: datesLoading,
    handleApiCall: fetchDates,
  } = useApiHandler();

  useEffect(() => {
    fetchItems(() => apiService("getTasks", "GET"));
    fetchDates(() => apiService("getAttendance", "GET"));
  }, []);

  return (
    <Box
      display={"flex"}
      sx={{
        flexDirection: { xs: "column", md: "row" },
        gap: 2,
        padding: 2,
      }}
    >
      <FlexBox>
        {itemsLoading ? (
          <CircularProgress size={30} />
        ) : itemsError ? (
          <Box sx={{ color: "red", textAlign: "center" }}>{itemsError}</Box>
        ) : (
          (itemsResponse || []).map((item, index) => (
            <BulletWithProgress
              key={index}
              title={item.title}
              description={item.description}
              progress={item.progress}
            />
          ))
        )}
      </FlexBox>

      <FlexBox sx={{ alignItems: "center", justifyContent: "center" }}>
        {datesLoading ? (
          <CircularProgress size={30} />
        ) : datesError ? (
          <Box sx={{ color: "red", textAlign: "center" }}>{datesError}</Box>
        ) : (
          <AttendanceHighlighter attendanceData={datesResponse || []} />
        )}
      </FlexBox>
    </Box>
  );
};

export default Overview;
