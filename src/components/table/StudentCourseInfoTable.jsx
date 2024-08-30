// React modules
import { useContext } from "react";

// Context
import { StudentContext } from "../../contexts/StudentContextProvider";

// Component

// Assets

const StudentCourseInfoTable = () => {
  const { courseData } = useContext(StudentContext);

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
            <th scope="col" className="text-center">
              Classes Attended
            </th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {courseData?.map((course, index) => (
            <tr key={index} className={index % 2 === 0 ? "table-white" : ""}>
              <td>{course?.courseName}</td>
              <td>{course?.instructor}</td>
              <td className="text-center">{course?.classesAttended}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentCourseInfoTable;
