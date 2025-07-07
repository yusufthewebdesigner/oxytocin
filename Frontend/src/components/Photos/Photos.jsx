import { Link } from "react-router-dom";
import "./Photos.css";

const Photos = () => {
  const photoList = ["Varsity Day, 2025", "GP02", "GP03", "GP04", "GP05", "GP06"];

  return (
    <div className="p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
      {photoList.map((photoId) => (
        <Link to={`/photos/${photoId}`} key={photoId}>
          <div className="imgWrapper">
            <img src={`../../../PhotosCover/${photoId}.jpg`} className="image" />
            <h1 className="imgTitle">{photoId} </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Photos;
