import React from 'react';
import '../../components/rinoplastia/rinoplastia.css';

import RinoplastiaMain from '../../assets/img/servicios/rinoplastia/rinoplastia-main.jpg';
import SecondIMage from '../../assets/img/servicios/rinoplastia/rinoplastia-page-1.jpg';
import BenefRinoex from '../../assets/img/servicios/rinoplastia/beneficios-rinoexperts.jpg';

import Model3d from '../../assets/icons/3d-modeling.svg';
import MedicalEq from '../../assets/icons/equipo-medico.svg';
import MedicalInform from '../../assets/icons/informe-medico.svg';
import Machine from '../../assets/icons/machine.svg';

const Rinoplastia = () => {
  return (
    <div className="container-fluid rinoplastia-container black-background">
        <div className='col-12'>
            <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src={RinoplastiaMain} className="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
        <div className="rinoplastia-container text-white-color py-3">
            <div className="row d-flex align-items-center">
                <div className="col-12 text-center py-3 py-xl-4 py-lg-4 py-md-3 py-sm-3 py-xs-2">
                    <h2 className="font-bold">RINOPLASTIA</h2>
                </div>
                <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0">
                    <img src={SecondIMage} className="img-fluid img-after-title" alt="Rinoplastia" />
                </div>
                <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 px-4">
                    <h3 className="text-center font-regular my-3">¿Qué cambios son posibles con una rinoplastia?</h3>
                    <p className='my-2 justify-text'>La mayoría de los pacientes de rinoplastia llegan con un deseo específico. Por ejemplo, es posible que no les guste su perfil o su punta. Es el trabajo del cirujano plástico tener en cuenta estos deseos, pero ver la nariz del paciente desde un punto de vista estético y asegurarse de que los cambios que quiere, serán proporcionales al resto de la cara.</p>
                    <p className='my-2 justify-text'>Para encontrar la proporción adecuada, el cirujano debe considerar la relación entre la nariz y el resto de su cara. En consulta nos apoyamos con imágenes 3D del paciente para ver exactamente lo que sucederá al aplicar ciertos cambios.</p>
                    <p className='my-2 justify-text'>Es posible reducir o aumentar el tamaño, cambiar la forma de la punta, estrechar la anchura de las alas nasales y cambiar el ángulo entre nariz y labio.</p>
                    <p className='my-2 justify-text'>Esta cirugía estética es personalizada y adecuada a las necesidades de cada paciente.</p>
                </div>
                
                <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 px-4 order-xl-1 order-lg-1 order-md-1 order-sm-2 order-xs-2">
                    <div className="benefits-container">
                        <div className="col-12">
                            <h2 className="font-bold text-center">BENEFICIOS RINOEXPERTS</h2>
                            <div className='py-2 d-flex'>
                                <div className="col-2 align-self-center text-center">
                                    <img src={Model3d} alt="Rinoexperts Modelo 3D" />
                                </div>
                                <div className="col-10">
                                    <h3>Simulador de resultados</h3>
                                    <p>Con <span className="text-aqua-color">CRISALIX</span> podrás visualizar tu nueva imágen antes del procedimiento.</p>
                                </div>
                            </div>
                            <div className='py-2 d-flex'>
                                <div className="col-2 align-self-center text-center">
                                    <img src={MedicalEq} alt="Rinoexperts Equipo Médico" />
                                </div>
                                <div className="col-10">
                                    <h3>Personal certificado</h3>
                                    <p>El Dr. Ortiz y todo el equipo de rehabilitación están listos para darte el mejor servicio.</p>
                                </div>
                            </div>
                            <div className='py-2 d-flex'>
                                <div className="col-2 align-self-center text-center">
                                    <img src={MedicalInform} alt="Rinoexperts Reporte Médico" />
                                </div>
                                <div className="col-10">
                                    <h3>Atención personalizada</h3>
                                    <p>El equipo de Rinoexperts te acompañará durante todo el proceso, desde la primer consulta hasta el final de tu rehabilitación.</p>
                                </div>
                            </div>
                            <div className='py-2 d-flex'>
                                <div className="col-2 align-self-center text-center">
                                    <img src={Machine} alt="Rinoexperts maquinas" />
                                </div>
                                <div className="col-10">
                                    <h3>Tecnología e instalaciones modernas</h3>
                                    <p>Contamos con instalaciones seguras y equipadas con todo lo necesario para brindarte el mejor servicio.</p>
                                </div>
                            </div>
 
                        </div>
                    </div>
                </div>
                {/* <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0 order-xl-2 order-lg-2 order-md-2 order-sm-1 order-xs-1">
                    <img src={BenefRinoex} className="img-fluid img-after-title" alt="Rinoplastia" />
                </div> */}
                <div className="col-12 col-xl-6 col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0 order-xl-2 order-lg-2 order-md-2 order-sm-1 order-xs-1 image-center-text">
                    <img src={BenefRinoex} className="img-fluid img-after-title" alt="Rinoplastia" />
                    <div class="centered">
                      <h2 className="font-bold">¡Agenda una cita ahora mismo!</h2>
                      <button className="video-button">Agendar cita</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-12 container">
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
            <div className="tab-content text-white-color" id="pills-tabContent">
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
    </div>
  )
}

export default Rinoplastia;