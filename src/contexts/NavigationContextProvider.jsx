// ... React modules
import { createContext, useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// ... Context

// ... Components

// ... Assets
import navigation_data from "../_data/navigation_db";

/*
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
|----------------------------------------------------------------------------
*/
export const NavigationContext = createContext({
  welcomeRoute: {},
  dashboardRoute: {},
  adminRegistrationRoute: {},
  adminLoginRoute: {},
  studentRegistrationRoute: {},
  studentLoginRoute: {},
  createVenueRoute: {},
  createAttendanceRoute: {},
  takeAttendanceRoute: {},
  viewAttendanceRoute: {},
  studentViewAttendance: {},

  studentsMainNavLinks: [],
  mainNavLinks: [],

  navbarDisableStyle: () => {},
  disableNavbar: Boolean,
  setDisableNavbar: () => {},

  // Navigate
  navigateViewAttendance: () => {},
});

const NavigationContextProvider = ({ children }) => {
  const navigate = useNavigate();

  // Base states
  const location = useLocation();
  const [disableNavbar, setDisableNavbar] = useState(false);

  //   Extract each route
  const allNavigationData = navigation_data;
  const welcomeRoute = allNavigationData?.welcome;
  const dashboardRoute = allNavigationData?.dashboard;

  const adminRegistrationRoute = allNavigationData?.adminRegistration;
  const adminLoginRoute = allNavigationData?.adminLogin;
  const studentRegistrationRoute = allNavigationData?.studentRegistration;
  const studentLoginRoute = allNavigationData?.studentLogin;

  const createVenueRoute = allNavigationData?.createVenue;
  const createAttendanceRoute = allNavigationData?.createAttendance;
  const takeAttendanceRoute = allNavigationData?.takeAttendance;
  const viewAttendanceRoute = allNavigationData?.viewAttendance;
  const studentViewAttendance = allNavigationData?.studentViewAttendance;

  // Main navigations
  const mainNavLinks = [
    // welcomeRoute,
    dashboardRoute,
    createVenueRoute,
    createAttendanceRoute,
    // takeAttendanceRoute,
    // viewAttendanceRoute,
  ];

  const studentsMainNavLinks = [
    // welcomeRoute,
    dashboardRoute,
    takeAttendanceRoute,
    studentViewAttendance,
  ];

  // Disable the navbar based on an active page
  const navbarDisableStyle = () => {
    let style = "";
    if (disableNavbar) {
      style = "diable_navbar";
    }

    return style;
  };

  // Navigate to pages
  const navigateViewAttendance = (course, id) => {
    if ((course, id)) {
      const path = `/admin/view-attendance/${course}/${id}`;
      navigate(path);
    } else {
      console.log("Invalid course or id");
    }
  };

  const url_pathname = location?.pathname;
  useEffect(() => {
    const pathnames = [
      welcomeRoute?.path,
      adminRegistrationRoute?.path,
      adminLoginRoute?.path,
      studentRegistrationRoute?.path,
      studentLoginRoute?.path,
    ];

    if (pathnames.includes(url_pathname)) {
      setDisableNavbar(true);
    } else {
      setDisableNavbar(false);
    }

    // eslint-disable-next-line
  }, [url_pathname]);

  /*
  |----------------------------------------
  | Context
  |----------------------------------------
  */
  const context = {
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

    mainNavLinks,
    studentsMainNavLinks,

    navbarDisableStyle,
    disableNavbar,
    setDisableNavbar,

    // Navigate
    navigateViewAttendance,
  };

  /*
  |----------------------------------------
  | Return jsx
  |----------------------------------------
  */
  return (
    <NavigationContext.Provider value={context}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContextProvider;
