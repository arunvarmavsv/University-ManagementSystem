import React, {useEffect, useState, useContext} from 'react';
import '../../style.css';

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Loader from '../Loader/Loader';
import Popup from '../Popup/Popup';
import StudentsContext from '../../context/students';

const Prerequisites = () => {
   const { preRequisitesData, preRequisitesDataAvailable, loader, showErrorMsg, isErrorMsg } = useContext(StudentsContext);
   //console.log(classesData);

   const PrereqsTable = (
    <>
    {!preRequisitesDataAvailable && loader ? <Loader /> : ""}
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
              <th>Dept Code</th>
              <th>Course#</th>
              <th>Pre_Dept Code</th>
              <th>Pre_Course#</th>
            </tr>
          </thead>
          <tbody>
          {preRequisitesData.map((student, index) => (
              <tr key={index}>
                <td>{student.deptCode}</td>
                <td>{student.courseNumber}</td>
                <td>{student.preDeptCode}</td>
                <td>{student.preCourseNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
   );

  return (
    <div className="table-container" style={{overflowY: "scroll" }}>
      {isErrorMsg ? <Popup message={showErrorMsg}/> : PrereqsTable}
    </div>
  );
};

export default Prerequisites;
