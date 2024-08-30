import {
  BsHouseFill,
  BsSpeedometer2,
  BsPersonPlusFill,
  BsPersonCheckFill,
  BsBuildingFill,
  BsEye,
} from "react-icons/bs";

import { FaClipboardCheck } from "react-icons/fa";
import { MdCreateNewFolder } from "react-icons/md";

const style = "icon me-2";
const iconSize = 20;
const navigation_data = {
  welcome: {
    name: "welcome",
    title: "Welcome",
    description: "Welcome",
    path: "/",
    icon: <BsHouseFill className={style} size={iconSize} />,
  },

  // Dashboard
  dashboard: {
    name: "dashboard",
    title: "Dashboard",
    description: "View Dashboard",
    path: "/dashboard/",
    icon: <BsSpeedometer2 className={style} size={iconSize} />,
  },

  // Admin
  adminRegistration: {
    name: "admin_registration",
    title: "Sign Up",
    description: "Register as an admin",
    path: "/admin/sign-up",
    icon: <BsPersonPlusFill className={style} size={iconSize} />,
  },
  adminLogin: {
    name: "admin_login",
    title: "Sign In",
    description: "Sign In as an Admin",
    path: "/admin/login",
    icon: <BsPersonCheckFill className={style} size={iconSize} />,
  },

  // Student
  studentRegistration: {
    name: "student_registration",
    title: "Sign Up",
    description: "Register as a Student",
    path: "/student/sign-up",
    icon: <BsPersonPlusFill className={style} size={iconSize} />,
  },
  studentLogin: {
    name: "student_login",
    title: "Sign In",
    description: "Sign In as a Student",
    path: "/student/login",
    icon: <BsPersonCheckFill className={style} size={iconSize} />,
  },

  // Create Venue
  createVenue: {
    name: "create_venue",
    title: "Create Venue",
    description: "Create a venue for a course",
    path: "/admin/create-venue",
    icon: <BsBuildingFill className={style} size={iconSize} />,
  },

  // Attendance
  createAttendance: {
    name: "create_attendance",
    title: "Create Attendance",
    description: "Create Attendance",
    path: "/admin/create-attendance",
    icon: <MdCreateNewFolder className={style} size={iconSize} />,
  },
  takeAttendance: {
    name: "take_attendance",
    title: "Take Attendance",
    description: "Take Attendance",
    path: "/student/create-attendance",
    icon: <FaClipboardCheck className={style} size={iconSize} />,
  },
  viewAttendance: {
    name: "view_attendance",
    title: "View Attendance",
    description: "View Attendance",
    path: "/admin/view-attendance/:course/:id",
    icon: <BsEye className={style} size={iconSize} />,
  },
  studentViewAttendance: {
    name: "view_attendance",
    title: "View Attendance",
    description: "View Attendance",
    path: "/student/view-attendance",
    icon: <BsEye className={style} size={iconSize} />,
  },
};

export default navigation_data;
