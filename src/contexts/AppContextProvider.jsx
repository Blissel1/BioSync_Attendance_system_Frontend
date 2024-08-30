// ... React modules

// ... Contexts
import AdminContextProvider from "./AdminContextProvider";
import AuthContextProvider from "./AuthContextProvider";
import NavigationContextProvider from "./NavigationContextProvider";
import StudentContextProvider from "./StudentContextProvider";

// ... Components

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const AppContextProvider = ({ children }) => {
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <>
      <NavigationContextProvider>
        <AdminContextProvider>
          <StudentContextProvider>
            <AuthContextProvider>{children}</AuthContextProvider>
          </StudentContextProvider>
        </AdminContextProvider>
      </NavigationContextProvider>
    </>
  );
};

export default AppContextProvider;
