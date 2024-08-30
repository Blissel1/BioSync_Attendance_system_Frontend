// React modules
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";

// Contexts
import { NavigationContext } from "../contexts/NavigationContextProvider";
import { AuthContext } from "../contexts/AuthContextProvider";

// Components

// Assets

import { GiAbstract049 } from "react-icons/gi";

const Navigation = ({ className }) => {
  const {
    mainNavLinks,
    studentsMainNavLinks,
    welcomeRoute,
    navbarDisableStyle,
  } = useContext(NavigationContext);

  const { userIsAdmin } = useContext(AuthContext);

  let sideNavLinks;
  switch (userIsAdmin) {
    case true:
      sideNavLinks = mainNavLinks;
      break;

    case false:
      sideNavLinks = studentsMainNavLinks;
      break;

    default:
      sideNavLinks = studentsMainNavLinks;
  }

  return (
    <nav
      id="side_nav_bar_container"
      className={`${className} ${navbarDisableStyle()} d-sm-block d-none p-0 fixed-start bg_primary_dark_1 text_light`}
    >
      <div className="h-100 d-flex flex-column flex-shrink-0 p-3">
        <Link
          to={welcomeRoute?.path}
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none fw-bold"
        >
          <GiAbstract049 className="me-2" size={32} />
          <span className="fs-4">BioSync</span>
        </Link>
        <hr className="text_white" />

        <ul className="nav nav-pills flex-column mb-auto">
          {sideNavLinks?.map((links, index) => {
            const { title, path, icon } = links;
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
                  {icon}
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <hr className="text_white" />
      </div>
    </nav>
  );
};

export default Navigation;
