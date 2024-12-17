import React, {useState, useContext} from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import StudentsContext from "../context/students";

import Loader from "./Loader/Loader";
import Popup from "./Popup/Popup";

const UpdateStudent = () => {
    const { enrollStudentInClass, enrollStudentData, enrollStudentDataAvailable, loader, isErrorMsg, showErrorMsg,createStudent,updateStudent } = useContext(StudentsContext);
    const [id, setID] = useState("");
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [isFormSubmit, setIsFormSubmit] = useState(false);


    
    const handleIdChange = (e) => {
        //console.log(e.target.value);
        setID(e.target.value);
    };
    const handleNameChange = (e) => {
        //console.log(e.target.value);
        setName(e.target.value);
    };

    const handleTypeChange = (e) => {
        //console.log(e.target.value);
        setType(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(type);
        setIsFormSubmit(true);

        // Calling API
        updateStudent(id,name, type);
        setID("");
        setName("");
        setType("");
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
                    <label className="form-label">Enter the Student ID</label>
                    <input className="form-input" value={id} onChange={handleIdChange}/>


                    <label className="form-label">Enter the Student Name</label>
                    <input className="form-input" value={name} onChange={handleNameChange}/>

                    <label className="form-label">Enter the Student Type</label>
                    <input className="form-input" value={type} onChange={handleTypeChange}/>

                    <button>Submit</button>
                </form>
                : !enrollStudentDataAvailable && !isErrorMsg && loader ? <Loader /> : <Popup message={isErrorMsg ? showErrorMsg : enrollStudentDataAvailable ? enrollStudentData : ""}/>}
            </div>
        </div>
    );
    
};

export default UpdateStudent;