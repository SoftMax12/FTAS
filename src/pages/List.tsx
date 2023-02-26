import React from "react";

import InputForm from "../components/InputForm";
import DataList from "../components/DataList";
import Filter from "../components/Filter";
import { Card } from "@mui/material";

const List = () => {
  return (
    <>
      <Card style={{ padding: 20, margin: 30 }}>
        <InputForm/>
      </Card>
      <Card style={{ padding: 20, margin: 30 }}>
        <DataList/>
      </Card>
      <Card style={{ padding: 20, margin: 30 }}>
        <Filter/>
      </Card>
    </>
  );
};

export default List;