import React from 'react';
import { Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Corrected import

const ProtectedRoute = ({ element: Component, requiredRole, ...rest }) => {
  const token = localStorage.getItem('token');
  console.log("Token:", token);

  let role = null;

  try {
    if (token) {
      const decodedToken = jwtDecode(token); 
      role = decodedToken.role;
    }
  } catch (error) {
    console.error("Failed to decode token:", error);
    // Handle token decoding errors, e.g., by setting role to null
    role = null;
  }

  // Check if the user role matches the required role
  return role === requiredRole ? Component : <Navigate to="/signin" />;
};

export default ProtectedRoute;
