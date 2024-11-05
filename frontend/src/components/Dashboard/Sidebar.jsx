import React from 'react'
// import {FaBuilding, FaTachometerAlt, FaUsers} from 'react-icons/fa'
import  {NavLink } from 'react-router-dom'
const Sidebar =()=> {
  return (

    <div className="bg-gray-800 text-white h-screen fixed left-0 top-0 bottom-0 space-y-2 w-64">
        <div className="bg-teal-600 h-12 flex items-center justify-center">
            <h3 className='text-2xl text-center font-pacific'>MCQ-APP</h3>
        </div>
        <div>
            <NavLink to="/dashboard"
                className={ ({isActive}) =>'{isActive? "bg-teal-500":" "} flex items-center space-x-4 block py-2.5 px-4 rounded'}>
                {/* <FaTachometerAlt /> */}
                <span>Dashboard</span>
            </NavLink>
            <NavLink to="exam/create"
               className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
                {/* <FaUsers /> */}
                <span>Exam</span>
            </NavLink>
            <NavLink to="questions/add"
               className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
                {/* <FaBuilding /> */}
                <span>Create Question</span>
            </NavLink>
            {/* <NavLink to="/admin-dashboard"
               className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
                <FaBuilding />
                <span>Leaves</span>
            </NavLink> */}

            <NavLink to="/dashboard/archive-exam-list"
              className='flex items-center space-x-4 block py-2.5 px-4 rounded'>
                {/* <FaBuilding /> */}
                <span>Archive Exam</span>
            </NavLink>


        </div>
    </div>
  )
}
export default  Sidebar