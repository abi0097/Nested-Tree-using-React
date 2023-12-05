import './App.css';
import Nested from './components/Nested';
import React from 'react';
import Table from './components/Table';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Nested />} />
        <Route exact path="/:id" element={<Table />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
