import React, { useEffect } from "react";
import "../../components/globalServices/globalServices.css";

import { FaArrowAltCircleRight } from "react-icons/fa";

import BlackButton from "../../components/blackButton/BlackButton";
import Procedure from "../../assets/img/servicios/ritidoplastia/ritidoplastia.png";
import RinoexpertsBenefits from "../../components/rinoexpertsBenefits/RinoexpertsBenefits";
import Simulator from "../../components/simulator/Simulator";
import RinoexpertsPlans from "../../components/rinoexpertsPlans/RinoexpertsPlans";
import Before from '../../assets/icons/before.png';
import During from "../../assets/icons/during.png";
import After from "../../assets/icons/after.png";

const Ritidoplastia = () => {
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
              alt="Ritidoplastia"
              className="img-fluid globalService__img"
            />
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="text-center">
              <h1>Levantamiento de ceja</h1>
              <p>
                El lifting de cejas endoscópico es la cirugía que busca elevar
                las cejas en aquellos pacientes que las tienen descendidas. Se
                conoce también como “lifting frontal”, ya que consigue estirar
                la frente, reduciendo sus arrugas, a la vez que eleva las cejas.
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
                Las técnicas de la ritidoplastia frontal varían dependiendo de
                los resultados que deseas. La técnica específica que el médico
                elija determinará la zona de las incisiones y las cicatrices que
                resulten de ellas.
              </p>
              <p>
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
              </ul>
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
                Después de una ritidoplastia frontal, podrían envolverte
                holgadamente la cabeza para minimizar la hinchazón. Es posible
                que te coloquen un pequeño tubo en el lugar de la incisión para
                drenar cualquier exceso de sangre o líquido.
              </p>
              <p>
                A medida que cicatricen las incisiones, podrías presentar
                picazón y entumecimiento, que probablemente disminuirán con el
                tiempo. Si las incisiones están cubiertas con vendas, es
                probable que el médico las retire en uno a tres días. Por lo
                general, las suturas se retirarán entre siete y 10 días después
                de la cirugía.
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

export default Ritidoplastia;
