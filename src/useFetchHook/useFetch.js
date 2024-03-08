import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [restData, setRestData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Error, setError] = useState("");

  useEffect(() => {
    const fetchRestData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        if (data) {
          setLoading(false);
          setRestData(data.data);
          console.log(data.data);
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(err.message);
      }
    };
    fetchRestData();
  }, [url]);
  return { restData, loading, Error };
};
