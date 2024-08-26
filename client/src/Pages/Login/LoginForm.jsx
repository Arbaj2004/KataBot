import React from "react";
import InputField from "../../components/InputField.jsx";
import Button from "../../components/Button.jsx";

const LoginForm = ({ setIsSignUp }) => {
  return (
    <div className="w-full max-w-sm mt-8 lg:mt-0"> 
      <h1 className="text-4xl font-bold text-green-800 tracking-widest mb-6">LOGIN</h1>
      <InputField label="USERNAME" type="text" placeholder="Enter Username" />
      <InputField label="PASSWORD" type="password" placeholder="Enter Password" />
      <div className="flex justify-end mb-4">
        <a href="#" className="text-sm text-gray-600 hover:text-gray-800">FORGOT PASSWORD ?</a>
      </div>
      <Button text="LOGIN" />
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          DON’T HAVE AN ACCOUNT?{" "}
          <a href="#" onClick={() => setIsSignUp(true)} className="text-green-800 font-bold">
            SIGN UP
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;



