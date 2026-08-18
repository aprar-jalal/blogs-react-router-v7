import React from "react";
import Navbar from "../components/navbar";
import { Outlet } from "react-router";
import type { Route } from "./+types/blogDetails";
import Footer from "../components/footer";



export default function home() {
 
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>

  );
}
