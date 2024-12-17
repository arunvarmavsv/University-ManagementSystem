import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './style.css';

// Menu Options
import Menu from './components/Menu';
import Tables from "./components/Tables";
import EnrollGraduateStudent from './components/EnrollGraduateStudent';
import EnrollUndergraduateStudent from './components/EnrollUndergraduateStudent';
import StudentsPage from "./components/StudentsPage";
import EnrollStudent from "./components/EnrollStudent";
import CreateStudent from "./components/CreateStudent";
import CreateCourse from "./components/CreateCourse";
import ShowStudentsInClass from "./components/ShowStudentsInClass";
import GetAllPrerequisites from "./components/GetAllPrerequisites";
import DropGraduateStudent from "./components/DropGraduateStudent";
import DeleteStudent from "./components/DeleteStudent";
import UpdateStudent from "./components/UpdateStudent";
// Tables
import Students from "./components/Tables/Students";
import Courses from "./components/Tables/Courses";
import Classes from "./components/Tables/Classes";
import Grades from "./components/Tables/Grades";
import Logs from "./components/Tables/Logs";
import GraduateEnrollments from "./components/Tables/GraduateEnrollments";
import Credits from "./components/Tables/Credits";
import Prereqs from "./components/Tables/Prerequisites";

import ShowStudentsByClassID from "./components/Tables/ShowStudentsByClassID";


import data from './data/data.json';

const App = () => {
    const [students, setStudents] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editFormData, setEditFormData] = useState({});


    useEffect(() => {
        setStudents(data.students);
    }, []);
    
    console.log(students);

    const createStudent = (student) => {
        const updatedStudents = [
            ...students,
            student
        ];

        setStudents(updatedStudents);
    };

    const deleteStudent = (id) => {
        console.log(id);
        const updatedStudents = students.filter((student) => {
            return student.id !== id;
        });

        setStudents(updatedStudents);
    };

    const editForm = (student) => {
        setEditFormData(student);
        setEditMode(true);
    }
    console.log("Edit Form Data on App page: ", editFormData);

    const editStudent = (id, editStudentData) => {
        const updatedStudent = students.map((student) => {
            if (student.id === id) {
                console.log("EditStudentData: ", editStudentData);
                const newStudentData = {...student, ...editStudentData};
                console.log("New Edited Data: ", newStudentData);
                return newStudentData;
            }
            return student;
        });

        setStudents(updatedStudent);
    };

    const setEditModeOff = () => {
        setEditMode(false);
    }

    // Calling 1."Tables" APIs



    // Calling 2. "Display Students in a Class" APIs
    // Calling 3. "Checking for Pre-requisites" APIs
    // Calling 4. "Drop Graduate Student from the Class" APIs

    return (
        <div className="newcss">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Menu />} />
                <Route path="/tables" element={<Tables students={students}/>} />
                <Route path="/show-students-in-class" element={<ShowStudentsInClass />}/>
                <Route path="/get-all-pre-reqs" element={<GetAllPrerequisites />}/>
                <Route path="/enroll-student" element={<EnrollStudent />} />
                <Route path="/create-student" element={<CreateStudent />} />
                <Route path="/update-student" element={<UpdateStudent />} />
                <Route path="/create-course" element={<CreateCourse />} />
                <Route path="/drop-graduate-student" element={<DropGraduateStudent />} />
                <Route path="/delete-student" element={<DeleteStudent />} />

                <Route path="/show-students-in-class/show-students-by-classid" element={<ShowStudentsByClassID />} />


                <Route path="/enroll-graduate-student" element={<EnrollGraduateStudent editStudent={editStudent} setEditModeOff={setEditModeOff} editMode={editMode} editFormData={editFormData}  createStudent={createStudent}/>} />
                <Route path="/enroll-undergraduate-student" element={<EnrollUndergraduateStudent />} />
                <Route path="/show-all-students" element={<StudentsPage editForm={editForm} students={students} deleteStudent={deleteStudent}/>} /> 

                <Route path="/students-table" element={<Students />} />
                <Route path="/courses-table" element={<Courses />} />
                <Route path="/classes-table" element={<Classes />} />
                <Route path="/grades-table" element={<Grades />} />
                <Route path="/logs-table" element={<Logs />} />
                <Route path="/graduate-enrollment-table" element={<GraduateEnrollments />} />
                <Route path="/credits-table" element={<Credits />} />
                <Route path="/pre-req-table" element={<Prereqs />} />
                

            </Routes>
        </BrowserRouter>
        </div>
    );
  };

export default App;


