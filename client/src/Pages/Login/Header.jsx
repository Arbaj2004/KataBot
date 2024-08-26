import React from "react";

const Header = ({ isSignUp, setIsSignUp }) => {
  return (
    <div className="absolute top-4 right-4 flex space-x-2 z-10">
      <button
        onClick={() => setIsSignUp(false)}
        className={`px-4 py-2 rounded-full ${!isSignUp ? 'bg-yellow-500 text-white' : 'border-2 border-gray-400 text-gray-700'} hover:bg-yellow-600`}
      >
        Sign In
      </button>
      <button
        onClick={() => setIsSignUp(true)}
        className={`px-4 py-2 rounded-full ${isSignUp ? 'bg-yellow-500 text-white' : 'border-2 border-gray-400 text-gray-700'} hover:bg-yellow-600`}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Header;




