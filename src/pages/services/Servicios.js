import React, { useEffect } from "react";
import "../../components/servicios/servicios.css";

import TopServices from "../../components/topServices/TopServices";
import Simulator from "../../components/simulator/Simulator";

import { FiPlus } from "react-icons/fi";

import BlackButton from "../../components/blackButton/BlackButton";

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
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
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
                    <BlackButton text={'VER MÁS'} url={'/servicios/rinoplastia'} />
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
                  POMULOPLASTIA
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
                    La cirugía estética de pómulos ( o pomuloplastia), consiste en el aumento de pómulos, mediante la introducción de material sintético (silicona sólida, Gore-tex, etc…)o con osteotomías, con la inyeccion de grasa propia, o con la extraer la grasa bucal o bola de Bichat, lo cual ocasiona un descenso de la mejilla y, por lo tanto, una acentuación del pómulo.
                  </p>
                  <div className="text-center py-3">
                    <BlackButton text={'VER MÁS'} url={'/servicios/pomuloplastia'} />
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
                    <BlackButton text={'VER MÁS'} url={'/servicios/blefaroplastia'} />
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
                  RITIDECTOMIA
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
                    Es un procedimiento quirúrgico para mejorar los signos visibles de envejecimiento de la cara y el cuello.
                    <br />
                    <br />
                    Conforme el individuo envejece, la piel, la grasa y los músculos faciales, que se encuentran fijos a los huesos de la cara a través de ligamentos, tienden a descender por efecto de la gravedad debido a una disminución en el tono de los mismos.
                  </p>
                  <div className="text-center py-3">
                    <BlackButton text={'VER MÁS'} url={'/servicios/blefaroplastia'} />
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
                  LEVANTAMIENTO DE CEJAS
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
                    La ritidoplastia frontal levanta tejido blando y la piel de la frente y el ceño, y mejora la apariencia de estos y de la zona alrededor de los ojos.
                    <br />
                    <br />
                    Se puede realizar solo la ritidoplastia frontal o junto con otros procedimientos para el rostro, como una cirugía de párpado (ritidoplastia de párpado) o un estiramiento facial.
                  </p>
                  <div className="text-center py-3">
                    <BlackButton text={'VER MÁS'} url={'/servicios/levantamiento-de-cejas'} />
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
                  BICHECTOMIA
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
                    Es una cirugía en donde se hace una incisión aproximadamente
                    de 1 cm por dentro de la boca, se busca el tejido graso
                    encapsulado (bolsas de Bichat) y se retiran para mejorar los
                    rasgos faciales. Creando una ilusión óptica de tener una
                    cara más alargada y delgada mejorando el aspecto estético.
                  </p>
                  <div className="text-center py-3">
                    <BlackButton text={'VER MÁS'} url={'/servicios/bichectomia'} />
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSeven">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  MENTOPLASTIA
                </button>
              </h2>
              <div
                id="collapseSeven"
                class="accordion-collapse collapse"
                aria-labelledby="headingSeven"
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
                    <BlackButton text={'VER MÁS'} url={'/servicios/mentoplastia'} />
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingEight">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  LIPOPAPADA
                </button>
              </h2>
              <div
                id="collapseEight"
                class="accordion-collapse collapse"
                aria-labelledby="headingEight"
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
                    <BlackButton text={'VER MÁS'} url={'/servicios/lipopapada'} />
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingNine">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  LIFT DE LABIOS
                </button>
              </h2>
              <div
                id="collapseNine"
                class="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                  Consiste en acortar la longitud vertical del labio superior y elevar el labio subnasal mediante la eliminación de tejido. Adicionalmente, la paciente puede potenciar el arco de Cupido.
                  </p>
                  <div className="text-center py-3">
                    <BlackButton text={'VER MÁS'} url={'/servicios/lift-de-labios'} />
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTen">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  LIFT DE CUELLO
                </button>
              </h2>
              <div
                id="collapseTen"
                class="accordion-collapse collapse"
                aria-labelledby="headingTen"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                  El estiramiento de cuello es un procedimiento estético que elimina el exceso de piel y grasa alrededor de la línea de la mandíbula para crear un cuello más definido y con aspecto más joven. Los resultados pueden ser a largo plazo, pero la cirugía de estiramiento de cuello no puede detener el proceso de envejecimiento.
                  </p>
                  <div className="text-center py-3">
                    <BlackButton text={'VER MÁS'} url={'/servicios/lift-de-cuello'} />
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
                  class="accordion-button collapsed"
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
                class="accordion-collapse collapse"
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
                    <BlackButton text={'VER MÁS'} url={'/servicios/rinoplastia'} />
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
                  POMULOPLASTIA
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
                    La cirugía estética de pómulos ( o pomuloplastia), consiste en el aumento de pómulos, mediante la introducción de material sintético (silicona sólida, Gore-tex, etc…)o con osteotomías, con la inyeccion de grasa propia, o con la extraer la grasa bucal o bola de Bichat, lo cual ocasiona un descenso de la mejilla y, por lo tanto, una acentuación del pómulo.
                  </p>
                  <div className="text-center py-3">
                    <BlackButton text={'VER MÁS'} url={'/servicios/pomuloplastia'} />
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
                    <BlackButton text={'VER MÁS'} url={'/servicios/blefaroplastia'} />
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
                  RITIDECTOMIA
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
                    Es un procedimiento quirúrgico para mejorar los signos visibles de envejecimiento de la cara y el cuello.
                    <br />
                    <br />
                    Conforme el individuo envejece, la piel, la grasa y los músculos faciales, que se encuentran fijos a los huesos de la cara a través de ligamentos, tienden a descender por efecto de la gravedad debido a una disminución en el tono de los mismos.
                  </p>
                  <div className="text-center py-3">
                    <BlackButton text={'VER MÁS'} url={'/servicios/blefaroplastia'} />
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
                  LEVANTAMIENTO DE CEJAS
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
                    La ritidoplastia frontal levanta tejido blando y la piel de la frente y el ceño, y mejora la apariencia de estos y de la zona alrededor de los ojos.
                    <br />
                    <br />
                    Se puede realizar solo la ritidoplastia frontal o junto con otros procedimientos para el rostro, como una cirugía de párpado (ritidoplastia de párpado) o un estiramiento facial.
                  </p>
                  <div className="text-center py-3">
                    <BlackButton text={'VER MÁS'} url={'/servicios/levantamiento-de-cejas'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5 col-xl-5 col-lg-5 col-md-6 text-white-color font-bold text-center top-services-tittle hide-on-mobile py-3">
          <div class="accordion" id="accordionExample">
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
                  BICHECTOMIA
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
                    Es una cirugía en donde se hace una incisión aproximadamente
                    de 1 cm por dentro de la boca, se busca el tejido graso
                    encapsulado (bolsas de Bichat) y se retiran para mejorar los
                    rasgos faciales. Creando una ilusión óptica de tener una
                    cara más alargada y delgada mejorando el aspecto estético.
                  </p>
                  <div className="text-center py-3">
                    <BlackButton text={'VER MÁS'} url={'/servicios/bichectomia'} />
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingSeven">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSeven"
                  aria-expanded="false"
                  aria-controls="collapseSeven"
                >
                  MENTOPLASTIA
                </button>
              </h2>
              <div
                id="collapseSeven"
                class="accordion-collapse collapse"
                aria-labelledby="headingSeven"
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
                    <BlackButton text={'VER MÁS'} url={'/servicios/mentoplastia'} />
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingEight">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseEight"
                  aria-expanded="false"
                  aria-controls="collapseEight"
                >
                  LIPOPAPADA
                </button>
              </h2>
              <div
                id="collapseEight"
                class="accordion-collapse collapse"
                aria-labelledby="headingEight"
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
                    <BlackButton text={'VER MÁS'} url={'/servicios/lipopapada'} />
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingNine">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseNine"
                  aria-expanded="false"
                  aria-controls="collapseNine"
                >
                  LIFT DE LABIOS
                </button>
              </h2>
              <div
                id="collapseNine"
                class="accordion-collapse collapse"
                aria-labelledby="headingNine"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                  Consiste en acortar la longitud vertical del labio superior y elevar el labio subnasal mediante la eliminación de tejido. Adicionalmente, la paciente puede potenciar el arco de Cupido.
                  </p>
                  <div className="text-center py-3">
                    <BlackButton text={'VER MÁS'} url={'/servicios/lift-de-labios'} />
                  </div>
                </div>
              </div>
            </div>

            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTen">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTen"
                  aria-expanded="false"
                  aria-controls="collapseTen"
                >
                  LIFT DE CUELLO
                </button>
              </h2>
              <div
                id="collapseTen"
                class="accordion-collapse collapse"
                aria-labelledby="headingTen"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body text-start">
                  <p className="font-regular">
                  El estiramiento de cuello es un procedimiento estético que elimina el exceso de piel y grasa alrededor de la línea de la mandíbula para crear un cuello más definido y con aspecto más joven. Los resultados pueden ser a largo plazo, pero la cirugía de estiramiento de cuello no puede detener el proceso de envejecimiento.
                  </p>
                  <div className="text-center py-3">
                    <BlackButton text={'VER MÁS'} url={'/servicios/lift-de-cuello'} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1 col-xl-1 col-lg-1 col-md-0 hide-on-mobile"></div>

        <Simulator />
        
      </div>
    </div>
  );
};

export default Servicios;
