// React modules
import { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { NavigationContext } from "../../contexts/NavigationContextProvider";

// Components

// Assets

const WelcomePage = () => {
  const { studentLoginRoute } = useContext(NavigationContext);
  return (
    <div id="welcome_section" className="">
      <div className="welcome_outer_container">
        <div className="welcome_text_container text-center pt-4">
          <h1 className="mb-4" style={{ fontSize: "4rem" }}>
            Welcome To BioSyn
          </h1>
          <p className="mb-4">Online Attendance System</p>
          <Link
            name=""
            id=""
            className="btn btn-lg btn_primary_dark_2"
            to={studentLoginRoute?.path}
            role="button"
          >
            {studentLoginRoute?.title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
