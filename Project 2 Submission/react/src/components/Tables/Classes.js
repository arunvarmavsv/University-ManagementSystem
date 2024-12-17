import React, {useEffect, useState, useContext} from 'react';
import '../../style.css';
import Loader from '../Loader/Loader';
import Popup from '../Popup/Popup';

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import StudentsContext from '../../context/students';

const Classes = () => {
   const { classesData, loader, classesDataAvailable, showErrorMsg, isErrorMsg } = useContext(StudentsContext);
   console.log(classesData);

   const ClassesTable = (
    <>
      {!classesDataAvailable && loader ? <Loader /> : ""}
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
              <th>Class ID</th>
              <th>Dept Code</th>
              <th>Course#</th>
              <th>Sec#</th>
              <th>Year</th>
              <th>Semester</th>
              <th>Limit</th>
              <th>Class Size</th>
              <th>Room</th>
            </tr>
          </thead>
          <tbody>
          {classesData.map((student, index) => (
              <tr key={index}>
                <td>{student.classId}</td>
                <td>{student.departmentCode}</td>
                <td>{student.courseNumber}</td>
                <td>{student.sectionNumber}</td>
                <td>{student.year}</td>
                <td>{student.semester}</td>
                <td>{student.limit}</td>
                <td>{student.class_size}</td>
                <td>{student.room}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
   );

  return (
    <div className="table-container">
      {isErrorMsg ? <Popup message={showErrorMsg}/> : ClassesTable}
    </div>
  );
};

export default Classes;

