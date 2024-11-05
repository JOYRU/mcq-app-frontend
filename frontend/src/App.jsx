// frontend/src/App.js
import React from 'react';
// import {BrowserRouter as  Router,Routes,Route,Navigate, BrowserRouter} from 'react-router-dom'
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'
import QuestionForm from './components/Question/QuestionForm';
import ExamForm from './components/Exam/CreateExam';
import './index.css'
import Dashboard from './components/pages/Dashboard';
import ExamCard from './components/Dashboard/ExamCard';
import ExamDetails from './components/Exam/ExamDetails';
import Register from './components/Authentication/Register';
import Login from './components/Authentication/Login';
import ForgotPassword from './components/Authentication/ForgetPassword';
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './components/PrivateRoute';


// const App = () => {
//   return (
//     <Router>
//        <Routes>
//        <Route path="/register" element={<Register />} />
//        <Route path="/login" element={<Login />} />
//        <Route path="/forget-password" element={<ForgotPassword />} />
//        <Route path="/" element={<Navigate to="/login"/>}></Route>
//          <Route path="dashboard/questions/add" element={<QuestionForm/>}></Route>
//           <Route path="dashboard/exam/create" element={<ExamForm />}></Route>
//           <Route path="exam/:id" element={<ExamDetails />}></Route>
//          <Route path="/dashboard" element={  
//               <Dashboard /> }>
//         </Route>
//         <Route path="/dashboard" element={<ExamCard />}></Route>
        
//        </Routes>
       
//     </Router>   
 
    
    
//   );
// };

//export default App;



  // // src/App.js
  // import React from 'react';
  // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
  // import { AuthProvider } from './context/AuthContext';
  // import Register from './components/Register';
  // import Login from './components/Login';

// function App() {
//     return (
//       <AuthProvider>
//         <Router>
//             <Routes>
//             <Route path="/register" element={<Register />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/forget-password" element={<ForgotPassword />} />
//             <Route path="/" element={<Navigate to="/login"/>}></Route>
//               <Route path="dashboard/questions/add" element={<QuestionForm/>}></Route>
//                 <Route path="dashboard/exam/create" element={<ExamForm />}></Route>
//                 <Route path="exam/:id" element={<ExamDetails />}></Route>
//               <Route path="/dashboard" element={  
//                     <Dashboard /> }>
//               </Route>
//               <Route path="/dashboard" element={<ExamCard />}></Route>
              
//        </Routes>
       
//       </Router> 
//      </AuthProvider>
//             );
//         }
        
//  export default App;

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget-password" element={<ForgotPassword />} />

          {/* Protected Route for Dashboard */}
          {/* <PrivateRoute path="/dashboard" element={<Dashboard />} />
          <PrivateRoute path="/dashboard/questions/add" element={<QuestionForm />} />
          <PrivateRoute path="/dashboard/exam/create" element={<ExamForm />} /> */}

          {/* <Route path="/dashboard" element={ 
           
           <PrivateRoute>
              <Dashboard />
           </PrivateRoute>
        }  
        /> */}

        <PrivateRoute>

        </PrivateRoute>

          {/* <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} /> */}

          {/* Other routes */}
          <Route path="exam/:id" element={<ExamDetails />} />
          <Route path="/exam/:id" element={<ExamDetails />} />
          
          {/* Default route */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
        

