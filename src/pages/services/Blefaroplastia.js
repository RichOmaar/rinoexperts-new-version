import React, { useEffect } from "react";
import "../../components/blefaroplastia/blefaroplastia.css";

import { FaArrowAltCircleRight } from "react-icons/fa";

import BlackButton from "../../components/blackButton/BlackButton";
import Procedure from "../../assets/img/servicios/blefaroplastia/blefaroplastia.png";
import RinoexpertsBenefits from "../../components/rinoexpertsBenefits/RinoexpertsBenefits";
import Simulator from "../../components/simulator/Simulator";
import RinoexpertsPlans from "../../components/rinoexpertsPlans/RinoexpertsPlans";

const Blefaroplastia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid blefaroplastia black-background text-white-color p-0">
      <div className="container py-4">
        <div className="row">
          <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center">
            <img
              src={Procedure}
              alt="Blefaroplastia"
              className="img-fluid blefaroplastia__img"
            />
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
            <div className="text-center">
              <h1>Blefaroplastia</h1>
              <p>
                La blefaroplastia es un tipo de cirugía que extirpa el exceso de
                piel de los párpados. A medida que envejeces, los párpados se
                estiran y los músculos que los sostienen se debilitan. En
                consecuencia, se puede acumular un exceso de grasa arriba y
                abajo de los párpados. Esto provoca cejas flácidas, párpados
                superiores caídos y bolsas debajo de los ojos.
              </p>
            </div>
            <div className="row mt-4">
              <div className="col-6">
                <ul className="blefaroplastia__ul p-0">
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
      {/* <div className="container">
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
      </div> */}
    </div>
  );
};

export default Blefaroplastia;
