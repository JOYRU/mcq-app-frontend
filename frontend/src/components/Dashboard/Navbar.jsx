import React from 'react'
// import { useAuth } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';


const Navbar = ()=> {
  //  const {user} = useAuth()
    const navigateTo = useNavigate();
    const handleLogout=()=>{      
      localStorage.removeItem('token');
      navigateTo('/login')
    }

  return (
    
    <div className='flex items-center  text-white justify-between h-12 bg-teal-500 px-5 '>
       <p>Welcome</p>
       <button onClick={handleLogout}  className='px-4 py-1 bg-teal-700 hover:bg-teal-900'>Logout</button>
    </div>
  //   <div className='flex items-center text-white justify-between h-12 bg-teal-500 px-5 fixed top-0 left-0 w-full z-10'>
  //   <p>Welcome</p>
  //   <button onClick={handleLogout} className='px-4 py-1 bg-teal-700 hover:bg-teal-900'>
  //     Logout
  //   </button>
  // </div>
  
  )
}

export default Navbar