import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const rows = [
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
  },
];

export default function VisibleColumnsBasicExample() {
  return (
    <div style={{ height: 500 }}>
      <DataGrid
        columns={[
          { field: "id", hideable: false },
          { field: "Date", width: 200 },
          { field: "Amount" },
          { field: "Retailer" },
        ]}
        rows={rows}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </div>
  );
}