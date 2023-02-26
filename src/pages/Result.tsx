import React from "react";

const Result = ({results}: {results: any}) => {
  const data = results.map((item: any) => item.Amount);
  let sum = 0;
  data.map((i: number) => {sum = sum + i;});

  return (
    <>
      <p>Number of Transactions = { results.length }</p>
      <p>Average Transaction Value = { results.length ? sum / results.length : 0}</p>
    </>
  );
};

export default Result;