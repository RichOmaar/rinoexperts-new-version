import React from "react";
import "../../components/globalServices/globalServices.css";

import { FaArrowAltCircleRight } from "react-icons/fa";

import BlackButton from "../../components/blackButton/BlackButton";
import Procedure from "../../assets/img/servicios/liftingLabios/liftingLabios.png";
import RinoexpertsBenefits from "../../components/rinoexpertsBenefits/RinoexpertsBenefits";
import Simulator from "../../components/simulator/Simulator";
import RinoexpertsPlans from "../../components/rinoexpertsPlans/RinoexpertsPlans";
import Before from '../../assets/icons/before.png';
import During from "../../assets/icons/during.png";
import After from "../../assets/icons/after.png";

const LiftLabios = () => {
  return (
    <div className="container-fluid globalService black-background text-white-color p-0">
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
            <img
              src={Procedure}
              alt="Lipopapada"
              className="img-fluid globalService__img"
            />
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="text-center">
              <h1>Lifting de labios</h1>
              <p>
                La cirugía de acortamiento de labio está indicada para recuperar
                el aspecto juvenil del labio, o para incrementar el tamaño del
                bermellón del labio.
              </p>
              <p>
                Las cicatrices son prácticamente invisibles y se esconden en los
                surcos y suelo de la nariz. Esta cirugía recupera las
                proporciones estéticas y rejuvenece los labios cuando los
                rellenos no son suficientes logrando un resultado permanente.
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
                {/* <BlackButton url={"/"} text={"Agendar cita"} /> */}
                <a href="https://wa.me/+5215532118512?text=Hola,%20deseo%20agendar%20una%20cita" className="blackButton">AGENDAR CITA</a>
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
                Requiere de una analítica de sangre y un electrocardiograma como
                para cualquier intervención quirúrgica.
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
                La operación consiste en primero dibujar la zona a incidir (que
                tiene forma de asta de toro) de manera que pasa por debajo de
                una de las alas nasales se mete por dentro de la nariz, sale,
                pasa por debajo de la columela (ósea la parte central de la
                nariz), vuelve a entrar en el orifico nasal y finalmente vuelve
                a pasar por debajo del ala nasal.
              </p>
              <p>
                Cuando hemos retirado el tejido deseado, damos puntos de sutura
                desde dentro hacia fuera en tres planos. Primero los puntos de
                sutura internos, que se quedan de manera permanente y por último
                en la parte externa suturamos con sutura intradérmica. Es decir
                usando un hilo que pasa a través de la cicatriz y sale,
                recorriendo toda la cicatriz. De esta manera cuando retiramos
                los puntos no queda cicatriz.
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
                Pueden aparecer síntomas como hematomas e hinchazón, pero son
                mínimos y en todos los casos suelen durar 48 horas. No es una
                intervención dolorosa aunque durante los primeros días es normal
                que haya dificultades para la movilización del los labios.
              </p>
              {/* <p>Después de la cirugía, podrías tener por un tiempo:</p>
              <ul>
                <li>
                  Visión borrosa debido al ungüento lubricante que se te aplicó
                  en los ojos
                </li>
                <li>Ojos llorosos</li>
                <li>Sensibilidad a la luz</li>
                <li>Visión doble</li>
                <li>Párpados entumecidos, hinchados </li>
                <li>Hinchazón y moretones similares a tener un "ojo negro"</li>
                <li>Dolor o molestia</li>
              </ul> */}
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

export default LiftLabios;
