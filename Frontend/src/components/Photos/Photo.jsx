import { useLocation, useParams } from "react-router-dom";

const Photo = () => {
  let { photoId } = useParams()

  return (
    <div>
      <div className={photoId == 'Varsity Day, 2025' ? 'block' : 'hidden'}>
        <h1>This section is for {photoId}.</h1>
      </div>
    </div >
  );
};

export default Photo;
