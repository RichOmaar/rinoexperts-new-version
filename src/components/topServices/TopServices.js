import React from "react";
import "./topServices.css";

import { Link } from "react-router-dom";

import OwlCarousel from "react-owl-carousel";
import LightButton from "../lightButton/LightButton";

const TopServices = () => {
  const responsive = {
    0: {
      items: 3,
      autoWidth: true,
    },
    576: {
      items: 3,
      autoWidth: true,
    },
    768: {
      items: 2,
    },
    992: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  };

  return (
    <div className="slider-result-container black-background">
      <OwlCarousel
        className="owl-theme"
        items="3"
        margin={20}
        autoplay={true}
        loop
        lazyLoad={true}
        dots={true}
        touchDrag={true}
        animateIn={true}
        center={true}
        nav={true}
        responsive={responsive}
      >
        <div className="item banner-top-service-one text-center">
          <div className="row">
            <div className="col-12 py-5">
              <h2 className="font-bold text-white-color fs-1">RINOPLASTIA</h2>
              <h3 className="text-white-color">
                <LightButton text={'Ver más'} url={'/servicios/rinoplastia'} />
              </h3>
            </div>
            <div className="col-12 text-center"></div>
          </div>
        </div>

        <div className="item banner-top-service-two text-center">
          <div className="row">
            <div className="col-12 py-5">
              <h2 className="font-bold text-white-color fs-1">BICHECTOMIA</h2>
              <h3 className="text-white-color">
                <LightButton text={'Ver más'} url={'/servicios/bichectomia'} />
              </h3>
            </div>
            <div className="col-12 text-center"></div>
          </div>
        </div>

        <div className="item banner-top-service-three text-center">
          <div className="row">
            <div className="col-12 py-5">
              <h2 className="font-bold text-white-color fs-1">MENTOPLASTIA</h2>
              <h3 className="text-white-color">
                <LightButton text={'Ver más'} url={'/servicios/mentoplastia'} />
              </h3>
            </div>
            <div className="col-12 text-center"></div>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
};

export default TopServices;
