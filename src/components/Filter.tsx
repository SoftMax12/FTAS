import React, { useState } from "react";
import BasicDatePicker from "./DateRange";
import TextField from "@mui/material/TextField";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Button } from "@mui/material";
import Search from "@mui/icons-material/Search";

const Filter = ({ filterTx }: { filterTx: any}) => {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [retailer, setRetailer] = useState("");

  const uploadDateFrom = (date: string) => {
    setDateFrom(date);
  };

  const uploadDateTo = (date: string) => {
    setDateTo(date);
  };

  return (
    <Grid container spacing={2}>
      <Grid xl={3} lg={3} md={3} sm={4} xs={6}>
        <BasicDatePicker label="Date From" uploadDate={uploadDateFrom} />
      </Grid>
      <Grid xl={3} lg={3} md={3} sm={4} xs={6}>
        <BasicDatePicker label="Date To" uploadDate={uploadDateTo} />
      </Grid>
      <Grid xl={3} lg={3} md={3} sm={4} xs={12}>
        <TextField id="standard-basic" label="Retailer" variant="outlined" onChange={(e) => setRetailer(e.target.value)} />
      </Grid>
      <Grid xl={3} lg={3} md={3} sm={12} xs={12}>
        <Button color="success" disabled={false} size="large" variant="contained" endIcon={<Search/>} onClick={() => filterTx(dateFrom, dateTo, retailer)}>Search</Button>
      </Grid>
    </Grid>
  );
};

export default Filter;