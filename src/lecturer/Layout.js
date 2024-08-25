import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavbarLecturer";
import Footer from "../components/Footer";
import "./Layout.css";

export default function Layout() {
  return (
    <div className="layout">
      <Navbar className="layoutNavbar" />
      <Outlet className="layoutOutlet" />
      <Footer className="footers" />
    </div>
  );
}
