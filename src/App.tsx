import React, { useState } from "react";
// Components
import QuestionCard from "./components/QuestionCard";

const TOTAL_QUSTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

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
      <QuestionCard
        questionNr={number + 1}
        totalQuestions={TOTAL_QUSTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswers={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      />
      <button className="next" onClick={nextQuestion}>
        Next Q
      </button>
    </div>
  );
};

// vid timestamp @ 25mins

export default App;
