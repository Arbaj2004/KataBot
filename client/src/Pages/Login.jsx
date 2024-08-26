import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Login/Header.jsx";
import LoginForm from "./Login/LoginForm.jsx";
import SignUpForm from "./Login/SignUp.jsx";
import teamwork from "../assets/login.png";

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex flex-col lg:flex-row">
      
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => navigate('/')}  // Navigates to the homepage
          className="text-sm px-4 py-2 bg-gray-200 hover:bg-yellow-400 rounded-lg shadow-md transition-colors duration-300"

        >
          Back 
        </button>
      </div>

      
      <div className="w-full lg:w-1/2 hidden lg:flex justify-center items-center">
        <img 
          src={teamwork} 
          alt="Teamwork" 
          className="rounded shadow-md w-full h-full object-cover" 
        />
      </div>

      
      <div className="w-full lg:w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8">
        <Header isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
        {isSignUp ? <SignUpForm setIsSignUp={setIsSignUp} /> : <LoginForm setIsSignUp={setIsSignUp} />}
      </div>
    </div>
  );
};

export default LoginPage;
