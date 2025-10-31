import React from "react";
import { Link } from "react-router-dom";

function Card({ user }) {
  return (
    <div className="bg-amber-50 shadow-sm rounded py-6 px-4">
      <h2>{user.name}</h2>
      <Link to={`/users/${user.id}`} className="">View Details</Link>
    </div>
  );
}

export default Card;
