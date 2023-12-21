import React from 'react';

const Game = () => {
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
