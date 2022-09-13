import React, { useEffect } from "react";
import "../../components/globalServices/globalServices.css";

import { FaArrowAltCircleRight } from "react-icons/fa";

import BlackButton from "../../components/blackButton/BlackButton";
import Procedure from "../../assets/img/servicios/ritidectomia/ritidectomia.png";
import RinoexpertsBenefits from "../../components/rinoexpertsBenefits/RinoexpertsBenefits";
import Simulator from "../../components/simulator/Simulator";
import RinoexpertsPlans from "../../components/rinoexpertsPlans/RinoexpertsPlans";
import Before from '../../assets/icons/before.png';
import During from "../../assets/icons/during.png";
import After from "../../assets/icons/after.png";

const Ritidectomia = () => {
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
              <h1>Ritidectomia</h1>
              <p>
                Un estiramiento facial (ritidectomía) es un procedimiento
                quirúrgico estético para darle un aspecto más joven al rostro.
                El procedimiento puede reducir la flacidez o los pliegues de
                piel en los pómulos y la línea mandibular, y otros cambios en la
                forma del rostro que se producen con la edad.
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
                A veces, el procedimiento se realiza con sedantes y anestesia
                local, que insensibiliza solo una parte de tu cuerpo. En otros
                casos, se recomienda la anestesia general, que te deja
                inconsciente.
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
                En general, en la ritidoplastia facial se eleva la piel y se
                tensan los tejidos y músculos subyacentes. Es posible que se
                esculpa, se elimine o se redistribuya la grasa del rostro y del
                cuello. Luego, la piel del rostro se vuelve a colocar sobre los
                contornos recientemente reposicionados del rostro, se elimina la
                piel excedente y se cose la herida o se la cierra con cinta.
              </p>
              <p>
                Realizar la ritidoplastia facial generalmente toma entre dos y
                cuatro horas, pero podría demorar más si se realizan otros
                procedimientos estéticos al mismo tiempo.
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
                Después de un estiramiento facial, puedes manifestar lo
                siguiente:
              </p>
              <ul className="globalService__ul">
                <li>
                  <FaArrowAltCircleRight className="mx-2" /> Dolor de leve a
                  moderado
                </li>
                <li>
                  <FaArrowAltCircleRight className="mx-2" /> Secreción de las
                  incisiones
                </li>
                <li>
                  <FaArrowAltCircleRight className="mx-2" /> Hinchazón
                </li>
                <li>
                  <FaArrowAltCircleRight className="mx-2" /> Hematomas
                </li>
                <li>
                  <FaArrowAltCircleRight className="mx-2" /> Entumecimiento
                </li>
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

export default Ritidectomia;
