import { useState } from 'react';
import { ScoreBoard } from './ScoreBoard';
import Board from "./Board";
import ResetButton from './ResetButton.jsx';



function TicOrcToe() {

    const WIN_CONDITION = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
  
    const [board, setBoard] = useState(Array(9).fill(null))
    const [xPlaying, setXplaying] = useState(true);
    const [scores, setScores] = useState({xScore: 0, oScore: 0 });
    const [gameOver, setGameOver] = useState(false);
  

    const defineTie = () => {
        if (!board.includes(null) && !checkWinner(board)) {
            console.log("It's a Tie!");
            setGameOver(true);
        }
      };
      
  
      const handleBoxClick = (boxIdx) => {
        const updatedBoard = board.map((value, idx) => {
          return idx === boxIdx ? (xPlaying ? "X" : "O") : value;
        });
      
        const winner = checkWinner(updatedBoard);
      
        if (winner) {
          if (winner === "O") {
            let { oScore } = scores;
            oScore += 1;
            setScores({ ...scores, oScore });
          } else {
            let { xScore } = scores;
            xScore += 1;
            setScores({ ...scores, xScore });
          }
          setGameOver(true);
          console.log(scores);
        } else {
          defineTie(); // Check for a tie when there is no winner
        }
      
        setBoard(updatedBoard);
        setXplaying(!xPlaying);
      };
      
  
    const checkWinner = (board) => {
      for(let i = 0; i < WIN_CONDITION.length; i++){
        const [x,y,z] = WIN_CONDITION[i];
  
        if (board[x] && board[x] === board[y] && board[y] === board[z]) {
          setGameOver(true);
          return board[x];
        };
      };
    };
  
    const resetBoard = () => {
      setGameOver(false);
      setBoard(Array(9).fill(null))
    };

return (
    <div className="TicOrcToe">
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}
export default TicOrcToe;