import React, { useContext } from "react";
import "../App.css";
import { QuizContext } from "../helpers/Contexts";

export default function MainMenu() {
  const { gameState, setGameState, userName, setUserName } =
    useContext(QuizContext);
  return (
    <div className="Menu">
      <label>Enter Your Name:</label>
      <input
        className="space"
        type="text"
        placeholder="Your Name"
        onChange={(event) => {
          setUserName(event.target.value);
        }}
      />
      <button
        onClick={() => {
          setGameState("quiz");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}
