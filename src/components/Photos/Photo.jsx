import React from "react";
import { useParams } from "react-router-dom";

const Photo = () => {
  const { photoId } = useParams(); // Get GP01, GP02, etc. from the URL

  return (
    <div>
      {photoId === "GP01" && (
        <div className="GP01">
          <h1>Hello I am GP01</h1>
        </div>
      )}

      {photoId === "GP02" && (
        <div className="GP02">
          <h1>Hello I am GP02</h1>
        </div>
      )}
    </div>
  );
};

export default Photo;
