import { useState } from 'react';
import { ScoreBoard } from '../Components/ScoreBoard.jsx';
import Board from "../Components/Board.jsx";
import ResetButton from '../Components/ResetButton.jsx';
import '../Components/StyledComponents/TicOrcToe.css'
import { Link } from 'react-router-dom';

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
    const [moveCount, setMoveCount] = useState(0);
    const [isTie, setIsTie] = useState(false);
    const [showResetScore, setShowResetScore] = useState(true);
    const [playerSymbol, setPlayerSymbol] = useState('X');

    const chooseSymbol = (symbol) => {
      setPlayerSymbol(symbol);
      setXplaying(symbol === 'X');
    };

    const resetScore = () => {
      setScores({ xScore: 0, oScore: 0});
      setShowResetScore(false);
      resetBoard();
    };

    const startGame = () => {
      setBoard(Array(9).fill(null));
      setMoveCount(0);
      setGameOver(false);
      setIsTie(false);
      setScores({ xScore: 0, oScore: 0 });
      setShowResetScore(false);
      setPlayerSymbol(null);
    }

    const defineTie = () => {
        if (moveCount === 8 && !checkWinner(board)) {
            setIsTie(true);
            console.log("It's a Tie!");
            setGameOver(true);
            setShowResetScore(true);
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
          setShowResetScore(true);
        } else {
            setMoveCount(moveCount + 1);
            defineTie();
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
      setIsTie(false);
      setGameOver(false);
      setBoard(Array(9).fill(null));
      setMoveCount(0);
      setShowResetScore(true);
    };

    return (
      <div className="TicOrcToe">
        {playerSymbol ? (
          <>
          <div>
            <p className='textoescolha'>Player 1, escolha um símbolo:</p>
            <button className='button-X' onClick={() => chooseSymbol('X')}>X</button>
            <button className='button-O'onClick={() => chooseSymbol('O')}>O</button>
            <button className='comecar-jogo' onClick={startGame}>Começar o Jogo</button>
          </div>
          </>
        ) : (
          <div>
            {showResetScore && <button className='Placar' onClick={resetScore}>Resetar Placar</button>}
            <ScoreBoard scores={scores} xPlaying={xPlaying} />
            <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
            <ResetButton resetBoard={resetBoard} />
            <a><Link to="/">Voltar</Link></a>
            {isTie && <p className='empate'>Empate!!</p>}
          </div>
        )}
      </div>
    );
}
export default TicOrcToe;