import React, { use } from "react";
import { Link } from "react-router-dom";
import { useLoaderData, useLocation } from "react-router-dom";
import "../CSS/UserDetails.css";
// ! Using real api from website.
const UserDetails = () => {
  let users = useLoaderData();
  // console.log(users);

  // prettier-ignore
  let { id, registration, session, name, image, dob, bloodGroup, phone, email, fbUserName, tgUserName, district, result, } = users;

  let dateOfBirth = dob
    ? new Date(dob).toLocaleDateString("en-GB") // Outputs DD/MM/YYYY
    : null;

  return (
    <div className="parent flex flex-col sm:flex-row justify-center gap-5">
      <div className="basic">
        <div className="intro">
          <div className="imageContainer">
            <img src={image} />
          </div>
          <p className="text-center font-bold">ID: {id}</p>
          <h1 className="text-center text-2xl font-bold">{name}</h1>
          <div className="info mt-5">
            <h1 className="underline decoration-double font-bold">Basic Information</h1>
            <table>
              <tbody>
                <tr>
                  <td className="block">Registration No.: {registration}</td>
                  <td className="block"> Session: {session}</td>
                  <td className="block"> Date of Birth: {dateOfBirth}</td>
                  <td className="block"> Bloog Group: {bloodGroup}</td>
                  <td className="block"> District: {district}</td>
                  <td className="block"> Contact: {phone}</td>
                  <td className="block"> E-mail: {email}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="result mx-auto max-w-[420px] sm:max-w-fit">
          <h1 className="font-semibold text-center mt-6">Result</h1>
          <table>
            <thead>
              <tr>
                <th className="font-semibold">Y-S</th>
                <th>1-1</th>
                <th>1-2</th>
                <th>2-1</th>
                <th>2-2</th>
                <th>3-1</th>
                <th>3-2</th>
                <th>4-1</th>
                <th>4-2</th>
                <th>5-1</th>
                <th>5-2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-semibold">CGPA</td>
                <td>{result["1-1"] != null ? result["1-1"] : "N/P"}</td>
                <td>{result["1-2"] != null ? result["1-2"] : "N/P"}</td>
                <td>{result["2-1"] != null ? result["2-1"] : "N/P"}</td>
                <td>{result["2-2"] != null ? result["2-2"] : "N/P"}</td>
                <td>{result["3-1"] != null ? result["3-1"] : "N/P"}</td>
                <td>{result["3-2"] != null ? result["3-2"] : "N/P"}</td>
                <td>{result["4-1"] != null ? result["4-1"] : "N/P"}</td>
                <td>{result["4-2"] != null ? result["4-2"] : "N/P"}</td>
                <td>{result["5-1"] != null ? result["5-1"] : "N/P"}</td>
                <td>{result["5-2"] != null ? result["5-2"] : "N/P"}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="contact w-full max-w-[400px] flex flex-col sm:justify-end mb-[50px]">
        <h1 className="underline decoration-double font-bold">Contact</h1>
        <div className="contactWay grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-2 sm:gap-5 mt-2 ">
          <Link to={`tel:${phone}`} id="item">
            <i className="fa-solid fa-phone"></i>
            <h1>Call</h1>
          </Link>
          <Link to={`https://wa.me/${phone}`} target="_blank" id="item">
            <i className="fa-brands fa-square-whatsapp"></i>
            <h1>WhatsApp</h1>
          </Link>
          <Link to={`https://m.me/${fbUserName}`} target="_blank" id="item">
            <i className="fa-brands fa-facebook-messenger"></i>
            <h1>Messenger</h1>
          </Link>
          <Link to={`https://t.me/${tgUserName}`} target="_blank" id="item">
            <i className="fa-brands fa-telegram"></i>
            <h1>Telegran</h1>
          </Link>
          <Link to={`mailto:${email}`} target="_blank" id="item">
            <i className="fa-solid fa-envelope"></i>
            <h1>Mail</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
