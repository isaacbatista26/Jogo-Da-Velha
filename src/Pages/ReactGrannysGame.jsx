import { useState } from 'react'
import "../Components/StyledComponents/reactgranys.css"
import { Link } from 'react-router-dom';


const ReactGrannysGame = () => {

  return (
    <div class = "interface">
        <h1>BEM-VINDO AO <span>TIC ORC TOE</span></h1>
        <h2>O JOGO MAIS BRUTAL DE TODOS OS TEMPOS</h2>
        <Link to="/single-player">
        <button className='modo-btn'>Single Player</button>
      </Link>
      <Link to="/multiplayer">
        <button className='modo-btn'>Multiplayer</button>
      </Link>
    </div>
  );
}

export default ReactGrannysGame;