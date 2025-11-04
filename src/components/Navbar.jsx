import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container mx-auto flex justify-between py-4">
      <h1>Navbar</h1>

      <ul className="flex gap-8">
        <li className="hover:underline">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:underline">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:underline">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
