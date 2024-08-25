import React from "react";
import "./WelcomePage.css";
// import Background from "./components/Background";
import { NavLink } from 'react-router-dom';
import Image from './assets/login.jpg'

function WelcomePage() {
  return (
    <div className="welcomePage">
      <div className="background">
        {/* <Background /> */}
        <img src={Image} alt=" student images"/>
      </div>
      <div>
        <div className="form">
          <form>
            <h1>Welcome</h1>
            <p>to</p>
            <p className="BioSync">BioSync</p>
            <p>the secure and efficient attendance solution!</p>
           
            <div className="button">
              <NavLink to="./lecturer/LoginLecturer">lecturer Login</NavLink>
              <NavLink to="./student/LoginStudent.js">Student Login</NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default WelcomePage;
