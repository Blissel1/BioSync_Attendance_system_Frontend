import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBarStudent from './NavbarStudent';
import './homepage.css';
import './Attendancecomponent.css';

export default function Home({ studentId }) {
  const [formDetails, setFormDetails] = useState(null);
  const [isWithinVenue, setIsWithinVenue] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFormDetails = async () => {
      try {
        const response = await axios.get(`/api/getFormDetails/${studentId}`);
        if (response.data.success) {
          setFormDetails(response.data.formDetails);
        }
      } catch (error) {
        console.error('Error fetching form details:', error);
        setError('Failed to fetch form details.');
      }
    };

    fetchFormDetails();
  }, [studentId]);

  const checkLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude, altitude } = position.coords;

          // Send data to the backend for verification
          axios.post('/api/verifyLocation', {
            studentId,
            latitude,
            longitude,
            altitude,
          })
          .then(response => {
            setIsWithinVenue(response.data.isWithinVenue);
            alert(response.data.message);
          })
          .catch(error => {
            console.error('Error verifying location:', error);
            setError('An error occurred during location verification.');
          });
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Please enable location services.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  if (!formDetails) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="homepage">
      <NavBarStudent />
      <div className="homeStudent">
        <div className="attendance-component">
          <h1>{formDetails.courseName}</h1>
          <p>{formDetails.professorName}</p>
          <p>{formDetails.college}</p>
          <p>Date: {new Date(formDetails.startTime).toLocaleDateString()}</p>
          <p>
            {new Date(formDetails.startTime).toLocaleTimeString()} - {new Date(formDetails.endTime).toLocaleTimeString()}
          </p>
          <button className="checkIn" onClick={checkLocation}>
            Check IN
          </button>
          {isWithinVenue !== null && (
            <p>{isWithinVenue ? 'You are within the venue.' : 'You are outside the venue.'}</p>
          )}
        </div>
      </div>
    </div>
  );
}
