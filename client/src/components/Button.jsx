import React from "react";

const Button = ({ text }) => {
  return (
    <button 
      className="bg-yellow-500 text-white font-bold py-2 px-4 w-full hover:bg-yellow-600"
      style={{ borderRadius: 'calc(0.5 * 2.5rem)' }} // 2.5rem is the height (including padding)
    >
      {text}
    </button>
  );
};

export default Button;

