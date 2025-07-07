import React, { useEffect } from "react";
import "../CSS/Slider.css";
//! Importing typing effect.
import Typed from "typed.js";

//! Import Swiper and required modules.
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

//! Import Swiper styles.
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SliderPara from "./SliderPara";

const Slider = () => {
  useEffect(() => {
    //! Typing effect.
    const typed = new Typed("#typings", {
      strings: ["OXYTOCIN-13"],
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
    });

    //! Swiper initialization.
    const swiper = new Swiper(".swiper", {
      modules: [Navigation, Pagination, Autoplay],
      autoplay: { delay: 3000, disableOnInteraction: false },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    return () => {
      // Cleanup
      typed.destroy();
      swiper.destroy(); // You can still destroy it since it's scoped
    };
  }, []);

  return (
    <div className="container block my-2">
      <h1>
        Hello, we are <span id="typings"></span>
      </h1>
      <div className="slider">
        <div className="swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src="https://i.ibb.co.com/Rfq235c/GP01.jpg" />
            </div>
            <div className="swiper-slide">
              <img src="https://i.ibb.co.com/7N27Ppqx/GP02.jpg" />
            </div>
            <div className="swiper-slide">
              <img src="https://i.ibb.co.com/SDDZ1Cp4/GP03.jpg" />
            </div>
            <div className="swiper-slide">
              <img src="https://i.ibb.co.com/dJ3Nmrjp/GP04.jpg" />
            </div>
            <div className="swiper-slide">
              <img src="https://i.ibb.co.com/SwJJGJKd/GP05.jpg" />
            </div>
            <div className="swiper-slide">
              <img src="https://i.ibb.co.com/WCSX11b/GP06.jpg" />
            </div>
            <div className="swiper-slide">
              <img src="https://i.ibb.co.com/Xx7GnzFy/GP07.jpg" />
            </div>
            <div className="swiper-slide">
              <img src="https://i.ibb.co.com/HL3kKRMh/GP08.jpg" />
            </div>
          </div>
          {/* <div className="swiper-pagination"></div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div> */}
        </div>
        <SliderPara />
      </div>
    </div>
  );
};

export default Slider;
