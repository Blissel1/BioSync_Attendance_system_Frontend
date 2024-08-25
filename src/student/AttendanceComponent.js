import React, { useState, useEffect } from 'react';
import axios from 'axios'; // For API calls

function AttendanceComponent() {
  const [attendanceData, setAttendanceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/attendance'); // Replace with your API endpoint
        setAttendanceData(response.data);
      } catch (error) {
        console.error('Error fetching attendance data:', error);
        // Handle errors appropriately (e.g., display error message to user)
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures fetching only once on component mount

  return (
    <div className="attendance-component">
      {attendanceData ? (
        // Display attendance data if fetched successfully
        <>
          <h2>{attendanceData.courseName}</h2>
          <p>Time Range: {attendanceData.startTime} - {attendanceData.endTime}</p>
          {/* Add any other relevant details (e.g., lecturer name, room number) */}
        </>
      ) : (
        // Display loading indicator or placeholder while fetching
        <p>Loading attendance data...</p>
      )}
    </div>
  );
}

export default AttendanceComponent;
