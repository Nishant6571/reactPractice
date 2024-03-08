import React from "react";
import { useFetch } from "./useFetch";

const Coffee = () => {
  const { restData, loading, error } = useFetch(
    "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/getrestaurants"
  );

  if (loading) {
    return <p>...loading </p>;
  }
  if (error) {
    return <p>{error} </p>;
  }

  return (
    <>
      <ol>
        {restData.map((rest) => {
          return (
            <li key={rest.id}>
              <h3>{rest.name}</h3>
              <h3>{rest.type}</h3>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default Coffee;
