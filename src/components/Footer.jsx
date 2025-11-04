import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Logo / Title */}
        <h2 className="text-lg font-semibold tracking-wide">
          UserInfo<span className="text-blue-400">App</span>
        </h2>

        {/* Links */}
        <div className="flex gap-6 text-sm">
          <Link to="/" className="hover:text-white transition">Home</Link>
          <Link to="/about" className="hover:text-white transition">About</Link>
          <Link to="/users" className="hover:text-white transition">Users</Link>
        </div>

        {/* Copyright */}
        <p className="text-sm">
          © user. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer