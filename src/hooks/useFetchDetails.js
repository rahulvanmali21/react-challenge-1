import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchDetails = (id) => {
  const [loading, setloading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    setloading(true);
    try {
      const { data } = await axios.get(`https://example.com/cards/${id}`);
      setResult(data);
      setError(null);
    } catch (error) {

      setError(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchData();
    } else {
      setResult(null);
    }
  }, [id]);

  return { loading, result, error };
};

export default useFetchDetails;
