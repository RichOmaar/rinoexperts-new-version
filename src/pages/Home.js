import React, { useEffect } from "react";
import "../components/home/home.css";

import MainVideo from "../components/mainVideo/MainVideo";
import MainResume from "../components/mainResume/MainResume";
import SliderResults from "../components/sliderResults/SliderResults";
import Location from "../components/location/Location";
import Simulator from "../components/simulator/Simulator";
import TopServices from "../components/topServices/TopServices";
import { FiPlus } from "react-icons/fi";

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
      <Location />
    </div>
  );
};

export default Home;
