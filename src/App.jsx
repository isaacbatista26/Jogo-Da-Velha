import React from 'react';
import "./App.css";
import { useState } from 'react'
import TicOrcToe from './Components/TicOrcToe';
import { ScoreBoard } from './Components/ScoreBoard.jsx';
import ReactGrannysGame from './Components/ReactGrannysGame';


function App() {
  return (
    <div className="App">
      <TicOrcToe />
      {/*<ReactGrannysGame />*/}
    </div>
  );
}

export default App;
