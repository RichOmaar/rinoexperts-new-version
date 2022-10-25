import React, { useEffect } from 'react';
import '../components/presentation/presentations.css';
import { Link } from 'react-router-dom';

import { AiFillCaretRight } from 'react-icons/ai';

import InitialModal from '../components/initialModal/InitialModal';

import LogoHeader from '../components/logoHeader/LogoHeader';

const Presentation = () => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

  return (
    <div className="presentation-container black-background pt-3 pb-4">
        <div className="container text-white-color">
            <div className="row">
                <div className="col-12">
                    <LogoHeader />
                </div>
                {/* <div className="col-12 text-center ">
                    <p>Completa la siguiente información, recibe un diagnóstico y presupuesto.</p>
                </div> */}
                <div className="col-12 pt-2">
                    <p>A través del siguiente formulario y fotografías recibirás un Informe Médico y Propuesta por parte Rinoexperts.</p>
                    <ul>
                        <li className="pt-2 font-bold"><AiFillCaretRight className="presentation-icon fs-3"/>Asegúrate de contar con una conexión a Internet estable.</li>
                        {/* <li className="pt-2"><FontAwesomeIcon icon={faArrowRight} className="presentation-icon" />En caso de no completar el proceso, podrás continuar tu consulta utilizando la clave que establezcas en el paso Datos Personales.</li> */}
                    </ul>
                </div>
                <div className="col-12 pt-2">
                    <p className=""><span className="font-semibold text-red-color fs-4">ADVERTENCIA: </span>Al realizar el proceso de la consulta en línea contarás un plazo de siete días para concretar la misma, posterior a esto deberás realizar el cuestionario nuevamente.</p>
                </div>
                {/* <InitialModal /> */}
                <div className="col-12 text-center">
                    <Link to="/informacion-personal" className="no-text-decoration">
                        <button type="button" className="video-button font-regular mt-3">Continuar</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Presentation;