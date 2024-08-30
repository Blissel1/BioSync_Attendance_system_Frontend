import { FaClipboardCheck, FaTimesCircle } from "react-icons/fa";

const AdminViewAttendanceTable = () => {
  // Sample data for 3 students
  const students = [
    {
      indexNumber: "4335120",
      name: "John Doe",
      attendance: {
        "20th Jan": "Present",
        "27th July": "Absent",
        "3th Feb": "Present",
        "10th Feb": "Absent",
        "17th Feb": "Present",
      },
    },
    {
      indexNumber: "4335220",
      name: "Jane Smith",
      attendance: {
        "20th Jan": "Absent",
        "27th July": "Present",
        "3th Feb": "Present",
        "10th Feb": "Present",
        "17th Feb": "Absent",
      },
    },
    {
      indexNumber: "4335320",
      name: "Alice Johnson",
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
    <div className="table-responsive bg_success_light px-2">
      <div className="bg_danger text-light py-3 px-2 mb-4">
        <h2 className="mb-2">Introduction to Computering</h2>
        <p style={{ filter: "brightness(95%)" }}>
          Taking by : Dixon Funfooler Avuglahagbemenovi
        </p>
      </div>
      <table className="table table-striped table-white table-hover align-middle">
        <thead className="table-header table-success table-group-divider">
          <tr>
            <th scope="col">Index Number</th>
            <th scope="col">Names</th>
            <th scope="col">20th Jan</th>
            <th scope="col">27th July</th>
            <th scope="col">3th Feb</th>
            <th scope="col">10th Feb</th>
            <th scope="col">17th Feb</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.indexNumber}</td>
              <td>{student.name}</td>
              <td>{renderAttendanceIcon(student.attendance["20th Jan"])}</td>
              <td>{renderAttendanceIcon(student.attendance["27th July"])}</td>
              <td>{renderAttendanceIcon(student.attendance["3th Feb"])}</td>
              <td>{renderAttendanceIcon(student.attendance["10th Feb"])}</td>
              <td>{renderAttendanceIcon(student.attendance["17th Feb"])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminViewAttendanceTable;
