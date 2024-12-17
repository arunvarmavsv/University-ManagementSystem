import React, {useEffect, useState, useContext} from 'react';
import '../../style.css';

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import Loader from '../Loader/Loader';

import StudentsContext from '../../context/students';
import Popup from '../Popup/Popup';

const ShowStudentsByClassID = () => {
   const { studentsByClassIdData, studentsInClassByIDDataAvailable, loader, isErrorMsg, showErrorMsg } = useContext(StudentsContext);
   console.log(studentsByClassIdData);

   const tableData = (
   <>
        {!studentsInClassByIDDataAvailable && loader ? <Loader /> : ""}
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
                <th>B#</th>
                
                </tr>
            </thead>
            <tbody>
                
            {studentsByClassIdData.map((student, index) => (
                <tr key={index}>
                    <td>{student}</td>
                    
                </tr>
                ))} 
            </tbody>
            </table>
        </div>
    </>
);

  return (
    <div className="table-container" style={{overflowY: "scroll" }}>
        {isErrorMsg ? <Popup message={showErrorMsg}/> : tableData}
    </div>
  );
};

export default ShowStudentsByClassID;
