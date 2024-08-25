import React, { useState } from "react";
import { program, year, buildings, rooms as roomsData, courses as coursesData } from "../data/data.js";
import axios from "axios";
import "./Attendance.css";

export default function CreateAttendance() {
  const [selectProgram, setSelectProgram] = useState("");
  const [selectYear, setSelectYear] = useState("");
  const [selectBuilding, setSelectBuilding] = useState("");
  const [selectRoom, setSelectRoom] = useState("");
  const [selectCourse, setSelectCourse] = useState(""); // State for selected course
  const [availableCourses, setAvailableCourses] = useState([]); // State for available courses
  const [availableRooms, setAvailableRooms] = useState([]); // State for available rooms
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleBuildingChange = (e) => {
    const selectedBuilding = buildings[e.target.value];
    setSelectBuilding(selectedBuilding);
    
    // Update the available rooms based on the selected building
    if (roomsData[selectedBuilding]) {
      setAvailableRooms(roomsData[selectedBuilding]);
    } else {
      setAvailableRooms([]); // Clear rooms if no match
    }
  };

  const handleProgramChange = (e) => {
    const selectedProgram = program[e.target.value];
    setSelectProgram(selectedProgram);

    // Update available courses based on selected program and year
    const availableCoursesForProgram = coursesData[selectedProgram] && coursesData[selectedProgram][selectYear];
    setAvailableCourses(availableCoursesForProgram || []);
  };

  const handleYearChange = (e) => {
    const selectedYear = year[e.target.value];
    setSelectYear(selectedYear);

    // Update available courses based on selected program and year
    const availableCoursesForProgram = coursesData[selectProgram] && coursesData[selectProgram][selectedYear];
    setAvailableCourses(availableCoursesForProgram || []);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Log each field to the console
    console.log("Program:", selectProgram);
    console.log("Year:", selectYear);
    console.log("Building:", selectBuilding);
    console.log("Room Number:", selectRoom);
    console.log("Course:", selectCourse);
    console.log("Start Date:", startDate);
    console.log("Start Time:", startTime);
    console.log("End Date:", endDate);
    console.log("End Time:", endTime);

    const attendanceData = {
      program: selectProgram,
      year: selectYear,
      building: selectBuilding,
      roomNumber: selectRoom,
      course: selectCourse,
      startDate,
      startTime,
      endDate,
      endTime,
    };

    const token = localStorage.getItem("token"); // Get token from localStorage

    try {
      // Send the data to the backend
      const response = await axios.post(
        "http://localhost:4000/api/v1/attendance/create",
        attendanceData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token in the request headers
          }
        }
      );
      console.log("Attendance Data Sent to Backend:", response.data);
    } catch (error) {
      console.error("There was an error creating the attendance!", error);
    }
  };

  return (
    <div className="attendance">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Create Attendance</h1>

        <div className="program">
          <label>Program</label>
          <select
            id="program"
            placeholder="Program"
            value={selectProgram}
            onChange={handleProgramChange}
            required
          >
            <option value="" disabled>
              Select Program
            </option>
            {Object.entries(program).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>

        <div className="year">
          <label>Year</label>
          <select
            id="year"
            placeholder="Year"
            value={selectYear}
            onChange={handleYearChange}
            required
          >
            <option value="" disabled>
              Select Year
            </option>
            {Object.entries(year).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>

        {/* Course Dropdown */}
        {availableCourses.length > 0 && (
          <div className="course">
            <label>Course</label>
            <select
              id="course"
              placeholder="Course"
              value={selectCourse}
              onChange={(e) => setSelectCourse(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Course
              </option>
              {availableCourses.map((course, index) => (
                <option key={index} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="building">
          <label>Building</label>
          <select
            id="building"
            placeholder="Building"
            value={selectBuilding}
            onChange={handleBuildingChange}
            required
          >
            <option value="" disabled>
              Select Building
            </option>
            {Object.entries(buildings).map(([key, value]) => (
              <option key={key} value={key}>
                {value}
              </option>
            ))}
          </select>
        </div>

        {/* Room Number Dropdown */}
        {availableRooms.length > 0 && (
          <div className="room">
            <label>Room Number</label>
            <select
              id="roomNumber"
              placeholder="Room Number"
              value={selectRoom}
              onChange={(e) => setSelectRoom(e.target.value)}
              required
            >
              <option value="" disabled>
                Select Room Number
              </option>
              {availableRooms.map((room, index) => (
                <option key={index} value={room}>
                  {room}
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="time">
          <label>Start Date</label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          <label>Start Time</label>
          <input
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            required
          />
          <label>End Date</label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
          <label>End Time</label>
          <input
            type="time"
            value={endTime}
            onChange={(e) => setEndTime(e.target.value)}
            required
          />
        </div>

        <div className="submit">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
