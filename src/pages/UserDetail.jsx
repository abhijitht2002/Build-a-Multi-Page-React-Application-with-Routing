import React from "react";
import { Link, useParams } from "react-router-dom";
import { users } from "../users";

function UserDetail() {
  const { id } = useParams();

  const user = users.find((u) => u.id === Number(id));

  return (
    <div className="">
      <h1>User Detail</h1>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>

      <Link to="/users">Go Back</Link>
    </div>
  );
}

export default UserDetail;
