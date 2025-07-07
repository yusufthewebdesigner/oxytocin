import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Howl } from 'howler';
import "../CSS/Developer.css";

import yusufImage from "../Resources/Yusuf.jpg";
import contactImage from "../Resources/contact.svg";
import skillImage from "../Resources/skill.svg";
import serviceImage from "../Resources/service.svg";
import yusufCV from "../Resources/Resume.pdf";
import clickSound from '../Resources/Click.m4a';

import { RiTailwindCssFill } from "react-icons/ri";
import { SiFirebase } from "react-icons/si";

const Developer = () => {
  let location = useLocation().hash;

  const [downloadText, setDownloadText] = useState("Download CV");
  const handleDownload = () => {
    let sound = new Howl({
      src: [clickSound],
      volume: 0.8,
    });
    sound.play()

    setDownloadText(<span> Downloaded <i className="fa-solid fa-check "></i> </span>);
    setTimeout(() => {
      setDownloadText("Download CV");
    }, 500);
  };

  return (
    <div className="developer">
      {/* //! Navigation Area */}
      <nav className="fixed bottom-0 flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-500 to-zinc-600 w-full h-10">
        <div className={location === "#about" ? "active" : ""}>
          <a href="#about" className="flex items-center">
            <i className="bi bi-person-circle"></i>
            <h1>About</h1>
          </a>
        </div>
        <div className={location === "#skill" ? "active" : ""}>
          <a href="#skill" className="flex items-center">
            <i className="bi bi-lightbulb-fill"></i>
            <h1>Skills</h1>
          </a>
        </div>
        <div className={location === "#service" ? "active" : ""}>
          <a href="#service" className="flex items-center">
            <i className="bi bi-gear-wide-connected"></i>
            <h1>Services</h1>
          </a>
        </div>
        <div className={location === "#contact" ? "active" : ""}>
          <a href="#contact" className="flex items-center">
            <i className="fa-solid fa-tty"></i>
            <h1>Contact</h1>
          </a>
        </div>
      </nav>
      {/* //! About Area */}
      <div id="about" className="min-h-screen ">
        <div className="intro">
          <img src={yusufImage} alt="" id="devImage" />
          <h1>Yusuf</h1>
        </div>
        <p>
          Hello there, I'm Yusuf, a full-stack web developer with a strong focus on building responsive, user-friendly websites and web applications. I specialize in modern technologies like <a href="https://html.com/" target="_blank">HTML</a>, <a href="https://www.w3schools.com/css/" target="_blank">CSS</a>, <a href="https://www.w3schools.com/js/DEFAULT.asp" target="_blank">JavaScript</a>, and frameworks such as <a href="https://react.dev/" target="_blank">React</a> and <a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a>. On the backend, I work with both relational and non-relational databases, including <a href="https://www.mysql.com/" target="_blank">MySQL</a> and <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>, to build scalable, efficient server-side logic and APIs. I enjoy solving problems through clean, efficient code and am always eager to learn new tools and techniques to improve user experience and performance.
        </p>
        <div className="CV flex sm:justify-center mt-5">
          <a href={yusufCV} download onClick={handleDownload}>  {downloadText} </a>
        </div>
      </div>
      {/* //! Skill Area */}
      <div
        id="skill"
        className="min-h-screen flex flex-col sm:flex-row sm:gap-15  md:gap-30 items-center sm:justify-center "
      >
        <img
          src={skillImage}
          id="skillImage"
          className="block mx-auto sm:mx-0 rounded-xl mb-5 sm:mb-0 w-50 sm:w-90  border border-green-700"
        />
        <div>
          <h1 className="heading">My Profound Skills</h1>
          <h2 className="subHeading">I Am Expert In</h2>
          <div className="paretItems">
            <span id="item">
              <i className="fa-brands fa-html5"></i>
              <h1>HTML</h1>
              <span className="hidden lg:inline-block text-justify mt-2">
                HTML structures web content using tags to define elements like text and images.
              </span>
            </span>
            <span id="item">
              <i className="fa-brands fa-css3"></i>
              <h1>CSS</h1>
              <span className="hidden lg:inline-block text-justify mt-2">
                CSS styles web pages by controlling layout, colors, fonts, and visual presentation.
              </span>
            </span>
            <span id="item">
              <i className="fa-brands fa-js"></i>
              <h1>JavaScript</h1>
              <span className="hidden lg:inline-block text-justify mt-2">
                JavaScript adds interactivity and dynamic behavior to websites and web applications.
              </span>
            </span>
            <span id="item">
              <RiTailwindCssFill className="reactIcon" />
              <h1>Tailwind CSS</h1>
              <span className="hidden lg:inline-block text-justify mt-2">
                Tailwind CSS is a utility-first framework for fast, customizable web design.
              </span>
            </span>
            <span id="item">
              <i className="fa-brands fa-react"></i>
              <h1>React</h1>
              <span className="hidden lg:inline-block text-justify mt-2">
                React.js builds dynamic user interfaces using components and efficient virtual DOM updates.
              </span>
            </span>
            <span id="item">
              <i className="fa-solid fa-database"></i>
              <h1>MySQL</h1>
              <span className="hidden lg:inline-block text-justify mt-2">
                MySQL is a relational database system used for storing and managing data efficiently.
              </span>
            </span>
            <span id="item">
              <i className="fa-brands fa-git-alt"></i>
              <h1>Git-GitHub</h1>
              <span className="hidden lg:inline-block text-justify mt-2">
                Git manages code versions; and GitHub hosts and collaborates on repositories online.
              </span>
            </span>
            <span id="item">
              <SiFirebase className="reactIcon" />
              <h1>Firebase</h1>
              <span className="hidden lg:inline-block text-justify mt-2">
                Git manages code versions; and GitHub hosts and collaborates on repositories online.
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* //! Service Area */}
      <div
        id="service"
        className="min-h-screen flex flex-col sm:flex-row sm:gap-15  md:gap-30 items-center sm:justify-center"
      >
        <img
          src={serviceImage}
          id="serviceImage"
          className="block mx-auto sm:mx-0 rounded-xl mb-5 sm:mb-0 w-80 sm:w-100 md:w-130  border border-green-700"
        />
        <div>
          <h1 className="heading">My Special Services</h1>
          <h2 className="subHeading">What I Offer</h2>
          <div className="paretItems">
            <span id="item">
              <i className="bi bi-columns-gap"></i>
              <h1>UI/UX Design</h1>
              <span className="hidden lg:inline-block text-justify mt-2">
                UI/UX design enhances user interaction by making digital interfaces intuitive, accessible, and
                enjoyable.
              </span>
            </span>
            <span id="item">
              <i className="fa-solid fa-code"></i>
              <h1>Web Development</h1>
              <span className="hidden lg:inline-block text-justify mt-2">
                Web development involves building and maintaining websites using coding, design, and interactive
                functionality.
              </span>
            </span>
            <span id="item">
              <i className="fa-solid fa-database"></i>
              <h1>Database Management</h1>
              <span className="hidden lg:inline-block text-justify mt-2">
                Database management organizes, stores, and retrieves data efficiently using software for structured
                information handling.
              </span>
            </span>
            <span id="item">
              <i className="fa-solid fa-search"></i>
              <h1>SEO</h1>
              <span className="hidden lg:inline-block text-justify mt-2">
                SEO improves website visibility on search engines through optimized content and structure.
              </span>
            </span>
          </div>
        </div>
      </div>
      {/* //! Contact Area */}
      <div
        id="contact"
        className="min-h-screen flex flex-col sm:flex-row sm:gap-15 md:gap-40 items-center sm:justify-center mb-10 sm:mb-0"
      >
        <img
          src={contactImage}
          id="contactImage"
          className="block mx-auto sm:mx-0 rounded-xl mb-5 sm:mb-0 w-80 sm:w-100 md:w-130 sm:h-100 border border-green-700"
        />
        <div>
          <h1 className="heading">Get in touch</h1>
          <h2 className="subHeading">I am available on</h2>
          <div className="paretItems">
            <Link to="tel:+8801959667105" id="item">
              <i className="fa-solid fa-phone"></i>
              <h1>Call</h1>
            </Link>
            <Link to="https://wa.me/+8801959667105" target="_blank" id="item">
              <i className="fa-brands fa-square-whatsapp"></i>
              <h1>WhatsApp</h1>
            </Link>
            <Link to="https://m.me/yusufsikder2002" target="_blank" id="item">
              <i className="fa-brands fa-facebook-messenger"></i>
              <h1>Messenger</h1>
            </Link>
            <Link to="https://t.me/yusufsikder" target="_blank" id="item">
              <i className="fa-brands fa-telegram"></i>
              <h1>Telegran</h1>
            </Link>
            <Link to="mailto:yusufsikder2002@gmail.com" target="_blank" id="item">
              <i className="fa-solid fa-envelope"></i>
              <h1>Mail</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
