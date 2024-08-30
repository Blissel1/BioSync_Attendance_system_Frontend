// React modules
import { createContext, useState } from "react";

// Context

// Components

// Assets

export const AuthContext = createContext({
  userIsLogin: Boolean,
  setUserIsLogin: () => {},
  uuserIsAdmin: Boolean,
  setUserIsAdmin: () => {},
});

const AuthContextProvider = ({ children }) => {
  // States
  const [userIsLogin, setUserIsLogin] = useState(false);
  const [userIsAdmin, setUserIsAdmin] = useState(true);

  // Return context
  const context = {
    userIsLogin,
    setUserIsLogin,
    userIsAdmin,
    setUserIsAdmin,
  };
  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
