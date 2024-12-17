import React, {useEffect, useState, useContext} from 'react';
import '../../style.css';
import Loader from '../Loader/Loader';
import Popup from '../Popup/Popup';

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import StudentsContext from '../../context/students';

const Courses = () => {
   const { coursesData, coursesDataAvailable, loader, showErrorMsg, isErrorMsg } = useContext(StudentsContext);

   const CoursesTable = (
    <>
      {!coursesDataAvailable && loader ? <Loader /> : ""}
        <div style={{ display: "flex", justifyContent: "space-between"}}>
            <div>
              <Link to="/"><button>Menu</button></Link>
            </div>
            <div style={{marginLeft: "100px"}}>
              <Link to="/enroll-student"><button>Enroll Student</button></Link>
            </div>
        </div>  
        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>Course ID</th>
                <th>Course Name</th>
             
              </tr>
            </thead>
            <tbody>
            {coursesData.map((student, index) => (
                <tr key={index}>
                  <td>{student.course_id}</td>
                  <td>{student.course_name}</td>
             
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </>
   );
   console.log("Courses Data: ", coursesData);

  return (
    <div className="table-container" style={{overflowY: "scroll" }}>
      {isErrorMsg ? <Popup message={showErrorMsg}/> : CoursesTable}
    </div>
  );
};

export default Courses;

