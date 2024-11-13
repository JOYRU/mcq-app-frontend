import React from 'react'
// import {FaBuilding, FaTachometerAlt, FaUsers} from 'react-icons/fa'
import  {NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'
const Sidebar =()=> {

  const { user } = useAuth() ; 
  // console.log(user.role)
  return (

    // <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
    //     <div className="bg-teal-600 h-12 flex items-center justify-center">
    //         <h3 className='text-2xl text-center font-pacific'>MCQ-APP</h3>
    //     </div>
    //     <div>
    //         <NavLink to="/dashboard"
    //             className={ ({isActive}) =>'{isActive? "bg-teal-500":" "} flex items-center space-x-4 block py-2.5 px-4 rounded'}>
    //             {/* <FaTachometerAlt /> */}
    //             <span>Dashboard</span>
    //         </NavLink>
    //         <NavLink to="/dashboard/exam/create"
    //            className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
    //             {/* <FaUsers /> */}
    //             <span>Create New Exam</span>
    //         </NavLink>
    //         <NavLink to="/dashboard/questions/add"
    //            className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
    //             {/* <FaBuilding /> */}
    //             <span>Create Question</span>
    //         </NavLink>
    //         {/* <NavLink to="/admin-dashboard"
    //            className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
    //             <FaBuilding />
    //             <span>Leaves</span>
    //         </NavLink> */}

    //         <NavLink to="/dashboard/archive-exam-list"
    //           className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
    //             {/* <FaBuilding /> */}
    //             <span>Archive Exam</span>
    //         </NavLink>
    //         <NavLink to="/dashboard/subject-list"
    //           className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
    //             {/* <FaBuilding /> */}
    //             <span>Subject Wise Question</span>
    //         </NavLink>

    //         {/* <NavLink to="/dashboard/generate-question"
    //           className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
    //             {/* <FaBuilding /> 
    //             <span>Generate Question Randomly</span>
    //         </NavLink> */}


    //     </div>
    // </div>
<div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
      <div className="bg-teal-600 h-12 flex items-center justify-center">
        <h3 className="text-2xl text-center font-pacific">MCQ-APP</h3>
      </div>

      <div>
        {/* Dashboard link visible to all roles */}
        <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'bg-teal-500' : '') + ' flex items-center space-x-4 block py-2.5 px-4 rounded'}>
          <span>Dashboard</span>
        </NavLink>

        {/* Links visible only to 'teacher' */}
        {user.role === 'teacher' && (
          <>
            <NavLink to="/dashboard/exam/create" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
              <span>Create New Exam</span>
            </NavLink>
            <NavLink to="/dashboard/questions/add" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
              <span>Create Question</span>
            </NavLink>
            <NavLink to="/dashboard/archive-exam-list" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
              <span>Archive Exam</span>
            </NavLink>
            <NavLink to="/dashboard/subject-list" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
              <span>Subject Wise Question</span>
            </NavLink>
          </>
        )}

        {/* Links visible only to 'student' */}
        {user.role === 'student' && (
          <>
            <NavLink to="/dashboard/archive-exam-list" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
              <span>Archive Exam</span>
            </NavLink>
            <NavLink to="/dashboard/subject-list" className="flex items-center space-x-4 block py-2.5 px-4 rounded">
              <span>Subject Wise Question</span>
            </NavLink>
          </>
        )}

      </div>
    </div>



  )
}
export default  Sidebar