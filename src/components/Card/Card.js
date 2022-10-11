import React from 'react';

const Card = ({homeQuiz}) => {
    console.log(homeQuiz);
    return (
      <div className="bg-gray-100 p-6 rounded shadow-lg">
        
        <img
          className="object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
          src={''}
          alt=""
        />
        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
        
        </p>
        <p className="text-gray-700 "></p>
        <p className="text-gray-700 font-bold"></p>
        <button
          type="button"
          className="px-8 block w-full mt-4 py-3 font-semibold rounded-full bg-cyan-200 text-gray-800 hover:bg-cyan-400"
        >
          Add To Cart
        </button>
      </div>
    );
};

export default Card;