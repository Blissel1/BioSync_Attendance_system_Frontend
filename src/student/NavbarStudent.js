import React from "react";
import "./NavBarStudent.css"
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Profile from '../components/Profile'
import Logout  from '../assets/logout.png'
import Menu  from '../assets/menu.png'
import axios from 'axios';



export default function NavBarStudent (){

  const [isLoggedIn, setIsLoggedIn] = useState(true); // Assume initial login

  const handleLogout = async () => {
    try {
      const response = await axios.post(/*/api/logout*/'../WelcomePage.js', null, { // Replace with your endpoint
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`, // Include token in headers
        },
      });
  
      if (response.status === 200) { // Assuming successful logout response
        localStorage.removeItem('token'); // Remove token from local storage
        setIsLoggedIn(false); // Update state for conditional rendering
        // Optionally, redirect to login page or display success message
      } else {
        console.error('Logout failed:', response.data); // Handle logout errors
        // Display error message to the user
      }
    } catch (error) {
      console.error('Logout request failed:', error); // Handle network or other errors
      // Display error message to the user
    }
    isLoggedIn(false)
  };
  

return (
  <div className="navbar">
      <div className="logo">
      <div className="menu">
          <img src={Menu} alt="::"></img>  

        </div>
     <p className="BioSync">BioSync </p>
      </div>
      <div className="links">
        <nav className="pages">
          <ul>
            <li className='Home'> 
                <NavLink to="../student/Home">Home</NavLink>
            </li>
            <li className='Record'>
                <NavLink to="../student/Record">Records</NavLink>
            </li>   
          </ul>
        </nav>
        
     
      <div className="logout">
      
        <div className="profile">
          <Profile className='profile'/>
          </div>
          <div className="log">{isLoggedIn && (
            <button onClick={handleLogout}>
               <img   src={Logout} alt=":">
               </img>
               </button>
          )}
            </div>
        
      </div>
      </div>
  </div>
);

}

