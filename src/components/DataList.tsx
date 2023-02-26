import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function VisibleColumnsBasicExample({ rows }: { rows: Array<object> }) {
  return (
    <div style={{ height: 500 }}>
      <DataGrid
        columns={[
          { field: "id", hideable: false },
          { field: "ID" },
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