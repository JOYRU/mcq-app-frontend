import React from 'react';
import { Link } from 'react-router-dom';

const subjectsData = ['bangla1st','bangla2nd','physics', 'math', 'chemistry', 'biology'];

const SubjectList = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Subject List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Display subjects as clickable cards */}
        {subjectsData.map((subject, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105"
          >
            <Link
              to={`/dashboard/subject-list/${subject}`}
              className="text-blue-500 hover:text-blue-700 text-lg font-medium"
            >
              <div className="text-xl font-semibold mb-4">{subject}</div>
              {/* Optionally add an icon or illustration here */}
              <div className="text-gray-500 text-sm">Click to explore</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;

