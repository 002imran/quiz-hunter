import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({quizCard}) => {
    // console.log(quizCard);
    const {logo, name, total, id} = quizCard;
    return (
      <div className="bg-gray-100 p-6 rounded">
        <img
          className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
          src={logo}
          alt=""
        />
        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl"></p>
        <p className="text-gray-600 ">Quiz On: {name}</p>
        <p className="text-gray-700 font-bold">Total Qustion: {total}</p>

        <button
          type="button"
          className="px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-400 text-gray-800 hover:bg-cyan-400"
        >
          <Link to={`/quizCard/${id}`}> Sart Your Quiz{id}</Link>
        </button>
      </div>
    );
};

export default Card;