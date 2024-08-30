// React
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";

// Context
import { NavigationContext } from "../contexts/NavigationContextProvider";
import { AuthContext } from "../contexts/AuthContextProvider";

// Components
import ShowLoginUser from "../components/auth/ShowLoginUser";

const TopNavbar = () => {
  const {
    welcomeRoute,
    dashboardRoute,
    mainNavLinks,
    studentRegistrationRoute,
    studentLoginRoute,
  } = useContext(NavigationContext);

  const { userIsAdmin, setUserIsAdmin } = useContext(AuthContext);

  const handleToggle = () => {
    setUserIsAdmin((prev) => !prev);
  };

  // Return
  return (
    <nav
      id="top_navbar"
      className="navbar navbar-expand-sm navbar-dark bg_primary_dark"
    >
      <Link
        to={welcomeRoute?.path}
        className="text_white ms-4 d-sm-inline-block d-none text-center"
      >
        Home{" "}
      </Link>
      <Link
        to={dashboardRoute?.path}
        className="text_white ms-4 d-sm-inline-block d-none text-center"
      >
        Dashboard{" "}
      </Link>

      {/* Switch */}
      <div className="form-check form-switch ms-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexSwitchCheckDefault"
          checked={userIsAdmin} // Bind to state
          onChange={handleToggle} // Toggle state on change
        />
        <label
          className="form-check-label text-light"
          htmlFor="flexSwitchCheckDefault"
        >
          Admin
        </label>
      </div>
      {/* End of Switch */}

      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></button>
      <div
        className="collapse navbar-collapse justify-content-sm-end"
        id="collapsibleNavId"
      >
        <ul className="navbar-nav me-auto mt-2 mt-lg-0 d-sm-none d-inline-block">
          {mainNavLinks?.map((links, index) => {
            const { title, path } = links;
            return (
              <li className="nav-item" key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `nav-link py-3 ${isActive ? "active_nav" : ""}`
                  }
                  aria-current={
                    path === window.location.pathname ? "page" : undefined
                  }
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="pe-3 d-flex">
          <ShowLoginUser />
          <Link
            to={studentLoginRoute?.path}
            type="button"
            className="btn btn-outline-light mx-4"
          >
            {studentLoginRoute?.title}
          </Link>
          <Link
            to={studentRegistrationRoute?.path}
            type="button"
            className="btn btn-light"
          >
            {studentRegistrationRoute?.title}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
