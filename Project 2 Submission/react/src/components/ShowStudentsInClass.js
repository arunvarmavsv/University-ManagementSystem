import React, {useContext, useEffect, useState} from "react";
import StudentTable from "./StudentsTable";
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';

import StudentsContext from "../context/students";

const ShowStudentsInClass = () => {
    const { fetchStudentsDataInClass } = useContext(StudentsContext);
    const [classId, setClassId] = useState("");
    const navigate = useNavigate();
    
    const handleInputChange = (e) => {
        setClassId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Make API call here
        fetchStudentsDataInClass(classId);
        setClassId("");
        navigate("/show-students-in-class/show-students-by-classid");
    };
    
    return (
        <div style={{height: "100vh", paddingTop: "20px", paddingLeft: "20px"}}>
            <div style={{ display: "flex", justifyContent: "space-between"}}>
                <div>
                    <Link to="/"><button style={{width: "120px"}}>Back</button></Link>
                </div>
            </div>  
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "50px"}}>
                <form onSubmit={handleSubmit} className="form-container">
                    <label className="form-label">Enter the Class ID</label>
                    <input className="form-input" value={classId} onChange={handleInputChange}/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ShowStudentsInClass;

