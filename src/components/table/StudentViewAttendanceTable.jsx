import { FaClipboardCheck, FaTimesCircle } from "react-icons/fa";

const StudentViewAttendanceTable = () => {
  // Sample data for 3 courses
  const courses = [
    {
      courseName: "Mathematics",
      instructor: "Dr. Smith",
      attendance: {
        "20th Jan": "Present",
        "27th July": "Absent",
        "3th Feb": "Present",
        "10th Feb": "Absent",
        "17th Feb": "Present",
      },
    },
    {
      courseName: "Physics",
      instructor: "Prof. Johnson",
      attendance: {
        "20th Jan": "Absent",
        "27th July": "Present",
        "3th Feb": "Present",
        "10th Feb": "Present",
        "17th Feb": "Absent",
      },
    },
    {
      courseName: "Chemistry",
      instructor: "Dr. Lee",
      attendance: {
        "20th Jan": "Present",
        "27th July": "Present",
        "3th Feb": "Absent",
        "10th Feb": "Present",
        "17th Feb": "Present",
      },
    },
  ];

  // Function to render the icon based on attendance status
  const renderAttendanceIcon = (status) => {
    return status === "Present" ? (
      <FaClipboardCheck className="text-success" />
    ) : (
      <FaTimesCircle className="text-danger" />
    );
  };

  return (
    <div className="table-responsive bg_warning_light px-2">
      <div className="bg_danger text-light py-3 px-2 mb-4">
        Classes taken by you this year
      </div>
      <table className="table table-striped table-white table-hover align-middle">
        <thead className="table-header table-warning table-group-divider">
          <tr>
            <th scope="col">Course Name</th>
            <th scope="col">Instructor</th>
            <th scope="col">20th Jan</th>
            <th scope="col">27th July</th>
            <th scope="col">3th Feb</th>
            <th scope="col">10th Feb</th>
            <th scope="col">17th Feb</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {courses.map((course, index) => (
            <tr key={index}>
              <td>{course.courseName}</td>
              <td>{course.instructor}</td>
              <td>{renderAttendanceIcon(course.attendance["20th Jan"])}</td>
              <td>{renderAttendanceIcon(course.attendance["27th July"])}</td>
              <td>{renderAttendanceIcon(course.attendance["3th Feb"])}</td>
              <td>{renderAttendanceIcon(course.attendance["10th Feb"])}</td>
              <td>{renderAttendanceIcon(course.attendance["17th Feb"])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentViewAttendanceTable;
