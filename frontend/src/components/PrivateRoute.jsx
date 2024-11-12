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


// const PrivateRoute = ({ element, requiredRoles, ...rest }) => {
//   const { user } = useAuth();

//   // If the user is not logged in, redirect to login page
//   if (!user) {
//     return <Navigate to="/login" />;
//   }

//   // Check if the user role matches the required roles for the route
//   if (requiredRoles && !requiredRoles.includes(user.role)) {
//     // If the user role doesn't match, redirect to "Not Authorized" page
//     return <Navigate to="/not-authorized" />;
//   }

//   // If the user is authorized, render the element (route component)
//   return <Route {...rest} element={element} />;
// };

const PrivateRoute = ({ element: Element, allowedRoles=[], ...rest }) => {
  const { user } = useAuth();

  // If user is not logged in, redirect to login page
  if (!user) {
      return <Navigate to="/login" />;
  }

  // If the user's role is not allowed, redirect to unauthorized page or any other page you choose
  if (!allowedRoles.includes(user.role)) {
      return <Navigate to="/unauthorized" />;
  }
  // if (!Array.isArray(allowedRoles) || !allowedRoles.includes(user.role)) {
  //   return <Navigate to="/unauthorized" />;
  //  }
  console.log(Element) ;
  return <Element {...rest} />;

  // Render the component if the user is authorized
  // return <Route {...rest} element={<Element />} />;
};

export default PrivateRoute;


 //export default PrivateRoute;

