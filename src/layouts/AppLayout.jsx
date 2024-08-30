// ... React modules

// ... Context
import { useContext } from "react";
import { NavigationContext } from "../contexts/NavigationContextProvider";

// ... Components
// import Footer from "./Footer";
import Navigation from "./Navigation";
import TopNavbar from "./TopNavbar";

// ... Assets

/*
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
  |----------------------------------------------------------------------------
*/
const AppLayout = ({ children }) => {
  const { disableNavbar } = useContext(NavigationContext);
  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */

  /*
  |----------------------------------------
  | Return
  |----------------------------------------
  */

  return (
    <div id="app_wrapper" className="app_wrapper row gx-0 container-fluid">
      <Navigation className="col-3" />
      <div
        id="main_content_container"
        className={`${
          disableNavbar ? "col-12" : "col-9"
        } main_content_container`}
      >
        <TopNavbar />
        <div className="">{children}</div>
      </div>
      {/* <Footer className="" /> */}
    </div>
  );
};

export default AppLayout;
