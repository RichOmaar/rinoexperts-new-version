import React, { useEffect } from "react";
import "../../components/blefaroplastia/blefaroplastia.css";
import BlefaroplastiaMain from "../..//assets/img/servicios/blefaroplastia/blefaroplastia.jpg";

import RinoexpertsBenefits from "../../components/rinoexpertsBenefits/RinoexpertsBenefits";

import { FiPlus } from "react-icons/fi";

import Simulator from "../../components/simulator/Simulator";
import TopServices from "../../components/topServices/TopServices";

const Blefaroplastia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container-fluid rinoplastia-container black-background text-white-color p-0">
      <div className="row blefaro-small-devices">
        <div className="col-12">
          <img src={BlefaroplastiaMain} className="d-block w-100" alt="..." />
        </div>
        <div className="col-12 d-flex align-items-center">
          <RinoexpertsBenefits />
        </div>

        <Simulator />

        <div
          className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 px-4"
          data-aos="fade"
          data-aos-duration="2000"
        >
          <h3 className="text-center font-regular my-3">
            ¿Qué cambios son posibles con la blefaroplastia?
          </h3>
          <p className="my-2 justify-text">
            La Blefaroplastia o cirugía de parpados es quizá de los
            procedimientos estéticos más comunes entre hombres y mujeres cuyas
            edades oscilan de los 40 a los 75 años.
          </p>
          <p className="my-2 justify-text">
            Con la edad es normal notar un exceso de piel en el parpado superior
            y la formación de bolsas en el parpado inferior.
          </p>
          <p className="my-2 justify-text">
            La blefaroplastia tiene el objetivo de eliminar los excesos de piel
            y las bolsas mediante incisiones que quedan perfectamente escondidas
            en el surco sopraciliar, arriba, y debajo de las pestañas.
          </p>
        </div>
        <div className="text-white-color font-bold text-center top-services-tittle">
          <h2 className="font-bold text-white-color fs-1">
            LO
            <FiPlus className="text-pink-color" />
            TOP
          </h2>
        </div>
        <TopServices />
      </div>

      <div className="row blefaro-large-devices">
        <div className="col-6">
          <img src={BlefaroplastiaMain} className="d-block w-100" alt="..." />
        </div>
        <div className="col-6 text-white-color d-flex align-items-center">
          <RinoexpertsBenefits />
        </div>
        <Simulator />

        <div className="container py-4">
            <div
            className="col-12 col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12 px-4"
            data-aos="fade"
            data-aos-duration="2000"
            >
                <h3 className="text-center font-regular my-3">
                    ¿Qué cambios son posibles con la blefaroplastia?
                </h3>
                <p className="my-2 justify-text">
                    La Blefaroplastia o cirugía de parpados es quizá de los
                    procedimientos estéticos más comunes entre hombres y mujeres cuyas
                    edades oscilan de los 40 a los 75 años.
                </p>
                <p className="my-2 justify-text">
                    Con la edad es normal notar un exceso de piel en el parpado superior
                    y la formación de bolsas en el parpado inferior.
                </p>
                <p className="my-2 justify-text">
                    La blefaroplastia tiene el objetivo de eliminar los excesos de piel
                    y las bolsas mediante incisiones que quedan perfectamente escondidas
                    en el surco sopraciliar, arriba, y debajo de las pestañas.
                </p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Blefaroplastia;
