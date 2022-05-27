import React, { useEffect } from "react";
import "../components/home/home.css";

import MainVideo from "../components/mainVideo/MainVideo";
// import MainResume from '../components/mainResume/MainResume';
// import SliderResults from '../components/sliderResults/SliderResults';
// import Location from '../components/location/Location';

const Home = () => {
  // useEffect(() => {
  //   // docuem
  // }, [])

  return (
    <div class="container-fluid home-container p-0">
      <MainVideo />
      {/* <MainResume /> */}
      {/* <SliderResults /> */}
      {/* <Location /> */}
      <p>Hola mundo</p>
    </div>
  );
};

export default Home;
