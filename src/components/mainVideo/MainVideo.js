import React from "react";
import "./mainVideo.css";

// import BackgroundVideo from '../../assets/video/opcion-1-rinexperts.mp4';
import BackgroundVideo from '../../assets/video/opcion-2-rinoexperts.mp4';

const MainVideo = () => {
  return (
    <div className="container-fluid video-container p-0 animate__animated animate__fadeIn">
      <div className="wrapper">
        <video
          src={BackgroundVideo}
          className="video-home"
          type="video/mp4"
          loop={true}
          autoPlay="autoplay"
          muted
        />
      </div>
      {/* <img src="https://via.placeholder.com/1080x600" alt="Snow" style={{width: '100%'}} /> */}
      <div className="centered">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <span className="video-tittle">
              Expertos en cosmética facial y rinoplastias
            </span>
            <p className="text-pink-color font-bold fs-3 py-3">
              Cirugía de nariz, rostro y cuello. Rinoplastia estética,
              funcional, reparadora y revisional
            </p>
            <button className="video-button">AGENDAR CITA</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVideo;
