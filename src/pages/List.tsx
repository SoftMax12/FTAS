import React, { useState } from "react";

import InputForm from "../components/InputForm";
import DataList from "../components/DataList";
import Filter from "../components/Filter";
import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const List = ({uploadResults}: {uploadResults: any}) => {
  const navigate = useNavigate();

  const [ rows, setRows ] = useState([
    {
      id: 1,
      ID: "WLMFRDGD",
      Date: "20/08/2018 12:45:33",
      Amount: 59.99,
      Retailer: "Kwik-E-Mart",
    },
    {
      id: 2,
      ID: "YGXKOEIA",
      Date: "20/08/2018 12:46:17",
      Amount: 10.95,
      Retailer: "Kwik-E-Mart",
    },
    {
      id: 3,
      ID: "LFVCTEYM",
      Date: "20/08/2018 12:50:02",
      Amount: 5.00,
      Retailer: "MacLaren",
    },
    {
      id: 4,
      ID: "SUOVOISP",
      Date: "20/08/2018 13:12:22",
      Amount: 5.00,
      Retailer: "Kwik-E-Mart",
    },
    {
      id: 5,
      ID: "JYAPKZFZ",
      Date: "20/08/2018 14:07:10",
      Amount: 99.50,
      Retailer: "MacLaren",
    }
  ]);

  const createTx = (id: string, date: string, amount: number, retailer: string): void => {
    const dateParsed = new Date(Date.parse(date)).toLocaleString("en-GB", { timeZone: "UTC" });
    setRows([
      ...rows,
      { id: rows.length+1, ID: id, Date: dateParsed, Amount: amount, Retailer: retailer }
    ]);
  };

  const filterTx = (dateFrom: string, dateTo: string, retailer: string): void => {
    let tmp = rows.filter(row => row.Retailer.includes(retailer));
    
    let from = Date.parse(dateFrom);
    let to = Date.parse(dateTo);

    if (Number.isNaN(from)) from = -8640000000000000;
    if (Number.isNaN(to)) to = 8640000000000000;

    tmp = tmp.filter(row => {
      let temp = "";

      const dt  = row.Date.substring(0,2);
      const mon = row.Date.substring(3,5);
      const yr  = row.Date.substring(6,10);  

      temp = mon + "/" + dt + "/" + yr;
      
      const date = Date.parse(temp);
      
      return from < date && date < to;
    });

    uploadResults(tmp);
    navigate("/results");
  };

  return (
    <>
      <Card style={{ padding: 20, margin: 30 }}>
        <InputForm createTx={createTx} />
      </Card>
      <Card style={{ padding: 20, margin: 30 }}>
        <DataList rows={rows} />
      </Card>
      <Card style={{ padding: 20, margin: 30 }}>
        <Filter filterTx={filterTx} />
      </Card>
    </>
  );
};

export default List;