import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginAdmin from "./lecturer/Logins";
import LoginStudent from "./student/student";
import LayoutLecturer from "./lecturer/Layout";
// import LayoutStudent from "./student/Layout";
import HomeAdmin from "./lecturer/Home";
import AttendanceAdmin from "./lecturer/Attendance";
import VenueAdmin from "./lecturer/CreateVenue";
import RecordAdmin from "./lecturer/Records";
import HomeStudent from "./student/HomeStudent";
// import RegisterStudent from "./student/Registration";
import RegisterStudent from "./student/Registration"

function App() {
  return (
    <BrowserRouter caseSensitive={false}>
      <Routes>
      <Route path="/admin" element={<LoginAdmin />}/>
        <Route>
       
        <Route path="/admin" element={<LayoutLecturer />}>
          <Route path="/admin/home" element={<HomeAdmin />} />
          <Route path="/admin/attendance" element={<AttendanceAdmin />} />
          <Route path="/admin/createVenue" element={<VenueAdmin />} />
          <Route path="/admin/records" element={<RecordAdmin />} />
        </Route>
        </Route>
        <Route>
        <Route path="/student" element={<LoginStudent />} />
        <Route path="/student/home" element={<HomeStudent />} />
        <Route path="/student/register" element={<RegisterStudent/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
