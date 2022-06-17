import React from 'react';
import '../../components/rinoplastia/rinoplastia.css';

import MainImage from '../../assets/img/servicios-banner-long.jpg';
import SecondIMage from '../../assets/img/servicios/rinoplastia/rinoplastia-page-1.jpg'

import Model3d from '../../assets/icons/3d-modeling.svg';
import MedicalEq from '../../assets/icons/equipo-medico.svg';
import MedicalInform from '../../assets/icons/informe-medico.svg';
import Machine from '../../assets/icons/machine.svg';

const Rinoplastia = () => {
  return (
    <div className="container-fluid black-background">
        <div className='col-12'>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={MainImage} class="d-block w-100" alt="..." />
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
                    <img src={SecondIMage} class="img-fluid" alt="Rinoplastia" />
                </div>
                <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 px-4">
                    <h3 className="text-center font-regular my-3">¿Qué cambios son posibles con una rinoplastia?</h3>
                    <p className='my-2 justify-text'>La mayoría de los pacientes de rinoplastia llegan con un deseo específico. Por ejemplo, es posible que no les guste su perfil o su punta. Es el trabajo del cirujano plástico tener en cuenta estos deseos, pero ver la nariz del paciente desde un punto de vista estético y asegurarse de que los cambios que quiere, serán proporcionales al resto de la cara.</p>
                    <p className='my-2 justify-text'>Para encontrar la proporción adecuada, el cirujano debe considerar la relación entre la nariz y el resto de su cara. En consulta nos apoyamos con imágenes 3D del paciente para ver exactamente lo que sucederá al aplicar ciertos cambios.</p>
                    <p className='my-2 justify-text'>Es posible reducir o aumentar el tamaño, cambiar la forma de la punta, estrechar la anchura de las alas nasales y cambiar el ángulo entre nariz y labio.</p>
                    <p className='my-2 justify-text'>Esta cirugía estética es personalizada y adecuada a las necesidades de cada paciente.</p>
                </div>
                
                <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 px-4">
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
                <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 p-0">
                    <img src={SecondIMage} class="img-fluid" alt="Rinoplastia" />
                </div>

            </div>
        </div>
    </div>
  )
}

export default Rinoplastia;