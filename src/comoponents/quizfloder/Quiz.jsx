import React, { useState, useEffect } from 'react';
import './Quiz.css';
import { QuizData } from '../../Data/QuizData';
import QuizResult from './QuizResult';

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [clickedOption, setClickedOption] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [remainingTime, setRemainingTime] = useState(60);

  useEffect(() => {
    // Timer countdown
    const timer = setInterval(() => {
      setRemainingTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clear timer when the component is unmounted
    return () => clearInterval(timer);
  }, []);

  const changeQuestion = () => {
    updateScore();
    if (currentQuestion < QuizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setClickedOption(0);
    } else {
      setShowResult(true);
    }
  };

  const updateScore = () => {
    if (clickedOption === QuizData[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const resetAll = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setClickedOption(0);
    setScore(0);
    setRemainingTime(60);
  };

  useEffect(() => {
    if (remainingTime === 0) {
      setShowResult(true);
    }
  }, [remainingTime]);

  return (
    <div>
      <p className="heading-txt">Quiz APP</p>
      <div className="container">
        {showResult ? (
          <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
        ) : (
          <>
            <div className="question">
              <span id="question-number">{currentQuestion + 1}. </span>
              <span id="question-txt">{QuizData[currentQuestion].question}</span>
            </div>
            <div className="option-container">
              {QuizData[currentQuestion].options.map((option, i) => {
                return (
                  <button
                    className={`option-btn ${clickedOption === i + 1 ? 'checked' : null}`}
                    key={i}
                    onClick={() => setClickedOption(i + 1)}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            <input type="button" value="Next" id="next-button" onClick={changeQuestion} />
            <div className="timer">Time Remaining: {remainingTime}s</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
