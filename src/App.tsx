import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { Container } from "@mui/system";

import List from "./pages/List";
import Result from "./pages/Result";

function App() {
  const [ results, setResults ] = useState([]);

  const uploadResults = (data: any) => {
    setResults(data);
  };

  return (
    <div style={{ padding: 20, background: "#80808020" }}>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<List uploadResults={uploadResults} />} />
            <Route path="/results" element={<Result results={results} />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
