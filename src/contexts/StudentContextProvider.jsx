// ... React modules
import { createContext, useState } from "react";

// ... Context

// ... Components

// ... Assets
import { studentYear } from "../_data/student_db";
import { studentProgram } from "../_data/student_db";
import { courseData } from "../_data/student_db";
import { courseProgramData } from "../_data/student_db";

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
export const StudentContext = createContext({
  StudentRegistrationHandler: () => {},
  StudentLoginHandler: () => {},

  fullName: "",
  setFullName: () => {},
  indexNumber: "",
  setIndexNumber: () => {},
  email: "",
  setEmail: () => {},
  year: "",
  setYear: () => {},
  program: "",
  setProgram: () => {},
  password: "",
  setPassword: () => {},
  confirmPassword: "",
  setConfirmPassword: () => {},

  studentYear: [],
  studentProgram: [],
  courseData: {},
  courseProgramData: {},
});

const StudentContextProvider = ({ children }) => {
  const [fullName, setFullName] = useState("");
  const [indexNumber, setIndexNumber] = useState("");
  const [email, setEmail] = useState("");
  const [year, setYear] = useState("");
  const [program, setProgram] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const StudentRegistrationHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const enteredData = {
        fullName,
        indexNumber,
        email,
        year,
        program,
        password,
        confirmPassword,
      };
      console.log(enteredData);
    } else {
      console.log("Password does not mutch");
    }
  };

  //   Login handler
  const StudentLoginHandler = (e) => {
    e.preventDefault();
    const enteredData = {
      indexNumber,
      email,
      password,
    };
    console.log(enteredData);
  };

  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
    StudentRegistrationHandler,
    StudentLoginHandler,

    fullName,
    setFullName,
    indexNumber,
    setIndexNumber,
    email,
    setEmail,
    year,
    setYear,
    program,
    setProgram,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,

    studentYear,
    studentProgram,
    courseData,
    courseProgramData,
  };

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <StudentContext.Provider value={context}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
