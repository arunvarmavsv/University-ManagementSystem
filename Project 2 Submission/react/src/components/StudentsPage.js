import React, {useContext, useEffect} from "react";
import StudentTable from "./StudentsTable";

import StudentsContext from '../context/students';

const StudentsPage = ({ students, deleteStudent, editForm }) => {
    
    return (
        <div>
            <StudentTable students={students} deleteStudent={deleteStudent} editForm={editForm}/>
        </div>
    );
};

export default StudentsPage;

