import React from 'react'
//import { useAuth } from '../context/AuthContext'
import { Outlet, useNavigate } from 'react-router-dom';
//import AdminSidebar from '../components/dashboard/AdminSidebar';
//import Navbar from '../components/dashboard/Navbar';
//import AdminSummary from '../components/dashboard/AdminSummary';
import Sidebar from '../Dashboard/Sidebar';
import Navbar from '../Dashboard/Navbar';
import ExamCard from '../Dashboard/ExamCard';
const  Dashboard=()=> {
  const navigate = useNavigate()
  //const {user} = useAuth() ;
  
  return (
    // <div className='flex'>
    //   {/* <AdminSidebar /> */}
    //   <Sidebar />
    //   <div className='flex-1 ml-64 bg-gray-100 h-screen'>
    //    <Navbar /> 
    //    {/* <div>
    //     <ExamCard />
    //   </div>   */}
    //     <Outlet />
    //   </div>
     
    // </div>

    <div className='flex'>
    <Sidebar />
    <div className='flex-1 ml-64 bg-gray-100 h-screen'>
     <Navbar /> 
     {/* <div>
      <AdminSummary />
      </div>   */}
      <Outlet />
    </div>
   
  </div>
)
  
}

export default Dashboard
