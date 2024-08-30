// ... React modules
import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

// ... Context
import { NavigationContext } from "../contexts/NavigationContextProvider";

// ... Components
import AdminLoginPage from "../pages/auth/AdminLoginPage";
import AdminRegistrationPage from "../pages/auth/AdminRegistrationPage";
import StudentLoginPage from "../pages/auth/StudentLoginPage";
import StudentRegistrationPage from "../pages/auth/StudentRegistrationPage";

import DashboardPage from "../pages/dashboard_page/DashboardPage";
import WelcomePage from "../pages/welcome_page/WelcomePage";

import CreateVenuePage from "../pages/venue/CreateVenuePage";

import CreateAttendancePage from "../pages/attendance_page/CreateAttendancePage";
import TakeAttendancePage from "../pages/attendance_page/TakeAttendancePage";
import ViewAttendancePage from "../pages/attendance_page/ViewAttendancePage";
import StudentViewAttendancePage from "../pages/attendance_page/StudentViewAttendancePage";

// ... Assets

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
const WebRouting = () => {
  const {
    welcomeRoute,
    dashboardRoute,
    adminRegistrationRoute,
    adminLoginRoute,
    studentRegistrationRoute,
    studentLoginRoute,
    createVenueRoute,
    createAttendanceRoute,
    takeAttendanceRoute,
    viewAttendanceRoute,
    studentViewAttendance,
  } = useContext(NavigationContext);

  /*
  |----------------------------------------
  | Comment here
  |----------------------------------------
  */

  return (
    <Routes>
      <Route path={welcomeRoute?.path} element={<WelcomePage />} />
      <Route path={dashboardRoute?.path} element={<DashboardPage />} />

      {/* Auth */}
      <Route
        path={adminRegistrationRoute?.path}
        element={<AdminRegistrationPage />}
      />
      <Route path={adminLoginRoute?.path} element={<AdminLoginPage />} />
      <Route
        path={studentRegistrationRoute?.path}
        element={<StudentRegistrationPage />}
      />
      <Route path={studentLoginRoute?.path} element={<StudentLoginPage />} />

      {/* Venue */}
      <Route path={createVenueRoute?.path} element={<CreateVenuePage />} />

      {/* Attendance */}
      <Route
        path={createAttendanceRoute?.path}
        element={<CreateAttendancePage />}
      />
      <Route
        path={takeAttendanceRoute?.path}
        element={<TakeAttendancePage />}
      />
      <Route
        path={viewAttendanceRoute?.path}
        element={<ViewAttendancePage />}
      />
      <Route
        path={studentViewAttendance?.path}
        element={<StudentViewAttendancePage />}
      />

      {/* Not found */}
      <Route path="*" element="Page Not Found" />
    </Routes>
  );
};

export default WebRouting;
