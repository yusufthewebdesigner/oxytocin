import React from "react";
import "../CSS/User.css";
import { Link } from "react-router-dom";

const User = ({ user }) => {
  let { id, image, name } = user;
  return (
    <div id="user">
      <div className="imageContainer">
        <img src={image} />
      </div>
      <h1 className="text-center text-2xl font-bold">{name}</h1>
      <Link to={`/users/${id}`}>
        <button>See Details</button>
      </Link>
    </div>
  );
};

export default User;
