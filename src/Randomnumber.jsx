import React, { useState } from "react";

const Randomnumber = () => {
  const [randomNumber, setRandomNumber] = useState("");

  const generateRandom = () => {
    setRandomNumber(Math.floor(Math.random() * 10));
  };

  return (
    <>
      <div>Randomnumber:{randomNumber}</div>
      <button onClick={generateRandom}>Generate</button>
    </>
  );
};

export default Randomnumber;
