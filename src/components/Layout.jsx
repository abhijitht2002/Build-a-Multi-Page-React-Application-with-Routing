import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-[#eaeaea]">
      <Navbar />
      <main className="container mx-auto bg-[#eaeaea] min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
