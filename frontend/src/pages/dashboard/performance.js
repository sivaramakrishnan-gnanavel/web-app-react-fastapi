import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import BulletWithProgress from "../../components/summary";
import FlexBox from "../../components/flexBox";
import useApiHandler from "../../services/axios/useApiHandler";
import apiService from "../../services/axios/apiService";
import BodyImage from "../../assets/body_image.png";

const Performance = () => {
  const {
    response: itemsResponse,
    error: itemsError,
    loading: itemsLoading,
    handleApiCall: fetchItems,
  } = useApiHandler();

  useEffect(() => {
    fetchItems(() => apiService("getTasks", "GET"));
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
        <img src={BodyImage} loading="lazy" alt="Body illustration" />
      </FlexBox>
    </Box>
  );
};

export default Performance;
