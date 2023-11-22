import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./Components/container";
import Table from "./Components/Table";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Container />} />
        <Route path="/:id" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
