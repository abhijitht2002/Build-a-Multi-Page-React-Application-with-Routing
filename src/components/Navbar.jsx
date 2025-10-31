import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container mx-auto flex justify-between py-4">
      <h1>Navbar</h1>

      <ul className="flex gap-8">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/users">Users</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
