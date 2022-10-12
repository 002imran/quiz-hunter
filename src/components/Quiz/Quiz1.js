import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import "./Quiz.css"

const Quiz = () => {
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const quiz = useLoaderData();
  const questions = quiz.data.questions;
  console.log(questions);

  // Helper Functions


  /* A possible answer was clicked */
  const optionClickHandler = () => {
      if (currentQuestion + 1 < questions.length) {
        
        setCurrentQuestion(currentQuestion + 1);
         
        
      }
     
    
  };
  
  return (
    <div className='my-32'>
      <div className="question-card">
        <div className='flex justify-end'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <h3>
          Question {currentQuestion + 1} out of {questions.length}{" "}
        </h3>
        <h2 className="text-2xl bold text-stone-900">
          Q.{questions[currentQuestion].question}
        </h2>
        <ul>
          {questions[currentQuestion].options.map((option, index) => {
            return <li onClick={() => optionClickHandler(option)}> * {option}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;