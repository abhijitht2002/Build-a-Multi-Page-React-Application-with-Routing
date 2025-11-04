import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container mx-auto flex justify-between py-4">
      <h1>Navbar</h1>

      <ul className="flex gap-8">
        <li className="hover:underline">
          <Link to="/Build-a-Multi-Page-React-Application-with-Routing">Home</Link>
        </li>
        <li className="hover:underline">
          <Link to="/Build-a-Multi-Page-React-Application-with-Routing/about">About</Link>
        </li>
        <li className="hover:underline">
          <Link to="/Build-a-Multi-Page-React-Application-with-Routing/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
