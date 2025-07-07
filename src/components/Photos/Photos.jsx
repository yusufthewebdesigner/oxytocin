import React from "react";
import { Link } from "react-router-dom";
import "./Photos.css";

const Photos = () => {
  const photoList = ["GP01", "GP02", "GP03", "GP04", "GP05", "GP06"];

  return (
    <div className="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {photoList.map((photoId) => (
        <Link to={`/photos/${photoId}`} key={photoId}>
          <div className="imgWrapper">
            <img src={`../../../GroupPhoto/${photoId}.jpg`} className="imgLink" />
            <h1 className="imgTitle">{photoId} </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Photos;
