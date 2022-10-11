import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import "./Quiz.css"

const Quiz = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const quiz = useLoaderData();   
    const questions = quiz.data.questions;
      console.log(questions);
      

  return (
    <div>
      

      <div className="question-card">
        <h3>Question {currentQuestion + 1} out of {questions.length} </h3>
        <h2 className='text-2xl bold text-white'>{questions[currentQuestion].question}</h2> 
        <ul>
            {questions[currentQuestion].options.map((option,index)=>{
                return(
                    <li>{option}</li>
            )
            })}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;