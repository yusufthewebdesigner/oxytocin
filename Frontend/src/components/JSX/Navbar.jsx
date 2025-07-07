import React, { useEffect, useState } from "react";
import "../CSS/Navbar.css";
import "../CSS/theme.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation().pathname;

  //!Theme
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkTheme");
      document.querySelector(".icon").style.color = "white";
    } else {
      document.body.classList.remove("darkTheme");
      document.querySelector(".icon").style.color = "black";
    }
  }, [darkMode]);

  return (
    <nav id="navBar" className="h-10 sticky top-0 z-10">
      <ul className="menu h-10 flex items-center justify-center gap-10">
        <li className={location === "/oxy13" ? "activeItem" : ""}>
          <Link to={"/oxy13"}>
            <i className="fa-solid fa-users"></i>
            <span className="hidden sm:inline">Oxy-13</span>
          </Link>
        </li>
        <li className={location.match("/users") ? "activeItem" : ""}>
          <Link to={"/users"}>
            <i className="fa-solid fa-user"></i>
            <span className="hidden sm:inline">Users</span>
          </Link>
        </li>
        <li className={location.match("/photos") ? "activeItem" : ""}>
          <Link to={"/photos"}>
            <i className="bi bi-images"></i>
            <span className="hidden sm:inline">Photos</span>
          </Link>
        </li>
        <li className={location === "/aboutDev" ? "activeItem" : ""}>
          <Link to={"/aboutDev"}>
            <i className="fa-solid fa-user-tie"></i>
            <span className="hidden sm:inline">About Dev</span>
          </Link>
        </li>
      </ul>
      <div className="icon" onClick={toggleTheme}>
        <i className={darkMode ? "fa-solid fa-sun" : "fa-solid fa-moon"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
