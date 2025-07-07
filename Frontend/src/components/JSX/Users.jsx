import { useLoaderData } from "react-router-dom";
import "../CSS/Users.css";

import React from "react";
import User from "./User";

const Users = () => {
  let users = useLoaderData();
  // console.log(users);

  return (
    <div id="users" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
      {users.map((user) => (
        <User user={user} key={user.id}></User>
      ))}
    </div>
  );
};

export default Users;
