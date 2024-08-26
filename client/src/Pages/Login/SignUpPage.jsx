import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header.jsx";
import LoginForm from "./LoginForm.jsx";
import SignUpForm from "./SignUp.jsx";
import teamwork from "../../assets/login.png";

const SignUpPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="relative h-screen flex flex-col lg:flex-row">
      {/* Back to Homepage Button */}
      <div className="absolute top-4 left-4 z-10">
        <button
          onClick={() => navigate('/')}  // Navigates to the homepage
          className="text-sm px-4 py-2 bg-gray-200 hover:bg-yellow-400 rounded-lg shadow-md transition-colors duration-300"
        >
          Back
        </button>
      </div>

      {/* Left Image Section */}
      <div className="w-full lg:w-1/2 h-1/2 lg:h-full hidden lg:flex justify-center items-center">
        <img 
          src={teamwork} 
          alt="Teamwork" 
          className="w-full h-full object-cover" 
        />
      </div>
      
      {/* Right Form Section */}
      <div className="w-full lg:w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8 lg:pt-16 lg:pb-16">
        <Header isSignUp={isSignUp} setIsSignUp={setIsSignUp} />
        <div className="w-full max-w-md mt-8">
          {isSignUp ? <SignUpForm setIsSignUp={setIsSignUp} /> : <LoginForm setIsSignUp={setIsSignUp} />}
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;





