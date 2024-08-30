import { Link } from "react-router-dom";
import { useContext } from "react";

import { NavigationContext } from "../../contexts/NavigationContextProvider";

const PageBreadCrumb = ({ page_name }) => {
  const { dashboardRoute } = useContext(NavigationContext);

  return (
    <>
      <nav
        style={{ "--bs-breadcrumb-divider": "none" }}
        aria-label="breadcrumb"
        className="m-0"
      >
        <ol className="breadcrumb mb-0">
          <li className="breadcrumb-item">
            <Link to={dashboardRoute?.path}>{dashboardRoute?.title}</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {page_name}
          </li>
        </ol>
      </nav>
    </>
  );
};

export default PageBreadCrumb;
