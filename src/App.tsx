import React from "react";
import { Container } from "@mui/system";

import List from "./pages/List";

function App() {
  return (
    <div style={{ padding: 20, background: "#80808020" }}>
      <Container>
        <List />
      </Container>
    </div>
  );
}

export default App;
