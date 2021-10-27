import { useState, useCallback } from "react";

function useHttp() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);

  const fetchData = useCallback(async (url, applyData) => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();

      applyData(data);
    } catch (err) {
      setError(err.message || "could not send request");
    }
    setIsLoading(false);
  }, []);

  return {
    error,
    isLoading,
    fetchData,
  };
}

export default useHttp;
