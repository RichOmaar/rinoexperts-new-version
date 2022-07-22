import React, { useEffect } from "react";
import "../components/home/home.css";

import MainVideo from "../components/mainVideo/MainVideo";
import MainResume from '../components/mainResume/MainResume';
import SliderResults from '../components/sliderResults/SliderResults';
import Location from '../components/location/Location';
import Simulator from '../components/simulator/Simulator';

const Home = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container-fluid black-background p-0">
      <MainVideo />
      <MainResume />
      <SliderResults />
      <Simulator />
      <Location />
    </div>
  );
};

export default Home;
