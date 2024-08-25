import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./NavbarStudent";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />

      <div className="footer">
        <Footer/>
      </div>
    </div>
  );
}
