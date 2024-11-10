// import React from 'react'

// const SubjectList = () => {
//   return (
//     <div>SubjectList</div>
//   )
// }

// export default SubjectList

import React from 'react';
import { Link } from 'react-router-dom';

const subjectsData = ['math', 'science', 'history'];

const SubjectList = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Subject List</h1>
      <div>
        {/* Display subjects as clickable links */}
        {subjectsData.map((subject, index) => (
          <div key={index} className="mb-4">
            {/* <Link 
              to={`/dashboard/subject-list/${subject}`}
              className="text-blue-500 hover:text-blue-700 text-lg font-medium"
            >
              {subject}
            </Link> */}
               {console.log(subject)}
               <Link 
              to={`/dashboard/subject-list/${subject}`}
              className="text-blue-500 hover:text-blue-700 text-lg font-medium"
            >
              {subject}
            </Link>

          </div>
        ))}
      </div>
    </div>
  );
};

export default SubjectList;

