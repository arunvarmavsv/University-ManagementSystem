import React, {useEffect, useState, useContext} from 'react';
import '../../style.css';

import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const GetPrequisitesByClass = ({ preRequisitesByClassData }) => {
 
  return (
    <div className='table-container'>
      <table className="table">
        <thead>
          <tr>
            <th>Dept Code</th>
            <th>Course#</th>
          </tr>
        </thead>
        <tbody>
        {preRequisitesByClassData.map((student, index) => (
            <tr key={index}>
              <td>{student.deptCode}</td>
              <td>{student.courseNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GetPrequisitesByClass;
