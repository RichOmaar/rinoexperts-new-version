import React, { useEffect } from "react";
import "../../components/rinoplastia/rinoplastia.css";

import { FaArrowAltCircleRight } from "react-icons/fa";

import BlackButton from "../../components/blackButton/BlackButton";
import Procedure from "../../assets/img/servicios/rinoplastia/rinoplastia.png";
import RinoexpertsBenefits from "../../components/rinoexpertsBenefits/RinoexpertsBenefits";
import Simulator from "../../components/simulator/Simulator";
import RinoexpertsPlans from "../../components/rinoexpertsPlans/RinoexpertsPlans";
import Before from "../../assets/icons/before.png";
import During from "../../assets/icons/during.png";
import After from "../../assets/icons/after.png";

const Rinoplastia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid globalService black-background text-white-color p-0">
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
            <img
              src={Procedure}
              alt="Blefaroplastia"
              className="img-fluid globalService__img"
            />
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="text-center">
              <h1>Rinoplastia</h1>
              <p>
                La rinoplastia es una cirugía en la que se modifica la forma de
                la nariz. El motivo de la rinoplastia puede ser cambiar la
                apariencia de la nariz, mejorar la respiración o ambos.
              </p>
              <p>
                También puede cambiar el tamaño, la forma o las proporciones de
                la nariz. Puede realizarse para reparar deformidades causadas
                por una lesión, corregir una anomalía congénita o mejorar
                ciertas dificultades respiratorias.
              </p>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <ul className="globalService__ul p-0">
                  <li>
                    <FaArrowAltCircleRight className="mx-2" />
                    Resultados permanentes
                  </li>
                  <li>
                    <FaArrowAltCircleRight className="mx-2" />
                    Cirugía de bajo riesgo
                  </li>
                  <li>
                    <FaArrowAltCircleRight className="mx-2" />
                    Rápida recuperación
                  </li>
                  <li>
                    <FaArrowAltCircleRight className="mx-2" />
                    Armoniza tu rostro
                  </li>
                </ul>
              </div>
              <div className="col-6 align-self-center text-center">
                <BlackButton url={"/informacion-personal"} text={"Agendar cita"} />
                {/* <a href="https://wa.me/+5215532118512?text=Hola,%20deseo%20agendar%20una%20cita" className="blackButton">AGENDAR CITA</a> */}
              </div>
            </div>
          </div>
          <RinoexpertsBenefits />
        </div>
      </div>
      <Simulator />
      <div className="container">
        <RinoexpertsPlans />
      </div>
      <div className="py-4">
        <div className="globalService">
          <h2 className="title-light green-strong-text-color text-center">
            DETALLES DEL PROCEDIMIENTO
          </h2>
          <div className="my-4 row d-flex align-items-center">
            <div
              className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xl-6 globalService__card"
              data-aos="fade-up"
            >
              <img src={Before} alt="Agricultura" className="img-fluid" />
            </div>
            <div
              className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xl-6 px-3 my-5"
              data-aos="fade-up"
            >
              <h3>Antes del procedimiento</h3>
              <p>
                Antes de programar la rinoplastia, debes reunirte con el
                cirujano para analizar los factores importantes que determinarán
                si la cirugía puede funcionar bien en tu caso. Cuando se haya
                programado la cirugía, deberás pedirle a otra persona que te
                lleve a tu casa si la cirugía es ambulatoria.
              </p>
            </div>
            <div
              className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 globalService__card globalService__card--specialAlignmentTop"
              data-aos="fade-up"
            >
              <img src={During} alt="Agricultura" className="img-fluid" />
            </div>
            <div
              className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xl-6 px-3 my-5"
              data-aos="fade-up"
            >
              <h3>Durante el procedimiento</h3>
              <p>
                La rinoplastia requiere anestesia local con sedación o anestesia
                general, según la complejidad de la cirugía y las preferencias
                del cirujano. Consulta con el médico antes de la cirugía qué
                tipo de anestesia es la más adecuada para ti.
              </p>
              <ul>
                <li>Anestesia local con sedación.</li>
                <li>Anestesia general.</li>
              </ul>
              <p>
                La rinoplastia puede realizarse dentro de la nariz o a través de
                un pequeño corte (incisión) externo en la base de la nariz,
                entre los orificios nasales. Probablemente el cirujano reajuste
                el hueso y el cartílago debajo de la piel.
              </p>
            </div>
            <div
              className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xl-6 globalService__card globalService__card--specialAlignmentBottom"
              data-aos="fade-up"
            >
              <img src={During} alt="Agricultura" className="img-fluid" />
            </div>
            <div
              className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xl-6 globalService__card"
              data-aos="fade-up"
            >
              <img src={After} alt="Agricultura" className="img-fluid" />
            </div>
            <div
              className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xl-6 px-3 my-5"
              data-aos="fade-up"
            >
              <h3>Después del procedimiento</h3>
              <p>
                Después de la cirugía, deberás permanecer en cama con la cabeza
                elevada por encima del nivel del pecho para reducir el sangrado
                y la hinchazón. La nariz puede congestionarse debido a la
                hinchazón o por las férulas colocadas dentro de la nariz durante
                la cirugía.
              </p>
              <p>
                En la mayoría de los casos, los vendajes internos permanecen en
                su lugar de uno a siete días después de la cirugía. El médico
                también pega una férula a la nariz para proporcionar protección
                y apoyo. Por lo general, se la deja en el lugar durante una
                semana.
              </p>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <BlackButton text={"Agendar ahora"} url={"/informacion-personal"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rinoplastia;
