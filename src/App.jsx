import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReactGrannysGame from './Pages/ReactGrannysGame.jsx';
import TicOrcToe from './Pages/TicOrcToe.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ReactGrannysGame />} />
        <Route path="/single-player" element={<TicOrcToe modoJogo="single" />} />
        <Route path="/multiplayer" element={<TicOrcToe modoJogo="multi" />} />
      </Routes>
    </Router>
  );
}

export default App;
