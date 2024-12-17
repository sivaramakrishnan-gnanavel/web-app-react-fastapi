import { useState } from "react";

const useApiHandler = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleApiCall = async (apiCall) => {
    setLoading(true);
    try {
      const { data, error } = await apiCall();
      if (data) {
        setResponse(data);
        setError(null);
      } else {
        setResponse(null);
        setError(error);
      }
    } catch (err) {
      setResponse(null);
      setError(err.message || "An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, handleApiCall };
};

export default useApiHandler;
