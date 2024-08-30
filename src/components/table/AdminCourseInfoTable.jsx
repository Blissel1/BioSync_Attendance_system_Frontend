// React modules
import { useContext } from "react";

// Context
import { StudentContext } from "../../contexts/StudentContextProvider";
import { NavigationContext } from "../../contexts/NavigationContextProvider";

// Component

// Assets

const AdminCourseInfoTable = () => {
  const { courseProgramData } = useContext(StudentContext);
  const { navigateViewAttendance } = useContext(NavigationContext);

  return (
    <div className="table-responsive bg_success_light px-2">
      <div className="bg_danger text-light py-3 px-2 mb-4">
        Courses you are instructing this year
      </div>
      <table className="table table-striped table-white table-hover align-middle">
        <thead className="table-header table-success table-group-divider">
          <tr>
            <th scope="col">Program</th>
            <th scope="col">Course</th>
            <th scope="col" className="text-center">
              Year
            </th>
            <th scope="col" className="text-center">
              View Attendance
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {courseProgramData?.map(({ id, program, course, year }) => (
            <tr key={id}>
              <td>{program}</td>
              <td>{course}</td>
              <td className="text-center">{year}</td>
              <td className="text-center">
                <button
                  name="view_attendance"
                  id="view_attendance"
                  className="btn btn-sm btn-success hover_underline"
                  role="link"
                  onClick={() => navigateViewAttendance(course, id)}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminCourseInfoTable;
