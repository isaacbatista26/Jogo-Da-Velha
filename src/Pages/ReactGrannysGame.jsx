import { useState } from 'react'
import "../Components/StyledComponents/reactgranys.css"
import { Link } from 'react-router-dom';


const ReactGrannysGame = () => {

  return (
    <div class = "interface">
        <h1>BEM-VINDO AO <span>TIC ORC TOE</span></h1>
        <h2>O JOGO MAIS BRUTAL DE TODOS OS TEMPOS</h2>
        <a><Link to="/orctoe">JOGAR</Link></a>
    </div>
  );
}

export default ReactGrannysGame;