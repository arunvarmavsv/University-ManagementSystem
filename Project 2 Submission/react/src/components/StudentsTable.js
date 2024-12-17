import React, {useEffect, useState, useContext} from 'react';
import '../style.css';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';



const StudentsTable = ({ students, deleteStudent, editForm }) => {
  
  
  console.log("Students Table", students);

  
  return (
    <div className="table-container" style={{overflowY: "scroll" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: "40px"}}>
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
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Gender</th>
              <th>DOB</th>
              <th>Section</th>
              <th>Semester</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.address}</td>
                <td>{student.gender}</td>
                <td>{student.dob}</td>
                <td>{student.section}</td>
                <td>{student.semester}</td>
                <td>{student.year}</td>
                <td>
                  <Link to="/enroll-graduate-student"><button onClick={() => {
                      editForm(student);
                  }} className='edit-button'>
                    <FontAwesomeIcon icon={faEdit} />
                  </button></Link>
                </td>
                <td>
                  <button onClick={() => {
                    deleteStudent(student.id);
                  }} className='delete-button'>
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentsTable;
