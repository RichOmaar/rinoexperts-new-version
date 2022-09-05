import React, { useEffect } from "react";
import "../../components/globalServices/globalServices.css";

import { FaArrowAltCircleRight } from "react-icons/fa";

import BlackButton from "../../components/blackButton/BlackButton";
import Procedure from "../../assets/img/servicios/ritidoplastia/ritidoplastia.png";
import RinoexpertsBenefits from "../../components/rinoexpertsBenefits/RinoexpertsBenefits";
import Simulator from "../../components/simulator/Simulator";
import RinoexpertsPlans from "../../components/rinoexpertsPlans/RinoexpertsPlans";

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
              <h3>Antes del procedimiento</h3>
              <p>
                La blefaroplastia se suele realizar de forma ambulatoria. Es
                posible que te den medicamentos, tales como inyecciones en los
                párpados para entumecerlos y medicamentos por vía intravenosa
                para ayudar a relajarte.
              </p>
            </div>
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
                En los párpados superiores, el cirujano corta a lo largo del
                pliegue del párpado. Retira algunos excesos de piel, músculo y
                posiblemente grasa, y después cierra el corte.
              </p>
              <p>
                En el párpado inferior, el cirujano hace un corte justo debajo
                de las pestañas en el pliegue natural del ojo o dentro del
                párpado inferior. Luego, retira o redistribuye el exceso de
                grasa, músculo y piel flácida, y después cierra el corte.
              </p>
              <p>
                Si tu párpado superior cae cerca de la pupila, el cirujano puede
                hacer una blefaroplastia combinada con un procedimiento
                denominado ptosis palpebral. La ptosis palpebral está diseñada
                para levantar el párpado y retirar el exceso de piel.
              </p>
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
                Después de la cirugía, pasarás un tiempo en la sala de
                recuperación, donde los miembros del personal te controlarán por
                si surge alguna complicación. Se te dará el alta más tarde el
                mismo día para que puedas recuperarte en tu hogar.
              </p>
              <p>Después de la cirugía, podrías tener por un tiempo:</p>
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
              </ul>
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
