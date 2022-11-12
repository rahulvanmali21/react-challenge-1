import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const useFetchbuildCard = () => {
  const [loading, setloading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const executed = useRef(false);

  const fetchData = async () => {
    setloading(true);
    try {
      const { data } = await axios.get(`https://example.com/build-buy/cards`);
      setError(null);
      setResult(data);
    } catch (error) {
      if (error.response.status === 404) {
        window?.alert(
          "please enable tweak-mock-and-modify chrome extenstion as described in readme file"
        );
      }
      setError(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (executed.current === false) {
      fetchData();
    }

    return () => {
      executed.current = true;
    };
  }, []);

  return { loading, result, error };
};

export default useFetchbuildCard;
