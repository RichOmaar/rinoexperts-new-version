import React from "react";
import '../components/appointmentCancel/appointmentCancel.css';
import CancelIcon from "../assets/icons/cancel.svg";
import BlackButton from "../components/blackButton/BlackButton";
import Location from "../components/location/Location";

const AppointmentCancel = () => {
  return (
    <div className="appointment__cancel black-background p-5 text-white">
      <div className="container my-4">
        <div className="row">
          <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 order-0 order-xl-1 order-lg-1 order-md-0 order-sm-0 order-xs-0 align-self-center text-center aboutUs__paddingContent">
            <img
              src={CancelIcon}
              alt="Imagen de contacto"
              className="aboutUs__icon img-fluid"
            />
          </div>
          <div
            className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 order-1 order-xl-0 order-lg-0 order-md-1 order-sm-1 order-xs-1 align-self-center aboutUs__paddingContent"
            data-aos="fade-up"
          >
            <h2 className="aboutUs__questions--title font-bold">
              Cita cancelada
            </h2>
            <p className="text-muted font-light">
              Parece que has decidido no agendar tu cita. No te preocupes, recuerda que puedes volver a realizar el proceso nuevamente cuando lo desees.
            </p>
            <div className="mt-5 aboutUs__contact" data-aos="fade-up">
                <BlackButton text="Agendar ahora" url="/servicios" />
            </div>
          </div>
        </div>
      </div>
      <hr className="aboutUs__hr" />
      <Location/>
    </div>
  );
};

export default AppointmentCancel;
