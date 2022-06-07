import React from "react";
import "../components/home/home.css";

import MainVideo from "../components/mainVideo/MainVideo";
import MainResume from '../components/mainResume/MainResume';
import SliderResults from '../components/sliderResults/SliderResults';
import Location from '../components/location/Location';

const Home = () => {
  // useEffect(() => {
  //   // docuem
  // }, [])

  return (
    <div className="container-fluid black-background p-0">
      <MainVideo />
      <MainResume />
      <SliderResults />
      <Location />
    </div>
  );
};

export default Home;
