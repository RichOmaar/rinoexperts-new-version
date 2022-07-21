import React, { useEffect } from "react";
import "../../components/servicios/servicios.css";

import TopServices from "../../components/topServices/TopServices";
import Simulador from "../../components/simulator/Simulator";

import { FiPlus } from "react-icons/fi";


const Servicios = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="container-fluid black-background servicios-main-container">
      <div className="row">
        <div className="col-12 banner-services-container text-center">
          <h2 className="font-bold text-white-color py-2 fs-1">
            PROCEDIMIENTOS
          </h2>
          <h3 className="text-white-color py-3">
            Tu salud es lo más importante para nosotros.
          </h3>
        </div>

        <div className="text-white-color font-bold text-center top-services-tittle">
          <h2 className="font-bold text-white-color fs-1">
            LO
            <FiPlus className="text-pink-color" />
            TOP
          </h2>
        </div>

        <TopServices />

        <div className="col-12 text-white-color font-bold text-center top-services-tittle">
          <h2 className="font-bold text-white-color fs-1">TODOS</h2>
        </div>
        {/* Moviles */}
        <div className="col-12 text-white-color font-bold text-center top-services-tittle hide-not-mobile py-3">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  RINOPLASTIA
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                    La rinoplastia es la cirugía que modifica la forma de la
                    nariz, y es uno de los procedimientos quirúrgicos más
                    frecuentemente realizados en cirugía plástica.
                    <br />
                    <br />
                    Corrige los problemas congénitos, los traumatismos y algunos
                    problemas respiratorios.
                  </p>
                  <div className="text-center py-3">
                    <button className="see-more-button">Ver más</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  RINOMODELACIÓN
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                    Consiste en un tratamiento que permite hacer una
                    remodelación de la nariz sin la necesidad de realizar una
                    cirugía o una rinoplastia mínimamente invasiva.
                    <br />
                    <br />
                    El proceso de la rinomodelación no dura más de media o tres
                    cuartos de hora, no requiere hospitalización y necesita
                    anestesia local.
                  </p>
                  <div className="text-center py-3">
                    <button className="see-more-button">Ver más</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  BLEFAROPLASTIA
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                    La blefaroplastia, o cirugía de ojeras, es un procedimiento
                    quirúrgico destinado a corregir los defectos de los
                    párpados, como el descuelgue y exceso de piel o la aparición
                    de bolsas.
                  </p>
                  <div className="text-center py-3">
                    <button className="see-more-button">Ver más</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  BICHECTOMIA
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                    Es una cirugía en donde se hace una incisión aproximadamente
                    de 1 cm por dentro de la boca, se busca el tejido graso
                    encapsulado (bolsas de Bichat) y se retiran para mejorar los
                    rasgos faciales. Creando una ilusión óptica de tener una
                    cara más alargada y delgada mejorando el aspecto estético.
                  </p>
                  <div className="text-center py-3">
                    <button className="see-more-button">Ver más</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  MENTOPLASTIA
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                    La mentoplastia, aumento del mentón o genioplastia es una
                    intervención quirúrgica que tiene como objetivo modificar el
                    tamaño del mentón para lograr un rostro más proporcionado y
                    atractivo, corrigiendo asimetrías faciales congénitas o
                    provocadas por algún accidente.
                  </p>
                  <p>La técnica se puede realizar de diversas formas:</p>
                  <ul>
                    <li>Mediante la incorporación de un implante.</li>
                    <li>
                      Moviendo una parte del hueso hacia la parte interior.
                    </li>
                    <li>
                      Eliminando parte del hueso y reconstruyendo la zona.
                    </li>
                  </ul>
                  <div className="text-center py-3">
                    <button className="see-more-button">Ver más</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  LIPOPAPADA
                </button>
              </h2>
              <div
                id="collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                    La liposucción de papada es la operación de cirugía estética
                    facial elegida para la reducción de papada y consiste en
                    eliminar mediante aspiración el exceso de la grasa
                    localizada del cuello remodelando la zona.
                  </p>
                  <div className="text-center py-3">
                    <button className="see-more-button">Ver más</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Desktop */}
        <div className="col-1 col-xl-1 col-lg-1 col-md-0 hide-on-mobile"></div>
        <div className="col-5 col-xl-5 col-lg-5 col-md-6 text-white-color font-bold text-center top-services-tittle hide-on-mobile py-3">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="false"
                  aria-controls="collapseOne"
                >
                  RINOPLASTIA
                </button>
              </h2>
              <div
                id="collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                    La rinoplastia es la cirugía que modifica la forma de la
                    nariz, y es uno de los procedimientos quirúrgicos más
                    frecuentemente realizados en cirugía plástica.
                    <br />
                    <br />
                    Corrige los problemas congénitos, los traumatismos y algunos
                    problemas respiratorios.
                  </p>
                  <div className="text-center py-3">
                    <button className="see-more-button">Ver más</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  RINOMODELACIÓN
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                    Consiste en un tratamiento que permite hacer una
                    remodelación de la nariz sin la necesidad de realizar una
                    cirugía o una rinoplastia mínimamente invasiva.
                    <br />
                    <br />
                    El proceso de la rinomodelación no dura más de media o tres
                    cuartos de hora, no requiere hospitalización y necesita
                    anestesia local.
                  </p>
                  <div className="text-center py-3">
                    <button className="see-more-button">Ver más</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  BLEFAROPLASTIA
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                    La blefaroplastia, o cirugía de ojeras, es un procedimiento
                    quirúrgico destinado a corregir los defectos de los
                    párpados, como el descuelgue y exceso de piel o la aparición
                    de bolsas.
                  </p>
                  <div className="text-center py-3">
                    <button className="see-more-button">Ver más</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 col-xl-5 col-lg-5 col-md-6 text-white-color font-bold text-center top-services-tittle hide-on-mobile py-3">
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  BICHECTOMIA
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse"
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                    Es una cirugía en donde se hace una incisión aproximadamente
                    de 1 cm por dentro de la boca, se busca el tejido graso
                    encapsulado (bolsas de Bichat) y se retiran para mejorar los
                    rasgos faciales. Creando una ilusión óptica de tener una
                    cara más alargada y delgada mejorando el aspecto estético.
                  </p>
                  <div className="text-center py-3">
                    <button className="see-more-button">Ver más</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingFive">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  MENTOPLASTIA
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                    La mentoplastia, aumento del mentón o genioplastia es una
                    intervención quirúrgica que tiene como objetivo modificar el
                    tamaño del mentón para lograr un rostro más proporcionado y
                    atractivo, corrigiendo asimetrías faciales congénitas o
                    provocadas por algún accidente.
                  </p>
                  <p>La técnica se puede realizar de diversas formas:</p>
                  <ul>
                    <li>Mediante la incorporación de un implante.</li>
                    <li>
                      Moviendo una parte del hueso hacia la parte interior.
                    </li>
                    <li>
                      Eliminando parte del hueso y reconstruyendo la zona.
                    </li>
                  </ul>
                  <div className="text-center py-3">
                    <button className="see-more-button">Ver más</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSix">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  LIPOPAPADA
                </button>
              </h2>
              <div
                id="collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                    La liposucción de papada es la operación de cirugía estética
                    facial elegida para la reducción de papada y consiste en
                    eliminar mediante aspiración el exceso de la grasa
                    localizada del cuello remodelando la zona.
                  </p>
                  <div className="text-center py-3">
                    <button className="see-more-button">Ver más</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 col-xl-1 col-lg-1 col-md-0 hide-on-mobile"></div>

        <Simulador />
        
      </div>
    </div>
  );
};

export default Servicios;
