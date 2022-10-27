import React, { useEffect } from "react";
import "../components/home/home.css";

import MainVideo from "../components/mainVideo/MainVideo";
import MainResume from "../components/mainResume/MainResume";
import SliderResults from "../components/sliderResults/SliderResults";
import Location from "../components/location/Location";
import Simulator from "../components/simulator/Simulator";
import TopServices from "../components/topServices/TopServices";
import { FiPlus } from "react-icons/fi";
import ImageComparison from "../components/imageComparison/ImageComparison";
import config from "../config";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid black-background p-0">
      <MainVideo />
      <MainResume />
      <div className="text-white-color font-bold text-center top-services-tittle">
        <h2 className="font-bold text-white-color fs-1">
          LO
          <FiPlus className="text-pink-color" />
          TOP
        </h2>
      </div>
      <TopServices />
      <Simulator />
      <SliderResults />
      <div className="container">
        <div className="row">
          <h2 className="text-white-color text-center py-4 fs-1">
            RESULTADOS
          </h2>
          <div className="col-lx-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 my-4">
            <ImageComparison img1={`${config.urlApi}assets/comparisons/patient-1-bf.jpg`} img2={`${config.urlApi}assets/comparisons/patient-1-af.jpg`}/>
          </div>
          <div className="col-lx-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 my-4">
            <ImageComparison img1={`${config.urlApi}assets/comparisons/patient-2-bf.jpg`} img2={`${config.urlApi}assets/comparisons/patient-2-af.jpg`}/>
          </div>
          <div className="col-lx-4 col-lg-4 col-md-4 col-sm-6 col-xs-6 my-4">
            <ImageComparison img1={`${config.urlApi}assets/comparisons/patient-3-bf.jpg`} img2={`${config.urlApi}assets/comparisons/patient-3-af.jpg`}/>
          </div>
        </div>
      </div>
      <Location />
    </div>
  );
};

export default Home;
