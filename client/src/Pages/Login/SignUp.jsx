import React, { useState } from "react";
import InputField from "../../components/InputField.jsx";
import Button from "../../components/Button.jsx";

const SignUpForm = ({ setIsSignUp }) => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;
    let newErrors = {};

    // Check if all fields are filled
    for (let key in formData) {
      if (!formData[key]) {
        valid = false;
        newErrors[key] = "This field is required";
      }
    }

    // Check if password matches confirm password
    if (formData.password !== formData.confirmPassword) {
      valid = false;
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);

    if (valid) {
      // If validation passes, log the form data for now
      console.log("Form data: ", formData);
      // Proceed with form submission logic (e.g., send data to a backend)
    } else {
      // Log errors for debugging purposes
      console.log("Form errors: ", newErrors);
    }
  };

  return (
    <div className="w-full max-w-sm">
      <h1 className="text-4xl font-bold text-green-800 tracking-widest mb-6">CREATE ACCOUNT</h1>

      <form onSubmit={handleSubmit}>
        <InputField 
          label="EMAIL" 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange}
          error={errors.email} 
        />
        <InputField 
          label="NAME" 
          type="text" 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          error={errors.name} 
        />
        {/* <InputField 
          label="USERNAME" 
          type="text" 
          name="username" 
          value={formData.username} 
          onChange={handleChange} 
          error={errors.username} 
        /> */}
        <InputField 
          label="PHONE NUMBER" 
          type="text" 
          name="phoneNumber" 
          value={formData.phoneNumber} 
          onChange={handleChange} 
          error={errors.phoneNumber} 
        />

        <InputField 
          label="PASSWORD" 
          type="password" 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          error={errors.password} 
        />
        <InputField 
          label="CONFIRM PASSWORD" 
          type="password" 
          name="confirmPassword" 
          value={formData.confirmPassword} 
          onChange={handleChange} 
          error={errors.confirmPassword} 
        />
        
        <Button text="CREATE ACCOUNT" />
      </form>

      <div className="mt-6 text-center">
        <p className="text-sm text-gray-600">
          ALREADY HAVE AN ACCOUNT? <a href="#" onClick={() => setIsSignUp(false)} className="text-green-800 font-bold">SIGN IN</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;