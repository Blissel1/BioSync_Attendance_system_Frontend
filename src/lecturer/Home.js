import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminDashboard.css'; // Add or update CSS for styling

export default function AdminDashboard() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Replace these with actual values or have them set dynamically
  const courseName = 'Course Name'; 
  const program = 'Program Name';
  const year = 2024;

  const fetchAttendanceData = async () => {
    setLoading(true);
    try {
      const response = await axios.get('/api/getAttendanceData', {
        params: { courseName, program, year },
      });
      setAttendanceData(response.data.attendanceData);
    } catch (error) {
      console.error('Error fetching attendance data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isExpanded) {
      fetchAttendanceData();
    }
  }, [isExpanded]);

  const handleOpen = () => setIsExpanded(true);
  const handleClose = () => setIsExpanded(false);

  return (
    <div className="admin-dashboard">
      <div className="admin-dashboard-header">
        <h1>{courseName} - {program} - {year}</h1>
        <button className="open-button" onClick={handleOpen}>Open</button>
      </div>

      {isExpanded && (
        <div className="expanded-view">
          <div className="close-button" onClick={handleClose}>X</div>
          <h2>Attendance Data</h2>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Index Number</th>
                  <th>Student Name</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.length === 0 ? (
                  <tr>
                    <td colSpan="3">No data available</td>
                  </tr>
                ) : (
                  attendanceData.map((record, index) => (
                    <tr key={index}>
                      <td>{record.studentId.indexNumber}</td>
                      <td>{record.studentId.name}</td>
                      <td>{new Date(record.date).toLocaleDateString()}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
