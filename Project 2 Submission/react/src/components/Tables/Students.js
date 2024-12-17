import React, {useEffect, useState, useContext} from 'react';
import '../../style.css';

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Loader from '../Loader/Loader';
import Popup from '../Popup/Popup';

import StudentsContext from '../../context/students';

const Students = () => {
   const { studentsData, studentsDataAvailable, loader, showErrorMsg, isErrorMsg } = useContext(StudentsContext);

   const StudentsTable = (
    <>
    {!studentsDataAvailable && loader ? <Loader /> : ""}
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
              <th>student_id</th>
              <th>name</th>
              <th>student_type</th>
            </tr>
          </thead>
          <tbody>
          {studentsData.map((student, index) => (
              <tr key={index}>
                <td>{student.student_id}</td>
                <td>{student.name}</td>
                <td>{student.student_type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
   );

  return (
    <div className="table-container" style={{overflowY: "scroll" }}>
      {isErrorMsg ? <Popup message={showErrorMsg}/> : StudentsTable}
    </div>
  );
};

export default Students;

