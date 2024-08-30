// ... React modules
import { createContext, useState } from "react";

// ... Context

// ... Components

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
export const AdminContext = createContext({
  AdminRegistrationHandler: () => {},
  AdminLoginHandler: () => {},

  fullName: "",
  setFullName: () => {},
  email: "",
  setEmail: () => {},
  password: "",
  setPassword: () => {},
  confirmPassword: "",
  setConfirmPassword: () => {},
});

const AdminContextProvider = ({ children }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const AdminRegistrationHandler = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      const enteredData = {
        fullName,
        email,
        password,
        confirmPassword,
      };
      console.log(enteredData);
    } else {
      console.log("Password does not mutch");
    }
  };

  //   Login handler
  const AdminLoginHandler = (e) => {
    e.preventDefault();
    const enteredData = {
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
    AdminRegistrationHandler,
    AdminLoginHandler,

    fullName,
    setFullName,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  };

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <AdminContext.Provider value={context}>{children}</AdminContext.Provider>
  );
};

export default AdminContextProvider;
