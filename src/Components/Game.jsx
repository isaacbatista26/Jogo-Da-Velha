import React, { useState } from 'react';

function getInitialState() {
    const state = {};
    for(let r = 0; r < 3; r++) {
        for(let c = 0; c < 3; c++ ){
            state[`${r}-${c}`] = null;
        }
    }
    return state
}

const Game = () => {
    const [values, setValues] = useState(getInitialState);

    return (
        <div className="Game">
            <div className="Game_board">
                {Array.from({ length: 9}).map((_, index) => (
                    <button key={index} type="button">{index}</button>
                ))}
            </div>
        </div>
    );
};

export default Game;
