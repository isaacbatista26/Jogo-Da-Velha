import { useState } from 'react';
import "./App.css";
import Box from './Components/Box.jsx';
import ReactGrannysGame from './Components/ReactGrannysGame';
import Board from "./Components/Board.jsx";

function App() {
  const board = ["X","X","X","X","X","X","X","X","X",]
  return (
    <div className="App">
      <Board board={board} onClick={null} />
      {/*<ReactGrannysGame />*/}
    </div>
  );
}

export default App
