import React, { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";
import "../App.css";
import { Questions } from "../helpers/QuestionBank";
import { GameStateContext } from "../helpers/Contexts";

export default function EndScreen() {
  const { score, setScore, setGameState, userName } = useContext(QuizContext);
  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
  };
  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      {userName ? <h3>{userName}</h3> : <h3>Name ?</h3>}
      <h3>
        {score} / {Questions.length}
      </h3>
      <button onClick={restartQuiz}>Restart Quiz</button>
    </div>
  );
}
