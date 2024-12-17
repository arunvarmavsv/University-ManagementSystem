import { createContext, useEffect, useState } from "react";
import axios from 'axios';


const StudentsContext = createContext();

const Provider = ({ children }) => {
    
    const [loader, setLoader] = useState(false);
    const [isErrorMsg, setIsErrorMsg] = useState(false);
    const [showErrorMsg, setShowErrorMsg] = useState('');

    // 1st Menu Option
    // tables directory states
    const [classesData, setClassesData] = useState([]);
    const [studentsData, setStudentsData] = useState([]);
    const [coursesData, setCoursesData] = useState([]);
    const [courseCreditsData, setCourseCreditsData] = useState([]);
    const [gradesData, setGradesData] = useState([]);
    const [gEnrollmentsData, setgEnrollmentsData] = useState([]);
    const [preRequisitesData, setPreRequisitesData] = useState([]);
    const [logsData, setLogsData] = useState([]);



    // 2nd Menu Option
    const [studentsByClassIdData, setstudentsByClassIdData] = useState([]);

    // 3rd Menu Option
    const [preRequisitesByClassData, setPreRequisitesByClassData] = useState([]);

    // 4th Menu Option
    const [enrollStudentData, setEnrollStudentData] = useState("");


    // 5th Menu Option
    const [dropStudentByClassId, setDropStudentByClassId] = useState("");

    // 6th Menu Option
    const [deleteStudentByIdData, setDeleteStudentByIdData] = useState("");


    // Data Available States
    const [classesDataAvailable, setClassesDataAvailable] = useState(false);
    const [studentsDataAvailable, setStudentsDataAvailable] = useState(false);
    const [coursesDataAvailable, setCoursesDataAvailable] = useState(false);
    const [courseCreditsDataAvailable, setCourseCreditsDataAvailable] = useState(false);
    const [gradesDataAvailable, setGradesDataAvailable] = useState(false);
    const [gEnrollmentsDataAvailable, setgEnrollmentsDataAvailable] = useState(false);
    const [preRequisitesDataAvailable, setPreRequisitesDataAvailable] = useState(false);
    const [logsDataAvailable, setLogsDataAvailable] = useState(false);

    const [studentsInClassByIDDataAvailable, setstudentsInClassByIDDataAvailable] = useState(false);
    
    const [preRequisitesByClassDataAvailable, setPreRequisitesByClassDataAvailable] = useState(false);

    const [enrollStudentDataAvailable, setEnrollStudentDataAvailable] = useState(false);

    const [dropStudentByClassIdDataAvailable, setDropStudentByClassIdDataAvailable] = useState(false);
    const [deleteStudentByIdDataAvailable, setDeleteStudentByIdDataAvailable] = useState(false);






  const fetchData = async (tableType, stateVariable) => {
    setLoader(false);
    setIsErrorMsg(false);
    setShowErrorMsg("");
    eval(`set${stateVariable}Data([])`);
    eval(`set${stateVariable}DataAvailable(false)`);
    try {
      setLoader(true);
      const response = await axios.get(`http://127.0.0.1:8000/${tableType}`);
      if (response.status === 200) {  
        const data = response.data;
        console.log(data);
        switch (tableType) {
          case 'classes':
            setClassesData(data);
            setClassesDataAvailable(true);
            break;  
          case 'get-students/':
            setStudentsData(data);
            setStudentsDataAvailable(true);
            break;
          case 'get-courses/':
            setCoursesData(data);
            setCoursesDataAvailable(true);
            break;
          // case 'courses':
          //   setCoursesData(data);
          //   setCoursesDataAvailable(true);
          //   break;
          case 'scoregrade':
            setGradesData(data);
            setGradesDataAvailable(true);
            break;  
          case 'coursecredits':
            setCourseCreditsData(data);
            setCourseCreditsDataAvailable(true);
            break;  
          case 'get-enrollments/':
            setgEnrollmentsData(data);
            setgEnrollmentsDataAvailable(true);
            break;  
          case 'pre_requisites':
            setPreRequisitesData(data);
            setPreRequisitesDataAvailable(true);
            break;
          case 'get-logs/':
            setLogsData(data);
            setLogsDataAvailable(true);
            break;
          // Add more cases for other table types
          default:
            console.log(`Invalid table type: ${tableType}`);
            break;
        }
      }
    } catch (error) {        
        console.log(error.message);
        setIsErrorMsg(true);
        setShowErrorMsg(error.message);
      }
  };
  


  const fetchStudentsDataInClass = async (course_id) => {
    setLoader(false);
    setIsErrorMsg(false);
    setShowErrorMsg("");
    setstudentsByClassIdData([]);
    setstudentsInClassByIDDataAvailable(false);
  
    try {
      setLoader(true);
      const response = await axios.get(`http://127.0.0.1:8000/get-students-for-courseID/?course_id=${course_id}`);
      
      if (response.status === 200) {
        setLoader(false);
        const data = response.data;
        setstudentsByClassIdData(data);
        // setDropStudentByClassIdDataAvailable(true);
      }
    } catch (error) {
        if (error.response) {
          const errorMsg = error.response.data.error;
          const startIndex = errorMsg.indexOf(':') + 2;
          const endIndex = errorMsg.indexOf('\n', startIndex);
          const extractedMsg = errorMsg.substring(startIndex, endIndex);
          console.log(extractedMsg); // "Invalid classid c1"
          setShowErrorMsg(extractedMsg);
          setIsErrorMsg(true);
      } else if (error.request) {
          setShowErrorMsg(error.message);
          setIsErrorMsg(true);
      } else {
        // Something happened in setting up the request that triggered an Error
          setIsErrorMsg(true);
          setShowErrorMsg(error.message);
        }
      }
  };


  // const enrollStudentInClass = async (bID, classid) => {
  //   setLoader(false);
  //   setIsErrorMsg(false);
  //   setShowErrorMsg("");
  //   setEnrollStudentData("");
  //   setEnrollStudentDataAvailable(false);
  //   try {
  //     setLoader(true);
  //     const response = await axios.post(`http://localhost:8080/enrollstudentinclass/${bID}/${classid}`);
  //     if (response.status === 200) {
  //       setLoader(false);
  //       const data = response.data;
  //       setEnrollStudentData(data);
  //       setEnrollStudentDataAvailable(true);
  //     }
  //   } catch (error) {
  //       if (error.response) {
  //         const errorMsg = error.response.data.error;
  //         const startIndex = errorMsg.indexOf(':') + 2;
  //         const endIndex = errorMsg.indexOf('\n', startIndex);
  //         const extractedMsg = errorMsg.substring(startIndex, endIndex);
  //         console.log(extractedMsg); // "Invalid classid c1"
  //         setShowErrorMsg(extractedMsg);
  //         setIsErrorMsg(true);
  //     } else if (error.request) {
  //         setShowErrorMsg(error.message);
  //         setIsErrorMsg(true);
  //     } else {
  //       // Something happened in setting up the request that triggered an Error
  //         setIsErrorMsg(true);
  //         setShowErrorMsg(error.message);
  //       }
  //     }
  // };


  
  const enrollStudentInClass = async (cid, sid) => {
    setLoader(false);
    setIsErrorMsg(false);
    setShowErrorMsg("");
    setEnrollStudentData("");
    setEnrollStudentDataAvailable(false);
  
    try {
      setLoader(true);
  
      const formData = new FormData();
      formData.append('course_id', cid);
      formData.append('student_id', sid);  // Make sure the field names match Django view
  
      const response = await axios.post(
        `http://127.0.0.1:8000/register-student-in-course/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Set the content type to FormData
          },
        }
      );
  
      if (response.status === 200) {
        setLoader(false);
        const data = response.data;

        setShowErrorMsg("Student was successfully enrolled!");
        setIsErrorMsg(true);

      }
    } catch (error) {
        if (error.response) {
          const errorMsg = error.response.data.error;
          const startIndex = errorMsg.indexOf(':') + 2;
          const endIndex = errorMsg.indexOf('\n', startIndex);
          const extractedMsg = errorMsg.substring(startIndex, endIndex);
          console.log(extractedMsg); // "Invalid classid c1"
          setShowErrorMsg(extractedMsg);
          setIsErrorMsg(true);
      } else if (error.request) {
          setShowErrorMsg(error.message);
          setIsErrorMsg(true);
      } else {
        // Something happened in setting up the request that triggered an Error
          setIsErrorMsg(true);
          setShowErrorMsg(error.message);
        }
      }
  };

  const updateStudent = async (id, name, type) => {
    setLoader(false);
    setIsErrorMsg(false);
    setShowErrorMsg("");
    setEnrollStudentData("");
    setEnrollStudentDataAvailable(false);
  
    try {
      setLoader(true);
  
      const formData = new FormData();
      formData.append('student_id', id);
      formData.append('name', name);
      formData.append('student_type', type);  // Make sure the field names match Django view
  
      const response = await axios.post(
        `http://127.0.0.1:8000/update-student/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Set the content type to FormData
          },
        }
      );
  
      if (response.status === 200) {
        setLoader(false);
        const data = response.data;

        setShowErrorMsg("Student was successfully updated!");
        setIsErrorMsg(true);

        // setShowErrorMsg("Successfully added!");
        // setEnrollStudentData(data);
        // setEnrollStudentDataAvailable(true);
      }
    } catch (error) {
        if (error.response) {
          const errorMsg = error.response.data.error;
          const startIndex = errorMsg.indexOf(':') + 2;
          const endIndex = errorMsg.indexOf('\n', startIndex);
          const extractedMsg = errorMsg.substring(startIndex, endIndex);
          console.log(extractedMsg); // "Invalid classid c1"
          setShowErrorMsg(extractedMsg);
          setIsErrorMsg(true);
      } else if (error.request) {
          setShowErrorMsg(error.message);
          setIsErrorMsg(true);
      } else {
        // Something happened in setting up the request that triggered an Error
          setIsErrorMsg(true);
          setShowErrorMsg(error.message);
        }
      }
  };


  const createStudent = async (name, type) => {
    setLoader(false);
    setIsErrorMsg(false);
    setShowErrorMsg("");
    setEnrollStudentData("");
    setEnrollStudentDataAvailable(false);
  
    try {
      setLoader(true);
  
      const formData = new FormData();
      formData.append('name', name);
      formData.append('student_type', type);  // Make sure the field names match Django view
  
      const response = await axios.post(
        `http://127.0.0.1:8000/create-student/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Set the content type to FormData
          },
        }
      );
  
      if (response.status === 200) {
        setLoader(false);
        const data = response.data;

        setShowErrorMsg("Student was successfully added!");
        setIsErrorMsg(true);

        // setShowErrorMsg("Successfully added!");
        // setEnrollStudentData(data);
        // setEnrollStudentDataAvailable(true);
      }
    } catch (error) {
        if (error.response) {
          const errorMsg = error.response.data.error;
          const startIndex = errorMsg.indexOf(':') + 2;
          const endIndex = errorMsg.indexOf('\n', startIndex);
          const extractedMsg = errorMsg.substring(startIndex, endIndex);
          console.log(extractedMsg); // "Invalid classid c1"
          setShowErrorMsg(extractedMsg);
          setIsErrorMsg(true);
      } else if (error.request) {
          setShowErrorMsg(error.message);
          setIsErrorMsg(true);
      } else {
        // Something happened in setting up the request that triggered an Error
          setIsErrorMsg(true);
          setShowErrorMsg(error.message);
        }
      }
  };


  

  const deleteStudent = async (id) => {
    setLoader(false);
    setIsErrorMsg(false);
    setShowErrorMsg("");
    setEnrollStudentData("");
    setEnrollStudentDataAvailable(false);
  
    try {
      setLoader(true);
  
      const formData = new FormData();
      formData.append('student_id', id);
      
      const response = await axios.post(
        `http://127.0.0.1:8000/delete-student/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Set the content type to FormData
          },
        }
      );
  
      if (response.status === 200) {
        setLoader(false);
        const data = response.data;

        setShowErrorMsg("Student was successfully deleted!");
        setIsErrorMsg(true);

        // setShowErrorMsg("Successfully added!");
        // setEnrollStudentData(data);
        // setEnrollStudentDataAvailable(true);
      }
    } catch (error) {
        if (error.response) {
          const errorMsg = error.response.data.error;
          const startIndex = errorMsg.indexOf(':') + 2;
          const endIndex = errorMsg.indexOf('\n', startIndex);
          const extractedMsg = errorMsg.substring(startIndex, endIndex);
          console.log(extractedMsg); // "Invalid classid c1"
          setShowErrorMsg(extractedMsg);
          setIsErrorMsg(true);
      } else if (error.request) {
          setShowErrorMsg(error.message);
          setIsErrorMsg(true);
      } else {
        // Something happened in setting up the request that triggered an Error
          setIsErrorMsg(true);
          setShowErrorMsg(error.message);
        }
      }
  };



  
  const createCourse = async (name) => {
    setLoader(false);
    setIsErrorMsg(false);
    setShowErrorMsg("");
    setEnrollStudentData("");
    setEnrollStudentDataAvailable(false);
  
    try {
      setLoader(true);
  
      const formData = new FormData();
      formData.append('course_name', name);
      // formData.append('student_type', type);  // Make sure the field names match Django view
  
      const response = await axios.post(
        `http://127.0.0.1:8000/create-course/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data', // Set the content type to FormData
          },
        }
      );
  
      if (response.status === 200) {
        setLoader(false);
        const data = response.data;

        setShowErrorMsg("Course was successfully created!");
        setIsErrorMsg(true);

        // setShowErrorMsg("Successfully added!");
        // setEnrollStudentData(data);
        // setEnrollStudentDataAvailable(true);
      }
    } catch (error) {
        if (error.response) {
          const errorMsg = error.response.data.error;
          const startIndex = errorMsg.indexOf(':') + 2;
          const endIndex = errorMsg.indexOf('\n', startIndex);
          const extractedMsg = errorMsg.substring(startIndex, endIndex);
          console.log(extractedMsg); // "Invalid classid c1"
          setShowErrorMsg(extractedMsg);
          setIsErrorMsg(true);
      } else if (error.request) {
          setShowErrorMsg(error.message);
          setIsErrorMsg(true);
      } else {
        // Something happened in setting up the request that triggered an Error
          setIsErrorMsg(true);
          setShowErrorMsg(error.message);
        }
      }
  };




  const fetchAllPrerequisitesForClass = async (dept_code, classid) => {
    setLoader(false);
    setIsErrorMsg(false);
    setShowErrorMsg("");
    setPreRequisitesByClassData([]);
    setPreRequisitesByClassDataAvailable(false);
    try {
      setLoader(true);
      const response = await axios.post(`http://localhost:8080/getprerequisiteforclass/${dept_code}/${classid}`);
      if (response.status === 200) {
        setLoader(false);
        const data = response.data;
        setPreRequisitesByClassData(data);
        setPreRequisitesByClassDataAvailable(true);
      }
    } catch (error) {
        if (error.response) {
          const errorMsg = error.response.data.error;
          const startIndex = errorMsg.indexOf(':') + 2;
          const endIndex = errorMsg.indexOf('\n', startIndex);
          const extractedMsg = errorMsg.substring(startIndex, endIndex);
          console.log(extractedMsg); // "Invalid classid c1"
          setShowErrorMsg(extractedMsg);
          setIsErrorMsg(true);
      } else if (error.request) {
          setShowErrorMsg(error.message);
          setIsErrorMsg(true);
      } else {
        // Something happened in setting up the request that triggered an Error
          setIsErrorMsg(true);
          setShowErrorMsg(error.message);
        }
      }
  };



  const fetchDropStudentByClassIdData = async (bID, classid) => {
    setLoader(false);
    setIsErrorMsg(false);
    setShowErrorMsg("");
    setDropStudentByClassId([]);
    setDropStudentByClassIdDataAvailable(false);
    try {
      setLoader(true);
      const response = await axios.post(`http://localhost:8080/dropstudentfromclass/${bID}/${classid}`);
      if (response.status === 200) {
        setLoader(false);
        const data = response.data;
        setDropStudentByClassId(data);
        setDropStudentByClassIdDataAvailable(true);
      }
    } catch (error) {
        if (error.response) {
          const errorMsg = error.response.data.error;
          const startIndex = errorMsg.indexOf(':') + 2;
          const endIndex = errorMsg.indexOf('\n', startIndex);
          const extractedMsg = errorMsg.substring(startIndex, endIndex);
          console.log(extractedMsg); // "Invalid classid c1"
          setShowErrorMsg(extractedMsg);
          setIsErrorMsg(true);
      } else if (error.request) {
          setShowErrorMsg(error.message);
          setIsErrorMsg(true);
      } else {
        // Something happened in setting up the request that triggered an Error
          setIsErrorMsg(true);
          setShowErrorMsg(error.message);
        }
      }
  };


  const fetchDeleteStudentByIdData = async (bID) => {
    setLoader(false);
    setIsErrorMsg(false);
    setShowErrorMsg("");
    setDeleteStudentByIdData("");
    setDeleteStudentByIdDataAvailable(false);
    try {
      setLoader(true);
      const response = await axios.post(`http://localhost:8080/deletestudents/${bID}`);
      if (response.status === 200) {
        setLoader(false);
        const data = response.data;
        setDeleteStudentByIdData(data);
        setDeleteStudentByIdDataAvailable(true);
      }
    } catch (error) {
        if (error.response) {
          const errorMsg = error.response.data.error;
          const startIndex = errorMsg.indexOf(':') + 2;
          const endIndex = errorMsg.indexOf('\n', startIndex);
          const extractedMsg = errorMsg.substring(startIndex, endIndex);
          console.log(extractedMsg); // "Invalid classid c1"
          setShowErrorMsg(extractedMsg);
          setIsErrorMsg(true);
      } else if (error.request) {
          setShowErrorMsg(error.message);
          setIsErrorMsg(true);
      } else {
        // Something happened in setting up the request that triggered an Error
          setIsErrorMsg(true);
          setShowErrorMsg(error.message);
        }
      }
  };





    // const fetchData = () => {
    //     setStudents(data);
    // };

    //console.log("Provider: ", students);

    // Tables Directory "api calls"
    // Students Table
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //           const response = await fetch('http://localhost:8080/students');
    //           const data = await response.json();
    //           console.log(data);
    //           setStudentsData(data);
    //         } catch (error) {
    //           console.error(error);
    //         }
    //       }

    //       fetchData();
    // }, []);


    

    // Students
    // useEffect(() => {
    //     const fetchData = async () => {
    //       try {
    //         const response = await fetch('http://localhost:8080/students');
    //         //console.log(response);
    //         if (response.ok) {
    //             // const data = await response.json(); 
    //             // //console.log("Response Data", data);        
    //             // setStudentsData(data);
    //             // setStudentsDataAvaialbe(true);   
    //             setIsDone(true);    
    //             const text = await response.text();
    //             console.log('Response Text:', text);
    //             const data = JSON.parse(text);
    //             console.log('Response Data:', data);  
    //             setStudentsData(data);
    //             setStudentsDataAvaialbe(true);      
    //         } else {
    //           const errorMessage = await response.text();
    //           console.error(errorMessage);
    //           alert(errorMessage);
    //           setStudentsDataAvaialbe(false);
    //         }
    //       } catch (error) {
    //         console.error(error);
    //         alert(error);
    //         setStudentsDataAvaialbe(false);
    //       }
    //     };

    //     if (isDone == 1) {
    //       fetchData();
    //       setIsDone(isDone + 1);
    //     }  
    //   }, []);

      
    // Classes Table
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //           const response = await fetch('http://localhost:8080/students');
    //           const data = await response.json();
    //           console.log(data);
    //           setStudentsData(data);
    //         } catch (error) {
    //           console.error(error);
    //         }
    //       }

    //       fetchData();
    // }, []);

    // Courses
    // useEffect(() => {
      
    //       const fetchData = async () => {
    //         try {
    //           const response = await fetch('http://localhost:8080/courses');
    //           if (response.ok) {
    //               const data = await response.json();         
    //               setCoursesData(data);
    //               setCoursesDataAvaialbe(true);              
    //           } else {
    //             const errorMessage = await response.text();
    //             console.error(errorMessage);
    //             alert(errorMessage);
    //             setCoursesDataAvaialbe(false);
    //           }
    //         } catch (error) {
    //           console.error(error);
    //           alert(error);
    //           setCoursesDataAvaialbe(false);
    //         }
    //       };

      
    //   if (isDone == 2) {
    //     fetchData();
    //     setIsDone(isDone + 1);
    //   }   
    //   }, [isDone]);

    // Course_credits
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('http://localhost:8080/coursecredits');
    //       if (response.ok) {
    //           const data = await response.json();         
    //           setCourseCreditsData(data);
    //           setCourseCreditsDataAvailable(true);              
    //       } else {
    //         const errorMessage = await response.text();
    //         console.error(errorMessage);
    //         alert(errorMessage);
    //         setCourseCreditsDataAvailable(false);              
    //       }
    //     } catch (error) {
    //       console.error(error);
    //       alert(error);
    //       setCourseCreditsDataAvailable(false);              
    //     }
    //   };
    //   if (isDone == 3) {
    //     fetchData();
    //     setIsDone(isDone + 1);
    //   }   
    // }, [isDone]);

    // Grades
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await fetch('http://localhost:8080/scoregrade');
    //       if (response.ok) {
    //           const data = await response.json();         
    //           setGradesData(data);
    //           setGradesDataAvailable(true);              
    //       } else {
    //         const errorMessage = await response.text();
    //         console.error(errorMessage);
    //         alert(errorMessage);
    //         setGradesDataAvailable(false);              
    //       }
    //     } catch (error) {
    //       console.error(error);
    //       alert(error);
    //       setGradesDataAvailable(false);              
    //     }
    //   };

    //   if (isDone == 4) {
    //     fetchData();
    //     setIsDone(isDone + 1);
    //   }   
    // }, [isDone]);
    

    
    const shareData = {
      loader,
      isErrorMsg,
      showErrorMsg,
      fetchData,
      fetchStudentsDataInClass,
      classesData,
      classesDataAvailable,
      studentsData,
      studentsDataAvailable,
      coursesData,
      coursesDataAvailable,
      courseCreditsData,
      courseCreditsDataAvailable,
      gradesData,
      gradesDataAvailable,
      gEnrollmentsData,
      gEnrollmentsDataAvailable,
      preRequisitesData,
      preRequisitesDataAvailable,
      logsData,
      logsDataAvailable,
      studentsByClassIdData,
      studentsInClassByIDDataAvailable,
      fetchAllPrerequisitesForClass,
      preRequisitesByClassData,
      preRequisitesByClassDataAvailable,
      enrollStudentInClass,
      enrollStudentData,
      enrollStudentDataAvailable,
      fetchDropStudentByClassIdData,
      dropStudentByClassId,
      dropStudentByClassIdDataAvailable,
      fetchDeleteStudentByIdData,
      deleteStudentByIdData,
      deleteStudentByIdDataAvailable,
      createStudent,
      createCourse,
      deleteStudent,
      updateStudent,
    };

    return (
        <StudentsContext.Provider value={shareData}>
            { children }
        </StudentsContext.Provider>
    );
};

export { Provider };

export default StudentsContext;