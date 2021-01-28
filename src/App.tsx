import React from "react";
// Components
import QuestionCard from "./components/QuestionCard";

const App = () => {
  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="Score">Score</p>
      <p className="Loading">Loading Qs</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Q
      </button>
    </div>
  );
};

export default App;
