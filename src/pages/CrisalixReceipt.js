import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Location from "../components/location/Location";

import "../components/crisalixReceipt/crisalixReceipt.css";
import LightButton from "../components/lightButton/LightButton";
import addUserPayment from "../services/addPayment";

const CrisalixReceipt = () => {

  useEffect(() => {
    sendPayment(window.location.search);
  }, []);

  function sendPayment(sessionPayment) {

    let formData = new FormData();
    formData.append("session", sessionPayment.split("=")[2]);
    formData.append("id_usuario", sessionPayment.split("=")[1]);

    addUserPayment(formData).then((response) => {
      let _respuesta = JSON.parse(response);
      console.log(_respuesta);
    });
  }

  return (
    <>
      <div className="container-fluid compra-realizada-container p-0">
        <Link to="/">
          <div className="exit-icon p-2 d-flex justify-content-end">
            <AiOutlineClose />
          </div>
        </Link>
        <section className="container text-center pb-4 success-container">
          <div className="check-icon d-flex justify-content-center">
            <BsCheckCircle />
          </div>
          <div className="col-12 my-3">
            <h2 className="text-white-color font-regular">¡Felicidades!</h2>
            <p className="text-white-color fs-4 px-2">
              Estás un paso más cerca de conocer tu nuevo yo
            </p>
          </div>
          <div className="card shadow">
            <div className="card-body">
              <p className="card-text">
                En un lapso no mayor a 5 días hábiles nos pondremos en contacto
                vía WhatsApp para darte seguimiento personalizado.
              </p>
            </div>
            <div className="pb-3">
              <LightButton url="/" text="Entendido" />
            </div>
          </div>
        </section>
      </div>

      <div className="black-background py-4">
        <Location />
      </div>
    </>
  );
};

export default CrisalixReceipt;
