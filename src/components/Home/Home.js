import React from "react";
import img from '../assets/quiz-hunter.png';

const Header = () => {
  return (
    <div>
      <div className="p-6 py-12 dark:bg-violet-400 dark:text-gray-900">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-52">
            <h2 className="text-center text-6xl tracking-tighter font-bold">
                <img className="h-48 w-80 shadow-2xl rounded-md" src={img} alt=''></img>
            </h2>
            <div className="text-5xl space-x-2 text-center py-2 lg:py-0">
              <span className="text-white">Welcome to</span>
              <span className="text text-pink-900">QUIZ HUNTER</span>
            </div>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
