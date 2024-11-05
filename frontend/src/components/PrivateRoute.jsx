// src/components/PrivateRoute.jsx
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
//import AuthContext from '../contexts/AuthContext'; // Import the AuthContext
import { useAuth } from '../context/AuthContext';

const PrivateRoute = ({ children }) => {
  //const { user } = useContext(AuthContext); // Access the user from context

 // const { user } = useAuth() ; 
 // console.log(user)

  // return (
    // <Route     
    //   element={user ? element : <Navigate to="/login" />}
    // />
  //  return user? element:<Navigate to='/login'/>
  // );

  const {user} = useAuth();
  // const users = Object.fromEntries(user);
   
    console.log(user) ;
 

   const token = localStorage.getItem('token') ; 
   //console.log(token)


   return user? children:<Navigate to='/login'/>
};

export default PrivateRoute;
