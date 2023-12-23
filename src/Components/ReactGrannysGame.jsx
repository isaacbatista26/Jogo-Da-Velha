import { useState } from 'react'
import "./StyledComponents/reactgranys.css"


const ReactGrannysGame = () => {

  return (
    <div class = "interface">
        <h1>BEM-VINDO AO <span>TIC ORC TOE</span></h1>
        <h2>SELECIONE O MODO DE JOGO</h2>
        <p>
            O JOGO MAIS BRUTAL DE TODOS OS TEMPOS
        </p>
        <button>
            <a href = "#">Single Player</a>
        </button>
        <button>
            <a href = "#">Multiplayer</a>
        </button>
    </div>
  );
}

export default ReactGrannysGame;