// React modules
// import { useContext } from "react";

// Context
// import { AuthContext } from "../../contexts/AuthContextProvider";

// Components
import PageHeader from "../../components/header/PageHeader";
import StudentViewAttendanceTable from "../../components/table/StudentViewAttendanceTable";
// import AdminViewAttendanceTable from "../../components/table/AdminViewAttendanceTable";

// Assets

const StudentViewAttendancePage = () => {
  //   const { userIsAdmin } = useContext(AuthContext);
  return (
    <section>
      <PageHeader page_name="View Attendance : Student" />

      <StudentViewAttendanceTable />
    </section>
  );
};

export default StudentViewAttendancePage;
