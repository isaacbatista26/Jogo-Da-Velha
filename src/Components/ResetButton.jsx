import React from "react";
import "./StyledComponents/ResetButton.css";

export const ResetButton = ({resetBoard}) => {
    return (
        <button className="reset-btn" onClick={resetBoard}>Reset</button>
        )
}