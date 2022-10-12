import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AiFillEye } from "react-icons/ai";
// import { toast } from 'react-toastify';
 import { ToastContainer, toast } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

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
  
   const notify = () => toast(questions[currentQuestion].correctAnswer);
  
  
  return (
    <div className="my-32">
      <div className="question-card">
        <div className="flex justify-end text-2xl text-blue-200">
          <p className='mr-3 text-black'>Correct one</p>
          <button onClick={notify}>
            <AiFillEye />
            <ToastContainer />
            
          </button>
        </div>

        <h2>
          Question {currentQuestion + 1} out of {questions.length}
        </h2>
        <h2 className="text-2xl bold text-stone-900">
          Q.{questions[currentQuestion].question}
        </h2>

        
        <ul>
          {questions[currentQuestion].options.map((option, index) => {
            return (
              <li onClick={() => optionClickHandler(option)}> * {option}</li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;