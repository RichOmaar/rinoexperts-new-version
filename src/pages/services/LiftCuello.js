import React from "react";
import "../../components/globalServices/globalServices.css";

import { FaArrowAltCircleRight } from "react-icons/fa";

import BlackButton from "../../components/blackButton/BlackButton";
import Procedure from "../../assets/img/servicios/blefaroplastia/blefaroplastia.png";
import RinoexpertsBenefits from "../../components/rinoexpertsBenefits/RinoexpertsBenefits";
import Simulator from "../../components/simulator/Simulator";
import RinoexpertsPlans from "../../components/rinoexpertsPlans/RinoexpertsPlans";
import Before from '../../assets/icons/before.png';
import During from "../../assets/icons/during.png";
import After from "../../assets/icons/after.png";

const LiftCuello = () => {
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
              <h1>Lifting de cuello</h1>
              <p>
                El estiramiento de cuello es un procedimiento estético que
                elimina el exceso de piel y grasa alrededor de la línea de la
                mandíbula para crear un cuello más definido y con aspecto más
                joven. Los resultados pueden ser a largo plazo, pero la cirugía
                de estiramiento de cuello no puede detener el proceso de
                envejecimiento.
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
                <BlackButton url={"/"} text={"Agendar cita"} />
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
              <img
                src={Before}
                alt="Agricultura"
                className="img-fluid"
              />
            </div>
            <div
              className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xl-6 px-3 my-5"
              data-aos="fade-up"
            >
              <h3>Antes del procedimiento</h3>
              <p>
                Antes de realizarte un estiramiento de cuello, el médico tendrá
                una consulta contigo para evaluar tu salud y hablar sobre tus
                objetivos y expectativas. El médico luego decidirá sobre el
                método quirúrgico que mejor se adapte a tu caso. El o ella puede
                sugerirte procedimientos adicionales, como el levantamiento de
                cejas, la cirugía de párpados o el rejuvenecimiento facial, que
                pueden ayudarte a obtener los resultados que deseas.
              </p>
            </div>
            <div
              className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 globalService__card globalService__card--specialAlignmentTop"
              data-aos="fade-up"
            >
              <img
                src={During}
                alt="Agricultura"
                className="img-fluid"
              />
            </div>
            <div
              className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xl-6 px-3 my-5"
              data-aos="fade-up"
            >
              <h3>Durante el procedimiento</h3>
              <p>
                Un estiramiento de cuello se puede realizar con sedación y
                anestesia local, donde solamente se anestesia una parte del
                cuerpo, o con anestesia general.
              </p>
              <p>
                La liposucción es el procedimiento que se usa más comúnmente. El
                cirujano realiza una pequeña incisión detrás de cada oreja y
                debajo del mentón. Un aparato especializado succiona la grasa
                desde la línea de la mandíbula y debajo del mentón. Si tienes
                una piel elástica y la única razón de tu falta de satisfacción
                con la manera en que se ve tu cuello es porque tiene grasa, la
                liposucción puede darte un cuello con más definición.
              </p>
            </div>
            <div
              className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xl-6 globalService__card globalService__card--specialAlignmentBottom"
              data-aos="fade-up"
            >
              <img
                src={During}
                alt="Agricultura"
                className="img-fluid"
              />
            </div>
            <div
              className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xl-6 globalService__card"
              data-aos="fade-up"
            >
              <img
                src={After}
                alt="Agricultura"
                className="img-fluid"
              />
            </div>
            <div
              className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xl-6 px-3 my-5"
              data-aos="fade-up"
            >
              <h3>Después del procedimiento</h3>
              <p>
                Después de una cirugía de estiramiento de cuello, es posible que
                tengas inflamación y hematomas.
              </p>
              <p>
                Puede que tengas que usar una prenda especial que comprima el
                cuello y ayude a reducir la inflamación. También tendrás que
                tener la cabeza elevada por encima del corazón y mantenerla
                derecha. No gires ni dobles el cuello.
              </p>
            </div>
            <div className="d-flex justify-content-center mt-4">
              <BlackButton text={"Agendar ahora"} url={"/"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiftCuello;
