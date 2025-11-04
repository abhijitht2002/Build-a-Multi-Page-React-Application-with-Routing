import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to the User Info Portal
      </h1>

      <p className="text-gray-600 max-w-lg mb-8 text-lg">
        Explore user profiles and view detailed information easily. This
        platform allows you to browse users and learn more about them with just
        one click.
      </p>

      <div className="flex gap-4">
        <Link
          to="/users"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition"
        >
          View Users
        </Link>

        <Link
          to="/about"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition"
        >
          About Us
        </Link>
      </div>
    </div>
  );
}

export default Home;
