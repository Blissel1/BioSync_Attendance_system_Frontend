// React modules
import { useContext } from "react";
import { BsBuildingFill, BsEye } from "react-icons/bs";

import { FaClipboardCheck } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";

// Context
import { NavigationContext } from "../../contexts/NavigationContextProvider";
import { AuthContext } from "../../contexts/AuthContextProvider";

// Components
import PageHeader from "../../components/header/PageHeader";
import NavCard from "../../components/card/NavCard";
import StudentCourseInfoTable from "../../components/table/StudentCourseInfoTable";
import AdminCourseInfoTable from "../../components/table/AdminCourseInfoTable";

// Assets

const DashboardPage = () => {
  const {
    createVenueRoute,
    createAttendanceRoute,
    takeAttendanceRoute,
    studentViewAttendance,
  } = useContext(NavigationContext);
  const { userIsAdmin } = useContext(AuthContext);

  const iconSize = 50;
  return (
    <section id="dashboard-section" className="">
      <div className="dashboard-section-container">
        <PageHeader page_name="Dashboard" />

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
          {userIsAdmin ? (
            <>
              <NavCard
                nav_name={createAttendanceRoute?.title}
                icon={<MdCreateNewFolder size={iconSize} />}
                path={createAttendanceRoute?.path}
                color="danger"
              />
              <NavCard
                nav_name={createVenueRoute?.title}
                icon={<BsBuildingFill size={iconSize} />}
                path={createVenueRoute?.path}
                color="primary"
              />
              {/* <NavCard
                nav_name={studentViewAttendance?.title}
                icon={<BsEye size={iconSize} />}
                path={studentViewAttendance?.path}
                color="success"
              /> */}
            </>
          ) : (
            <>
              <NavCard
                nav_name={takeAttendanceRoute?.title}
                icon={<FaClipboardCheck size={iconSize} />}
                path={takeAttendanceRoute?.path}
                color="warning"
              />
              <NavCard
                nav_name={studentViewAttendance?.title}
                icon={<BsEye size={iconSize} />}
                path={studentViewAttendance?.path}
                color="success"
              />
            </>
          )}
        </div>

        {/* Switch */}
        {userIsAdmin ? <AdminCourseInfoTable /> : <StudentCourseInfoTable />}
      </div>
    </section>
  );
};

export default DashboardPage;
