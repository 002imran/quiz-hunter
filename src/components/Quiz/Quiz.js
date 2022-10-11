

// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const Quiz = () => {
//     const quiz = useLoaderData();
//     // const { question } = quiz;
//     const questions = quiz.data.questions;

//     console.log('all question here', questions);
//     // console.log('all options', options);
//     return (

//       <div>
//         {questions.map((question, index) => {
//           return (
//             <div key={index}>

//               <div className="bg-gray-100 p-6 rounded">
//                 <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
//                   Q.{question.question}
//                 </p>
//                 {/* <ul className="text-gray-600 "> */}
//                   <li>{question.options[0]}</li>
//                   <li>{question.options[1]}</li>
//                   <li>{question.options[2]}</li>
//                   <li>{question?.options[3]?question.options[3]:'All The Avobe'}</li>
//                 {/* </ul> */}
//                 {/* <p className="text-gray-700 font-bold"></p> */}

//                 <button
//                   type="button"
//                   className="px-8 block w-50 mt-4 py-3 font-semibold rounded-full bg-cyan-400 text-gray-800 hover:bg-cyan-400"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     );
// };

// export default Quiz;

/**
 * 
 * <div>
        {questions.map((question, index) => {
          return (
            <div key={index}>
              <h2>Q.{question.question}</h2>
              <li>{question.options[0]}</li>
              <li>{question.options[1]}</li>
              <li>{question.options[2]}</li>
              <li>{question.options[3]}</li>
             
             
              
            </div>
          );
        })}
      </div>
 */
