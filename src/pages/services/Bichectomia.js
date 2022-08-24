import React from 'react';
import '../../components/bichectomia/bichectomia.css';

import { FaArrowAltCircleRight } from 'react-icons/fa';

import BlackButton from '../../components/blackButton/BlackButton';
import Procedure from '../../assets/img/servicios/bichectomia/bichectomia-principal.png';
import RinoexpertsBenefits from '../../components/rinoexpertsBenefits/RinoexpertsBenefits';

const Bichectomia = () => {
  return (
    <div className="container-fluid bichectomia black-background text-white-color">
       <div className="container py-4">
            <div className="row">
                <div className="col-6 text-center">
                    <img src={Procedure} alt="Bichectomia" className="img-fluid bichectomia__img" />
                </div>
                <div className="col-6">
                    <div className="text-center">
                        <h1>Bichectomia</h1>
                        <p>La Bichectomía es la extracción de las bolsas de Bichat, estas bolsas son pequeños depósitos de grasa que se encuentran en las mejillas, por debajo de cada pómulo. Por medio de esta cirugía podemos definir el contorno de la cara, haciendo lucir el rostro redondeado y ovalado con un aspecto más afilado, dando mayor realce y mejor definición a los pómulos.</p>
                    </div>
                    <div className="row mt-4">
                        <div className="col-6">
                            <ul className="bichectomia__ul p-0">
                                <li><FaArrowAltCircleRight className="mx-2"/>Resultados permanentes</li>
                                <li><FaArrowAltCircleRight className="mx-2"/>Cirugía de bajo riesgo</li>
                                <li><FaArrowAltCircleRight className="mx-2"/>Rápida recuperación</li>
                                <li><FaArrowAltCircleRight className="mx-2"/>Armoniza tu rostro</li>
                            </ul>
                        </div>
                        <div className="col-6 align-self-center text-center">
                            <BlackButton url={'/'} text={'Agendar cita'}/>
                        </div>
                    </div>
                    <RinoexpertsBenefits />
                </div>
            </div>
       </div>
    </div>
  )
}

export default Bichectomia;