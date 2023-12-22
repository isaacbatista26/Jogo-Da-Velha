import React from 'react';
import "./App.css";
import TicOrcToe from './Components/TicOrcToe';
import { ScoreBoard } from './Components/ScoreBoard.jsx';

function App() {
  return (
    <div className="App">
      <TicOrcToe />
      {/*<ReactGrannysGame />*/}
    </div>
  );
}

export default App;
