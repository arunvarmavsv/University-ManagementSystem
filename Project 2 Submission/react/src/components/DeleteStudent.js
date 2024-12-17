import React, {useContext, useEffect, useState} from "react";
import StudentTable from "./StudentsTable";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StudentsContext from "../context/students";

import Loader from "./Loader/Loader";
import Popup from "./Popup/Popup";

const DeleteStudent = () => {
    const { deleteStudent,fetchDeleteStudentByIdData, deleteStudentByIdData, deleteStudentByIdDataAvailable, loader, showErrorMsg, isErrorMsg } = useContext(StudentsContext);
    
    const [BId, setBId] = useState("");
    const [isFormSubmit, setIsFormSubmit] = useState(false);

    const handleInputChange = (e) => {
        setBId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsFormSubmit(true);
        deleteStudent(BId);
        setBId("");
    };

    console.log(deleteStudentByIdData);

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
                    <label className="form-label">Enter the Student Id</label>
                    <input className="form-input" value={BId} onChange={handleInputChange}/>
                    <button>Submit</button>
                </form> : 
                !deleteStudentByIdDataAvailable && !isErrorMsg && loader ? <Loader /> : <Popup message={isErrorMsg ? showErrorMsg : deleteStudentByIdDataAvailable ? `Student with BId ${deleteStudentByIdData} has been deleted` : ""}/> }
            </div>
        </div>
    );
};

export default DeleteStudent;

