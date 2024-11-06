// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';
import Navbar from '../Dashboard/Navbar';
const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Content Area */}
      <div className="flex-1 ml-64 bg-gray-100">
        <Navbar />
        {/* This will render the current route content */}
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
