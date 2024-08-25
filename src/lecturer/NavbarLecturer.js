import React from "react";
import "./NavbarLecturer.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Profile from "../components/Profile";
import Logout from "../assets/logout.png";
import Menu from "../assets/menu.png";
import DropdownMenu from "./DropDownMenu";
// import axios from 'axios';

export default function NavBarLecturer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="navbar">
      <div className="logo">
        <div className="menu dropdown-button">
          <button onClick={toggleMenu}>
            <img src={Menu} alt="::"></img>
            {isOpen && <DropdownMenu />}
          </button>
        </div>
        <p className="BioSync">BioSync </p>
      </div>
      <div className="links">
        <nav className="pages">
          <ul>
            <li className="Home">
              <NavLink to="../admin/Home">Home</NavLink>
            </li>

            <li className="Attendance">
              <NavLink to="../admin/Attendance">Attendance</NavLink>
            </li>
            <li className="Venue">
              <NavLink to="../admin/CreateVenue">Venue</NavLink>
            </li>
            <li className="Records">
              <NavLink to="../admin/Records">Records</NavLink>
            </li>
          </ul>
        </nav>

        <div className="logout">
          <div className="profile">
            <Profile className="profile" />
          </div>
          <div className="log">
            <button>
              <img src={Logout} alt=":"></img>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
