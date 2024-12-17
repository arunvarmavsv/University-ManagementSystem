import React, {useEffect, useState, useContext} from 'react';
import '../../style.css';

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';
import Popup from '../Popup/Popup';

import StudentsContext from '../../context/students';

const GraduateEnrollments = () => {
   const { gEnrollmentsData, gEnrollmentsDataAvailable, loader, showErrorMsg, isErrorMsg} = useContext(StudentsContext);
   
  const GraduateEnrollmentsTable = (
    <>
    {!gEnrollmentsDataAvailable && loader ? <Loader /> : ""}
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
              <td><h3>Course IDs</h3></td>
              <td><h3>Student IDs</h3></td>
            </tr>
          </thead>
          <tbody>
          {Object.entries(gEnrollmentsData).map(([key, values], index) => (
          <tr key={index}>
            <td>{key}</td>
            <td>
              <ul>
                {values.map((value, subIndex) => (
                  <li key={subIndex}>{value}</li>
                ))}
              </ul>
            </td>
          </tr>
        ))}
          {/* {JSON.stringify(gEnrollmentsData)} */}
          {/* {gEnrollmentsData[0].map((student, index) => (
              <tr key={index}>
                <td>{student}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </>
  );
  return (
    <div className="table-container" style={{overflowY: "scroll" }}>
      {isErrorMsg ? <Popup message={showErrorMsg}/> : GraduateEnrollmentsTable}
      
    </div>
  );
};

export default GraduateEnrollments;

