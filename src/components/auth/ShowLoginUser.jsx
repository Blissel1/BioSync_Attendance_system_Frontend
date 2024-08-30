// React
import { Link } from "react-router-dom";

// Context

// Components

// Assets

const ShowLoginUser = () => {
  return (
    <div className="dropdown pt-2">
      <Link
        className="d-flex align-items-center  text-decoration-none dropdown-toggle text_light"
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {/* <img
          src="https://via.placeholder.com/150"
          alt="Default User Profile"
          width="32"
          height="32"
          className="rounded-circle me-2"
        /> */}
        <strong>Dixon Nyamekye</strong>
      </Link>

      {/* Drop Down */}
      <ul
        className="dropdown-menu dropdown-menu-dark text-small shadow"
        aria-labelledby="dropdownUser1"
      >
        {/* <li>
          <Link className="dropdown-item">Profile</Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li> */}
        <li>
          <Link className="dropdown-item">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default ShowLoginUser;
