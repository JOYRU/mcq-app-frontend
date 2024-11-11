// src/components/PrivateRoute.jsx
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
//import AuthContext from '../contexts/AuthContext'; // Import the AuthContext
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {

  const {user} = useAuth();


   const token = localStorage.getItem('token') ; 
  console.log(token)
  console.log(user)


   return token? children:<Navigate to='/login'/>
};

export default PrivateRoute;
