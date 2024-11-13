// src/components/PrivateRoute.jsx
import React, { useContext } from 'react';
 import { Route, Navigate  } from 'react-router-dom';
 //import AuthContext from '../contexts/AuthContext'; // Import the AuthContext
 import { useAuth } from '../context/AuthContext';


// const PrivateRoute = ({ children }) => {

//   const {user} = useAuth();


//    const token = localStorage.getItem('token') ; 
 

//    return token? children:<Navigate to='/login'/>
// };


// const PrivateRoute = ({ element: Element, allowedRoles=[], ...rest }) => {
//   const { user } = useAuth();
//   console.log(user)

//   if (!user) {
//       return <Navigate to="/login" />;
//   }


//   if (!allowedRoles.includes(user.role)) {
//       return <Navigate to="/unauthorized" />;
//   }

  
//   return <Element {...rest} />;

// };

const PrivateRoute = ({ element: Element, allowedRoles = [], ...rest }) => {
  const { user, loading } = useAuth();
  console.log(user)

  // If user data is still loading, prevent rendering to avoid showing incorrect state
  if (loading) {
      return <div>Loading...</div>; // You can customize this with a loading spinner
  }

  // If no user is logged in, redirect to login page
  if (!user) {
      return <Navigate to="/login" />;
  }

  // If the user doesn't have the required role, redirect to unauthorized page
  if (!allowedRoles.includes(user.role)) {
      return <Navigate to="/unauthorized" />;
  }

  // If the user is authenticated and has the required role, render the component
  return <Element {...rest} />;
};


export default PrivateRoute;


 //export default PrivateRoute;

