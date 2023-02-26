import React from "react";
import { useNavigate } from "react-router-dom";

const Result = ({results}: {results: any}) => {
  const navigate = useNavigate();

  const data = results.map((item: any) => item.Amount);
  let sum = 0;
  data.map((i: number) => {sum = sum + i;});

  return (
    <>
      <p>Number of Transactions = { results.length }</p>
      <p>Average Transaction Value = { results.length ? sum / results.length : 0}</p>
      <button onClick={() => navigate("/")}>Back</button>
    </>
  );
};

export default Result;