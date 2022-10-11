import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quiz = () => {
    const quiz = useLoaderData();
    // const { question } = quiz;
    const questions = quiz.data.questions;
    console.log('all question here', questions);
    return (
      //  <div className="bg-gray-100 p-6 rounded">

      // <p className="mb-2 text-xl font-bold leading-none sm:text-2xl"></p>
      // <ul className="text-gray-600 "></ul>
      // <p className="text-gray-700 font-bold"></p>

      // <button
      //   type="button"
      //   className="px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-400 text-gray-800 hover:bg-cyan-400"
      // >
      //  Submit
      // </button>
      //  </div>

      <div>
        {questions.map((question, index) => {
          return (
            <div key={index}>
              <h2>No. {question.question}</h2>
              <p>{question.options}</p>
            </div>
          );
        })}
      </div>
    );
};

export default Quiz;