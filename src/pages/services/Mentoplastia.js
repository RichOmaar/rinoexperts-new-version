import React from "react";
import "../../components/globalServices/globalServices.css";

import { FaArrowAltCircleRight } from "react-icons/fa";

import BlackButton from "../../components/blackButton/BlackButton";
import Procedure from "../../assets/img/servicios/mentoplastia/mentoplastia.png";
import RinoexpertsBenefits from "../../components/rinoexpertsBenefits/RinoexpertsBenefits";
import Simulator from "../../components/simulator/Simulator";
import RinoexpertsPlans from "../../components/rinoexpertsPlans/RinoexpertsPlans";

const Mentoplastia = () => {
  return (
    <div className="container-fluid globalService black-background text-white-color p-0">
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
            <img
              src={Procedure}
              alt="Ritidoplastia"
              className="img-fluid globalService__img"
            />
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="text-center">
              <h1>Mentoplastia</h1>
              <p>
                Es una cirugía para reformar o mejorar el tamaño de la barbilla.
                Se puede realizar ya sea insertando un implante o moviendo o
                reformando los huesos de la mandíbula.
              </p>
              <p>
                El aumento del mentón se realiza principalmente para equilibrar
                la apariencia de la cara, haciendo el mentón más largo o más
                grande comparado con la nariz. Los mejores candidatos para el
                aumento del mentón son las personas con barbillas pequeñas o
                retraídas (microgenia).
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
            {/* <div
              className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xl-6 globalService__card"
              data-aos="fade-up"
            >
              <img
                src="https://via.placeholder.com/720x360"
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
                La blefaroplastia se suele realizar de forma ambulatoria. Es
                posible que te den medicamentos, tales como inyecciones en los
                párpados para entumecerlos y medicamentos por vía intravenosa
                para ayudar a relajarte.
              </p>
            </div> */}
            <div
              className="col-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xl-12 globalService__card globalService__card--specialAlignmentTop"
              data-aos="fade-up"
            >
              <img
                src="https://via.placeholder.com/720x360"
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
                La cirugía se puede llevar a cabo en el consultorio del
                cirujano, en un hospital o en un centro médico de atención
                ambulatoria. Es probable que a usted le tomen radiografías de la
                cara y el mentón. El cirujano las utilizará para determinar qué
                parte del mentón se va a operar.
              </p>
              {/* <p>
                Es posible que el médico utilice una de las siguientes técnicas:
              </p>
              <ul className="globalService__ul">
                <li>
                  <FaArrowAltCircleRight /> Ritidoplastia frontal por
                  endoscopia.
                </li>
                <li>
                  <FaArrowAltCircleRight /> Ritidoplastia frontal coronal.
                </li>
                <li>
                  <FaArrowAltCircleRight /> Ritidoplastia frontal en la línea de
                  nacimiento del cabello.
                </li>
              </ul> */}
            </div>
            <div
              className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xl-6 globalService__card globalService__card--specialAlignmentBottom"
              data-aos="fade-up"
            >
              <img
                src="https://via.placeholder.com/720x360"
                alt="Agricultura"
                className="img-fluid"
              />
            </div>
            <div
              className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xl-6 globalService__card"
              data-aos="fade-up"
            >
              <img
                src="https://via.placeholder.com/720x360"
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
                Puede sentir algo de entumecimiento en el mentón hasta por 3
                meses y una sensación de estiramiento alrededor de la barbilla
                durante 1 semana. La mayor parte de la hinchazón habrá
                desaparecido hacia las 6 semanas, según el tipo de procedimiento
                que haya tenido.
              </p>
              <p>
                Probablemente se retirará el vendaje externo al cabo de una
                semana después de la cirugía. Le solicitaremos igualmente que
                lleve puesto un dispositivo ortopédico mientras esté durmiendo
                durante 4 a 6 semanas.
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

export default Mentoplastia;
