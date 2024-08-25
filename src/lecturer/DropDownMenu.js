import React from "react";
import "./DropDownMenu.css";
import { NavLink } from "react-router-dom";
// import Main from './Home'

function DropdownMenu() {
  return (
    <div className="mainDrop">
      <div className="dropdown-menu">
        <ul>
          <li>
            <NavLink to="../admin/Home">Home</NavLink>
          </li>
          <li>
            <NavLink to="../admin/Attendance">Attendance</NavLink>
          </li>
          <li>
            <NavLink to="../admin/CreateVenue">Venue</NavLink>
          </li>
          <li>
            <NavLink to="../admin/Records">Records</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default DropdownMenu;
