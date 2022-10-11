import React from "react";
import "./crisalixProcess.css";

import step1 from "../../assets/icons/contact-form.svg";
import step2 from "../../assets/icons/upload-pictures.svg";
import step3 from "../../assets/icons/enjoy-results.svg";

import BlackButton from "../../components/blackButton/BlackButton";

const CrisalixProcess = () => {
  return (
    <div className="container-fluid black-background">
      <div className="container text-white-color">
        <div className="stepper d-flex flex-column pt-5 pb-4">
          <div className="d-flex mb-1">
            <div className="d-flex flex-column pr-4 align-items-center">
              <div className="process-circle py-2 px-3 mb-1">1</div>
              <div className="line h-100"></div>
            </div>
            <div className="row">
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 px-4">
                <h5 className="">Registra tus datos</h5>
                <p className="lead text-muted pb-3 responsive-widh">
                  Completa un sencillo formulario que nos servirá para conocerte
                  y conocer tus necesidades.
                </p>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-xs-0 text-center mb-3">
                <img
                  src={step1}
                  alt="Formulatio de contacto"
                  className="crisalix-process-icon"
                />
              </div>
            </div>
          </div>
          <div className="d-flex mb-1">
            <div className="d-flex flex-column pr-4 align-items-center">
              <div className="process-circle py-2 px-3 mb-1">2</div>
              <div className="line h-100"></div>
            </div>
            <div className="row">
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 px-4">
                <h5 className="">Comparte 3 fotos</h5>
                <p className="lead text-muted pb-3">
                  Tómate 3 fotos en diferentes ángulos. En el formulario
                  encontrarás más información sobre la posición de las fotos.
                </p>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-xs-0 text-center mb-3">
                <img
                  src={step2}
                  alt="Formulatio de contacto"
                  className="crisalix-process-icon"
                />
              </div>
            </div>
          </div>
          <div className="d-flex mb-1">
            <div className="d-flex flex-column pr-4 align-items-center">
              <div className="process-circle py-2 px-3 mb-1">3</div>
            </div>
            <div className="row">
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12 px-4">
                <h5 className="">Visualiza los resultados</h5>
                <p className="lead text-muted pb-3">
                  Te mostraremos la opción perfecta para tí con base en tus
                  datos proporcionados y el diseño de nuestros expertos.
                </p>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-0 col-xs-0 text-center mb-3">
                <img
                  src={step3}
                  alt="Formulatio de contacto"
                  className="crisalix-process-icon"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="pb-5">
          <BlackButton
            url={"/formulario-nueva-imagen"}
            text={"Ir al formulario"}
          />
        </div>
      </div>
    </div>
  );
};

export default CrisalixProcess;
