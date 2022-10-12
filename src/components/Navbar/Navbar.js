import React from 'react';
import Logo from '../assets/quiz-hunter.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <p
            rel="noopener noreferrer"
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <h3 className="text-2xl flex gap-2 items-center justify-center ">
              <img className="h-7 w-7 rounded-md" src={Logo} alt=""></img>
              Quiz Hunter
            </h3>
          </p>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <p
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                <Link to='/home'>Home</Link>
              </p>
            </li>
            <li className="flex">
              <p
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                <p to="/header">Blog</p>
              </p>
            </li>
            <li className="flex">
              <p
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                Statistics
              </p>
            </li>
            <li className="flex">
              <p
                rel="noopener noreferrer"
                href="#"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent"
              >
                About Us
              </p>
            </li>
          </ul>
          <button className="flex justify-end p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    );
};

export default Navbar;