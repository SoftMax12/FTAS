import React from "react";
import BasicDatePicker from "./DateRange";
import TextField from "@mui/material/TextField";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Button } from "@mui/material";
import Search from "@mui/icons-material/Search";

const Filter = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={3}>
        <BasicDatePicker label="Date From" />
      </Grid>
      <Grid xs={3}>
        <BasicDatePicker label="Date To" />
      </Grid>
      <Grid xs={3}>
        <TextField id="standard-basic" label="Retailer" variant="outlined" />
      </Grid>
      <Grid xs={3}>
        <Button color="success" disabled={false} size="large" variant="contained" endIcon={<Search/>}>Search</Button>
      </Grid>
    </Grid>
  );
};

export default Filter;