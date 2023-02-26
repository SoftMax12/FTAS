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
      <Grid xs={3}>
        <BasicDatePicker label="Date From" uploadDate={uploadDateFrom} />
      </Grid>
      <Grid xs={3}>
        <BasicDatePicker label="Date To" uploadDate={uploadDateTo} />
      </Grid>
      <Grid xs={3}>
        <TextField id="standard-basic" label="Retailer" variant="outlined" onChange={(e) => setRetailer(e.target.value)} />
      </Grid>
      <Grid xs={3}>
        <Button color="success" disabled={false} size="large" variant="contained" endIcon={<Search/>} onClick={() => filterTx(dateFrom, dateTo, retailer)}>Search</Button>
      </Grid>
    </Grid>
  );
};

export default Filter;