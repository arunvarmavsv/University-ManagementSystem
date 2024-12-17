import React, { useContext, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import StudentsContext from "../context/students";

const Menu = () => {
  return (
    <div className="menu-container">
      <h1>Student and Course Registration System</h1>
      <h2>Object Oriented Programming and Design Patterns</h2>
      <div className="menu-options">
        <Link to="/create-student">
          <button className="menu-button">Create Student</button>
        </Link>
        <Link to="/tables">
          <button className="menu-button">Display tables</button>
        </Link>

        <Link to="/update-student">
          <button className="menu-button">Update Student</button>
        </Link>
        <Link to="/create-course">
          <button className="menu-button">Create Course</button>
        </Link>
        <Link to="/enroll-student">
          <button className="menu-button">Enroll Student</button>
        </Link>

        
        <Link to="/show-students-in-class">
          <button className="menu-button">Show Students in a Class</button>
        </Link>
        {/* <Link to="/get-all-pre-reqs"><button className="menu-button">Get All Pre-Requisites</button></Link> */}
        {/* <Link to="/drop-graduate-student"><button className="menu-button">Drop Graduate Student</button></Link> */}
        <Link to="/delete-student">
          <button className="menu-button">Delete Student</button>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
