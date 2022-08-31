import React from "react";
import "../../components/bichectomia/bichectomia.css";

import { FaArrowAltCircleRight } from "react-icons/fa";

import BlackButton from "../../components/blackButton/BlackButton";
import Procedure from "../../assets/img/servicios/bichectomia/bichectomia-principal.png";
import RinoexpertsBenefits from "../../components/rinoexpertsBenefits/RinoexpertsBenefits";
import Simulator from "../../components/simulator/Simulator";
import RinoexpertsPlans from "../../components/rinoexpertsPlans/RinoexpertsPlans";

const Bichectomia = () => {
  return (
    <div className="container-fluid bichectomia black-background text-white-color p-0">
      <div className="container py-4">
        <div className="row">
          <div className="col-6 text-center">
            <img
              src={Procedure}
              alt="Bichectomia"
              className="img-fluid bichectomia__img"
            />
          </div>
          <div className="col-6">
            <div className="text-center">
              <h1>Bichectomia</h1>
              <p>
                La Bichectomía es la extracción de las bolsas de Bichat, estas
                bolsas son pequeños depósitos de grasa que se encuentran en las
                mejillas, por debajo de cada pómulo. Por medio de esta cirugía
                podemos definir el contorno de la cara, haciendo lucir el rostro
                redondeado y ovalado con un aspecto más afilado, dando mayor
                realce y mejor definición a los pómulos.
              </p>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <ul className="bichectomia__ul p-0">
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
      <RinoexpertsPlans />
      <div className="container">
        {/* SMALL */}
        <div className="text-center industries__small">
          <h2 className="title-light green-strong-text-color">INDUSTRIAS</h2>
          <div className="my-4 row">
            <div className="col-12 industries__card" data-aos="fade-up">
              <img
                src="https://via.placeholder.com/360"
                alt="Agricultura"
                className="img-fluid"
              />
              <h3 className="font-light white-text-color">Agricultura</h3>
            </div>
            <div className="col-12 industries__card" data-aos="fade-up">
              <img
                src="https://via.placeholder.com/360"
                alt="Agricultura"
                className="img-fluid"
              />
              <h3 className="font-light white-text-color">
                Tratamiento de aguas
              </h3>
            </div>
            <div className="col-12 industries__card" data-aos="fade-up">
              <img
                src="https://via.placeholder.com/360"
                alt="Agricultura"
                className="img-fluid"
              />
              <h3 className="font-light white-text-color">Hotelería</h3>
            </div>
            <div className="col-12 industries__card" data-aos="fade-up">
              <img
                src="https://via.placeholder.com/360"
                alt="Agricultura"
                className="img-fluid justify-content-end"
              />
              <h3 className="font-light white-text-color">Energía</h3>
            </div>
            <div className="d-flex justify-content-center" data-aos="fade-up">
              <BlackButton text={"Ver más"} url={"/"} />
            </div>
          </div>
        </div>
        {/* SMALL */}
        {/* MEDIUM */}
        <div className="text-center industries__medium">
          <h2 className="title-light green-strong-text-color">INDUSTRIAS</h2>
          <div className="my-4 row d-flex align-items-center">
            <div className="col-6 industries__card" data-aos="fade-up">
              <img
                src="https://via.placeholder.com/720"
                alt="Agricultura"
                className="img-fluid"
              />
            </div>
            <div className="col-6 px-3" data-aos="fade-up">
              <h3>Agricultura</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pretium fusce id velit ut tortor pretium viverra suspendisse
                potenti. Interdum velit laoreet id donec ultrices tincidunt arcu
                non sodales.
              </p>
            </div>
            <div className="col-6 px-3" data-aos="fade-up">
              <h3>Tratamiento de aguas</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pretium fusce id velit ut tortor pretium viverra suspendisse
                potenti. Interdum velit laoreet id donec ultrices tincidunt arcu
                non sodales.
              </p>
            </div>
            <div className="col-6 industries__card" data-aos="fade-up">
              <img
                src="https://via.placeholder.com/720"
                alt="Agricultura"
                className="img-fluid"
              />
            </div>
            <div className="col-6 industries__card" data-aos="fade-up">
              <img
                src="https://via.placeholder.com/720"
                alt="Agricultura"
                className="img-fluid"
              />
            </div>
            <div className="col-6 px-3" data-aos="fade-up">
              <h3>Hotelería</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pretium fusce id velit ut tortor pretium viverra suspendisse
                potenti. Interdum velit laoreet id donec ultrices tincidunt arcu
                non sodales.
              </p>
            </div>
            <div className="col-6 px-3" data-aos="fade-up">
              <h3>Energía</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Pretium fusce id velit ut tortor pretium viverra suspendisse
                potenti. Interdum velit laoreet id donec ultrices tincidunt arcu
                non sodales.
              </p>
            </div>
            <div className="col-6 industries__card" data-aos="fade-up">
              <img
                src="https://via.placeholder.com/720"
                alt="Agricultura"
                className="img-fluid"
              />
            </div>
            <div
              className="d-flex justify-content-center mt-4"
              data-aos="fade-up"
            >
              <BlackButton text={"Ver más"} url={"/"} />
            </div>
          </div>
        </div>
        {/* MEDIUM */}
        {/* LARGE */}
        <div className="text-center industries__large">
          <h2 className="title-light green-strong-text-color">INDUSTRIAS</h2>
          <div className="my-4 row d-flex align-items-center">
            <div className="col-6 industries__card" data-aos="fade-up">
              <img src="https://via.placeholder.com/720x360" alt="Agricultura" className="img-fluid" />
            </div>
            <div className="col-6 px-5 text-start" data-aos="fade-up">
              <div className="col-12">
                <h3>Agricultura</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pretium fusce id velit ut tortor pretium viverra suspendisse
                  potenti. Interdum velit laoreet id donec ultrices tincidunt
                  arcu non sodales.
                </p>
              </div>
            </div>
            <div className="col-6 px-5 text-end" data-aos="fade-up">
              <div className="col-12">
                <h3>Tratamiento de aguas</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pretium fusce id velit ut tortor pretium viverra suspendisse
                  potenti. Interdum velit laoreet id donec ultrices tincidunt
                  arcu non sodales.
                </p>
              </div>
            </div>
            <div className="col-6 industries__card" data-aos="fade-up">
              <img src="https://via.placeholder.com/720x360" alt="Agricultura" className="img-fluid" />
            </div>
            <div className="col-6 industries__card" data-aos="fade-up">
              <img src="https://via.placeholder.com/720x360" alt="Agricultura" className="img-fluid" />
            </div>
            <div className="col-6 px-5 text-start" data-aos="fade-up">
              <div className="col-12">
                <h3>Hotelería</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pretium fusce id velit ut tortor pretium viverra suspendisse
                  potenti. Interdum velit laoreet id donec ultrices tincidunt
                  arcu non sodales.
                </p>
              </div>
            </div>
            <div className="col-6 px-5 text-end" data-aos="fade-up">
              <div className="col-12">
                <h3>Energía</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Pretium fusce id velit ut tortor pretium viverra suspendisse
                  potenti. Interdum velit laoreet id donec ultrices tincidunt
                  arcu non sodales.
                </p>
              </div>
            </div>
            <div className="col-6 industries__card" data-aos="fade-up">
              <img src="https://via.placeholder.com/720x360" alt="Agricultura" className="img-fluid" />
            </div>
            <div
              className="d-flex justify-content-center mt-5"
              data-aos="fade-up"
            >
              <BlackButton text={"Ver más"} url={"/"} />
            </div>
          </div>
        </div>
        {/* LARGE */}
      </div>
    </div>
  );
};

export default Bichectomia;