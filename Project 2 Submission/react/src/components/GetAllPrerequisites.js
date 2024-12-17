import React, {useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import StudentTable from "./StudentsTable";

import StudentsContext from '../context/students';
import GetPrequisitesByClass from './Tables/GetPrerequisitesByClass';

import Loader from "./Loader/Loader";

import Popup from "./Popup/Popup";

const GetAllPrerequisites = () => {
    const navigate = useNavigate();
    const { fetchAllPrerequisitesForClass, preRequisitesByClassData, preRequisitesByClassDataAvailable, loader, isErrorMsg, showErrorMsg } = useContext(StudentsContext);

    const [deptCode, setDeptCode] = useState("");
    const [courseId, setCourseId] = useState("");
    const [isFormSubmit, setIsFormSubmit] = useState(false);


    const handleDeptCodeChange = (e) => {
        //console.log(e.target.value);
        setDeptCode(e.target.value);
    };

    const handleCourseIdChange = (e) => {
        //console.log(e.target.value);
        setCourseId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFormSubmit(true);
        //navigate('/');
        fetchAllPrerequisitesForClass(deptCode, courseId);
        console.log(deptCode);
        console.log(courseId);
        setDeptCode("");
        setCourseId("");
    };
    
    return (
        <div style={{height: "100vh", paddingTop: "20px", paddingLeft: "20px"}}>
            <div style={{ display: "flex", justifyContent: "space-between"}}>
                <div>
                    <Link to="/"><button style={{width: "120px"}}>Back</button></Link>
                </div>
            </div>  
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "60px"}}>
                {!isFormSubmit ? 
                <form onSubmit={handleSubmit} className="form-container">
                    <label className="form-label">Enter the Department Code</label>
                    <input className="form-input" value={deptCode} onChange={handleDeptCodeChange}/>

                    <label className="form-label">Enter the Course ID</label>
                    <input className="form-input" value={courseId} onChange={handleCourseIdChange}/>

                    <button>Submit</button>
                </form>
                : !preRequisitesByClassDataAvailable && !isErrorMsg && loader ? <Loader /> : isErrorMsg ? <Popup message={showErrorMsg} /> : preRequisitesByClassDataAvailable ? <GetPrequisitesByClass preRequisitesByClassData={preRequisitesByClassData}/> : ""}
            </div>
        </div>
    );
};

export default GetAllPrerequisites;

