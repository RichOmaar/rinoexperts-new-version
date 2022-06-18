import React from "react";
import "../../components/otoplastia/otoplastia.css";

import SliderResults from '../../components/sliderResults/SliderResults';
import OtoplastiaImg from "../../assets/img/servicios//otoplastia/otoplastia.jpg";

const Otoplastia = () => {
  return (
    <div className="container-fluid black-background">
      <div className="container otoplastia-container py-3">
        <div className="row">
          <div className="col-3 text-center otoplastia-img-container my-3">
            <img
              src={OtoplastiaImg}
              className="img-fluid otoplastia-img"
              alt="Otoplastia"
            />
          </div>
          <div className="col-9 text-center my-3">
            <div className="col-12 text-center">
              <h2 className="font-bold text-white-color">OTOPLASTIA</h2>
            </div>
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    ¿Qué es?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                    La otoplastia es la cirugía facial que tiene como objetivo corregir y remodelar las orejas prominentes, logrando mejorar su proporción y posición. La intervención se encarga tanto de resituar las orejas de soplillo que están demasiado separadas del cráneo, como reducir su tamaño si son excesivamente grandes, remodelar el lóbulo colgante o recrear el pliegue exterior si es necesario.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    ¿Para qué sirve?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      Mejora la autoestima y seguridad en niños y adultos que
                      dejan de cargar el estigma de “las orejas grandes” para el
                      resto de su vida.
                    </p>
                    <p>
                      Consigue simetría en el rostro: La mayoría de las veces,
                      aunque una oreja parezca normal, se intervienen las dos
                      para conseguir este resultado.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Candidatos
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <p>
                      También es posible realizarse en adultos inconformes con
                      la forma de sus orejas y obtener resultados igualmente
                      satisfactorios.
                    </p>
                    <p>
                      La cirugía de orejas se practica principalmente en niños
                      entre 5 y 8 años, edad en que las orejas han crecido casi
                      completamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 py-4">
            <div className="col-12 text-center py-3">
              <h2 className="font-bold text-white-color">¿Qué incluye?</h2>
              <p className="text-white-color">A continuación te desglozamos todos los beneficios excluivos de RINOEXPERTS</p>
            </div>
            <ul className="nav nav-pills mb-3 d-flex justify-content-evenly" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-pre-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-pre"
                  type="button"
                  role="tab"
                  aria-controls="pills-pre"
                  aria-selected="true"
                >
                  Pre
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-procedimiento-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-procedimiento"
                  type="button"
                  role="tab"
                  aria-controls="pills-procedimiento"
                  aria-selected="false"
                >
                  Procedimiento
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-rehabilitacion-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-rehabilitacion"
                  type="button"
                  role="tab"
                  aria-controls="pills-rehabilitacion"
                  aria-selected="false"
                >
                  Rehabilitación
                </button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-pre"
                role="tabpanel"
                aria-labelledby="pills-pre-tab"
              >
                <p>Es muy importante seguir un buen preoperatorio, pues esto va a permitir al paciente afrontar la operación con las máximas garantías físicas y, sobretodo, psicológicas.</p>
                <ul>
                  <li>Comer de forma equilibrada como las proteínas no grasas, frutas y verduras).</li>
                  <li>Beber agua abudante.</li>
                  <li>Incrementar el consumo de alimentos con hierro como el hígado, las legumbres, el tofu o la carne y de zumos naturales con vitamina C que ayudan a absorber el hierro.</li>
                  <li>Evitar las bebidas con cafeína que bloquean la absorción de hierro y el alcohol.</li>
                  <li>Practicar ejercicio moderado (andar) media hora al día.</li>
                  <li>Tomar algún complejo vitamínico con minerales y dormir 8 horas diarias.</li>
                  <li>Dejar de fumar.</li>
                  <li>Quitar el esmalte de uñas y uñas artificiales.</li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="pills-procedimiento"
                role="tabpanel"
                aria-labelledby="pills-procedimiento-tab"
              >
                <p>Durante la cirugía contamos con:</p>
                <ul>
                  <li>Quirófano con los más altos estándares de seguridad.</li>
                  <li>Equipo de última tecnología.</li>
                  <li>Ambiente controlado.</li>
                  <li>Atención de primer nivel.</li>
                </ul>
              </div>
              <div
                className="tab-pane fade"
                id="pills-rehabilitacion"
                role="tabpanel"
                aria-labelledby="pills-rehabilitacion-tab"
              >
                <p>Una ves que ha concluido la cirugía sigue el periodo de rehabilitación, el cual consiste en:</p>
                <ul>
                  <li>Conculstas de seguimiento por 2 meses.</li>
                  <li>Pulido de rostro.</li>
                  <li>Cambios de vendaje.</li>
                </ul>
              </div>
            </div>
          </div>
          <>
          <SliderResults />
          </>
        </div>
      </div>
    </div>
  );
};

export default Otoplastia;
