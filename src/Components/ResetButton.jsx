import React from "react";
import "./StyledComponents/ResetButton.css";

const ResetButton = ({resetBoard}) => {
    return (
        <button className="reset-btn" onClick={resetBoard}>Reiniciar Board</button>
    );
}

export default ResetButton;
