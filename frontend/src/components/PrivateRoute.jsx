// src/components/PrivateRoute.jsx
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
//import AuthContext from '../contexts/AuthContext'; // Import the AuthContext
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
  //const { user } = useContext(AuthContext); // Access the user from context

  const { user } = useAuth() ; 
  console.log(user)

  return (
    <Route
      {...rest}
      element={user ? element : <Navigate to="/login" />}
    />
  );
};

export default PrivateRoute;
