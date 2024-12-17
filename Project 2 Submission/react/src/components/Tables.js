import React, {useContext, useEffect} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StudentsContext from "../context/students";

const Tables = () => {  
    const {fetchData} = useContext(StudentsContext);

    //console.log("Students Data in the Tables Menu:", studentsData);

    // Students API call
    const handleStudentsClick = () => {
        fetchData('get-students/', 'Students');
    };

    // Courses API call
    const handleCoursesClick = () => {
        fetchData('get-courses/', 'Courses');
    };

    // Classes API call
    const handleClassesClick = () => {
        fetchData('classes', 'Classes');
    };

    // Grades API call
    const handleGradesClick = () => {
        fetchData('scoregrade', 'Grades');
    };

    // Logs API call
    const handleLogsClick = () => {
        fetchData('get-logs/', 'Logs');
    };

    // Credits API call
    const handleCreditsClick = () => {
        fetchData('coursecredits', 'CourseCredits');
    };

    // Prereqs API call
    const handlePrerequisitesClick = () => {
        fetchData('pre_requisites', 'PreRequisites');
    };

    // Graduate Enrollments call
    const handleGenrollmentsClick = () => {
        fetchData('get-enrollments/', 'gEnrollments');
    };

    return (
        <div className="menu-container" style={{height: "100vh", paddingTop: "20px", paddingLeft: "20px"}}>
            <div style={{ display: "flex", justifyContent: "space-between"}}>
                <div>
                    <Link to="/"><button style={{width: "120px"}}>Back</button></Link>
                </div>
            </div>  
            <h1 style={{textAlign: "center", zIndex: "1"}}>Display Tables</h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: "40px"}}>
               <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Link to="/students-table"><button onClick={handleStudentsClick} style={{marginLeft: "10px"}}>Students Table</button></Link>
                    <Link to="/courses-table"><button onClick={handleCoursesClick} style={{marginLeft: "10px"}}>Courses Table</button></Link>
                    <Link to="/logs-table"><button onClick={handleLogsClick} style={{marginLeft: "10px"}}>Logs Table</button></Link>
                  <Link to="/graduate-enrollment-table"><button onClick={handleGenrollmentsClick} style={{marginLeft: "10px"}}>Enrollments Table</button></Link>
                </div>
               
               
               
               
               
                {/* <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Link to="/students-table"><button onClick={handleStudentsClick} style={{marginLeft: "10px"}}>Students Table</button></Link>
                    <Link to="/courses-table"><button onClick={handleCoursesClick} style={{marginLeft: "10px"}}>Courses Table</button></Link>
                    <Link to="/classes-table"><button onClick={handleClassesClick} style={{marginLeft: "10px"}}>Classes Table</button></Link>
                    <Link to="/grades-table"><button onClick={handleGradesClick} style={{marginLeft: "10px"}}>Grades Table</button></Link> 
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Link to="/logs-table"><button onClick={handleLogsClick} style={{marginLeft: "10px"}}>Logs Table</button></Link>
                    <Link to="/credits-table"><button onClick={handleCreditsClick} style={{marginLeft: "10px"}}>Course Credits Table</button></Link>
                    <Link to="/pre-req-table"><button onClick={handlePrerequisitesClick} style={{marginLeft: "10px"}}>Pre Requisites Table</button></Link>
                    <Link to="/graduate-enrollment-table"><button onClick={handleGenrollmentsClick} style={{marginLeft: "10px"}}>Enrollments Table</button></Link>
                </div> */}
            </div>
        </div>
    );
};

export default Tables;