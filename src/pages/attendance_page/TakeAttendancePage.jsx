// React modules
import { useState } from "react";

// Components
import PageHeader from "../../components/header/PageHeader";

const TakeAttendancePage = () => {
  // Sample data for courses with date, start time, and stop time
  const courses = [
    {
      id: 1,
      name: "Mathematics",
      instructor: "Dr. Smith",
      date: "2024-09-01",
      startTime: "10:00 AM",
      stopTime: "11:00 AM",
    },
    {
      id: 2,
      name: "Physics",
      instructor: "Prof. Johnson",
      date: "2024-09-02",
      startTime: "12:00 PM",
      stopTime: "1:00 PM",
    },
    {
      id: 3,
      name: "Chemistry",
      instructor: "Dr. Lee",
      date: "2024-09-03",
      startTime: "2:00 PM",
      stopTime: "3:00 PM",
    },
  ];

  // State to track attendance for each course
  const [attendanceStatus, setAttendanceStatus] = useState({});

  // Function to handle attendance click
  const handleTakeAttendance = (courseId) => {
    setAttendanceStatus((prevState) => ({
      ...prevState,
      [courseId]: "Attendance Taken",
    }));
  };

  return (
    <div className="container">
      <PageHeader page_name="Take Attendance" />
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{course.name}</h5>
                <p className="card-text">Instructor: {course.instructor}</p>
                <p className="card-text">Date: {course.date}</p>
                <p className="card-text">
                  Time: {course.startTime} - {course.stopTime}
                </p>
                <button
                  className="btn btn_primary_dark_1"
                  onClick={() => handleTakeAttendance(course.id)}
                  disabled={attendanceStatus[course.id] === "Attendance Taken"}
                >
                  Take Attendance
                </button>
                {attendanceStatus[course.id] && (
                  <p className="mt-2 text-success">
                    {attendanceStatus[course.id]}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TakeAttendancePage;
