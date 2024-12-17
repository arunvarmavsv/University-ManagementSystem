import React, { useCallback, useContext, useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';


const initialFormData = {
  id: '',
  name: '',
  email: '',
  address: '',
  gender: '',
  dob: '',
  section: '',
  semester: '',
  year: '',
};

const GraduateForm = ({ createStudent, editMode, editFormData, setEditModeOff, editStudent }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState(editMode ? editFormData : initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editMode) {
      editStudent(editFormData.id, formData);
      setFormData(initialFormData);
      setEditModeOff();
      navigate('/show-all-students');
    } else {
      const id = Math.round(Math.random() * 9999);
      formData.id = id;

      // Updating students in the table once created on submitting the form
      createStudent(formData);
  
      setFormData(initialFormData);
      navigate('/show-all-students');
    }
    
  };

  return (
    <div>
      <div style={{display: "flex"}}>
        <div>
          <Link to="/"><button>Menu</button></Link>
        </div>
        <div style={{marginLeft: "auto"}}>
          <Link to="/show-all-students"><button>Show Table</button></Link>
        </div>
      </div>
    <form className="form-container" onSubmit={handleSubmit}>

      <div className="form-row">
        <label className="form-label">
          Name:
          <input className="form-input" type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label className="form-label">
          Email:
          <input className="form-input" type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
      </div>

      <div className="form-row">
        <label className="form-label">
          Address:
          <input className="form-input" type="text" name="address" value={formData.address} onChange={handleChange} />
        </label>
        <label className="form-label">
          Gender:
          <select className="form-input" name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">--Please choose an option--</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>

      <div className="form-row">
        <label className="form-label">
          Section:
          <input className="form-input" type="text" name="section" value={formData.section} onChange={handleChange} />
        </label>
        <label className="form-label">
          Semester:
          <input className="form-input" type="text" name="semester" value={formData.semester} onChange={handleChange} />
        </label>
        
      </div>

      <div className="form-row">
        <label className="form-label">
            Year:
            <input className="form-input" type="number" name="year" value={formData.year} onChange={handleChange} />
        </label>
        <label className="form-label">
          Date of Birth:
          <input className="form-input" type="date" name="dob" value={formData.dob} onChange={handleChange} />
        </label>
      </div>
      {editMode ? 
      <button className="form-button" type="submit">Save</button>:
      <button className="form-button" type="submit">Enroll Student</button>
      }
    </form>
    </div>
  );
};

export default GraduateForm;
