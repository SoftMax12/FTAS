import React from "react";
import BasicDatePicker from "./DateRange";
import TextField from "@mui/material/TextField";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Button } from "@mui/material";
import Create from "@mui/icons-material/Create";

const InputForm = () => {
  return (
    <Grid container spacing={2}>
      <Grid xs={2}>
        <TextField id="standard-basic" label="ID" variant="outlined" size="small" />
      </Grid>
      <Grid xs={3}>
        <BasicDatePicker isSmall={true} />
      </Grid>
      <Grid xs={2}>
        <TextField id="standard-basic" label="Amount" variant="outlined" size="small" />
      </Grid>
      <Grid xs={3}>
        <TextField id="standard-basic" label="Retailer" variant="outlined" size="small" />
      </Grid>
      <Grid xs={2}>
        <Button disabled={false} size="large" variant="contained" startIcon={<Create/>}>Create</Button>
      </Grid>
    </Grid>
  );
};

export default InputForm;