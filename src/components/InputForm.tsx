import React, { useState } from "react";
import BasicDatePicker from "./DateRange";
import TextField from "@mui/material/TextField";
import Grid from "@mui/system/Unstable_Grid/Grid";
import { Button } from "@mui/material";
import Create from "@mui/icons-material/Create";

const InputForm = ({ createTx }: { createTx: any}) => {
  const [ id, setId ] = useState("");
  const [ date, setDate ] = useState("");
  const [ amount, setAmount ] = useState("");
  const [ retailer, setRetailer ] = useState("");

  const uploadDate = (date: string) => {
    setDate(date);
  };
  
  return (
    <Grid container spacing={2}>
      <Grid xl={2} lg={2} md={4} sm={4} xs={5}>
        <TextField id="standard-basic" label="ID" variant="outlined" size="small" onChange={(e) => setId(e.target.value)} />
      </Grid>
      <Grid xl={3} lg={3} md={8} sm={8} xs={7}>
        <BasicDatePicker isSmall={true} uploadDate={uploadDate} />
      </Grid>
      <Grid xl={2} lg={2} md={4} sm={4} xs={5}>
        <TextField id="standard-basic" label="Amount" variant="outlined" size="small" onChange={(e) => setAmount(e.target.value)} type="number" />
      </Grid>
      <Grid xl={3} lg={3} md={4} sm={4} xs={7}>
        <TextField id="standard-basic" label="Retailer" variant="outlined" size="small" onChange={(e) => setRetailer(e.target.value)} />
      </Grid>
      <Grid xl={2} lg={2} md={4} sm={4} xs={12}>
        <Button disabled={false} size="large" variant="contained" startIcon={<Create/>} onClick={() => createTx(id, date, parseFloat(amount), retailer)}>Create</Button>
      </Grid>
    </Grid>
  );
};

export default InputForm;