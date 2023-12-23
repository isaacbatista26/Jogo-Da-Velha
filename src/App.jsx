import React from 'react';
import "./App.css";
import { useState } from 'react'
import TicOrcToe from './Pages/TicOrcToe.jsx';
import ReactGrannysGame from './Pages/ReactGrannysGame.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactGrannysGame />} />
        <Route path="/orctoe" element={<TicOrcToe />} />
      </Routes>
    </Router>
  );
}

export default App;
