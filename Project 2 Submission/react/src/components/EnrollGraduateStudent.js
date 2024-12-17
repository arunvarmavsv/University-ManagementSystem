import React from "react";
import GraduateForm from "./Forms/GraduateForm";

const EnrollGraduateStudent = ({ createStudent, editMode, editFormData, setEditModeOff, editStudent }) => {
 
    return (
        <div className="form-background">
            <GraduateForm editStudent={editStudent} editMode={editMode} editFormData={editFormData} setEditModeOff={setEditModeOff} createStudent={createStudent}/>
        </div>
    );
};

export default EnrollGraduateStudent;




