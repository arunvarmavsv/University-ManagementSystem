import React, {useState, useContext} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StudentsContext from "../context/students";

import Loader from "./Loader/Loader";
import Popup from "./Popup/Popup";

const EnrollStudent = () => {
    const { enrollStudentInClass, enrollStudentData, enrollStudentDataAvailable, loader, isErrorMsg, showErrorMsg } = useContext(StudentsContext);

    const [BId, setBId] = useState("");
    const [classId, setClassId] = useState("");
    const [isFormSubmit, setIsFormSubmit] = useState(false);


    const handleBIdChange = (e) => {
        //console.log(e.target.value);
        setBId(e.target.value);
    };

    const handleClassIdChange = (e) => {
        //console.log(e.target.value);
        setClassId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(BId);
        console.log(classId);
        setIsFormSubmit(true);

        // Calling API
        enrollStudentInClass(BId, classId);

        setBId("");
        setClassId("");
    };
    
    return (
        <div style={{height: "100vh", paddingTop: "20px", paddingLeft: "20px"}}>
            <div style={{ display: "flex", justifyContent: "space-between"}}>
                <div>
                    <Link to="/"><button style={{width: "120px"}}>Back</button></Link>
                </div>
            </div>  
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "80px"}}>
                {!isFormSubmit ? 
                <form onSubmit={handleSubmit} className="form-container">
                    <label className="form-label">Enter the Course ID</label>
                    <input className="form-input" value={BId} onChange={handleBIdChange}/>

                    <label className="form-label">Enter the Student ID</label>
                    <input className="form-input" value={classId} onChange={handleClassIdChange}/>

                    <button>Submit</button>
                </form>
                : !enrollStudentDataAvailable && !isErrorMsg && loader ? <Loader /> : <Popup message={isErrorMsg ? showErrorMsg : enrollStudentDataAvailable ? enrollStudentData : ""}/>}
            </div>
        </div>
    );
    
};

export default EnrollStudent;