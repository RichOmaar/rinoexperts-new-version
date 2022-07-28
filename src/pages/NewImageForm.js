import React, { useEffect } from 'react';
import '../components/presentation/presentations.css';
import { Link } from 'react-router-dom';

import { AiFillCaretRight } from 'react-icons/ai';

import LogoHeader from '../components/logoHeader/LogoHeader';

const NewImageForm = () => {

    useEffect(() => {
    window.scrollTo(0, 0)
    }, [])

  return (
    <div className="presentation-container black-background pt-3 pb-4">
        <div className="container text-white-color">
            <div className="row">
                <div className="col-12">
                    <LogoHeader />
                </div>
                <div className="col-12 pt-2">
                    <p>A través del siguiente formulario y fotografías recibirás una propuesta por parte Rinoexperts.</p>
                    <ul>
                        <li className="pt-2 font-bold"><AiFillCaretRight className="presentation-icon fs-3"/>Asegúrate de contar con una conexión a Internet estable.</li>
                    </ul>
                </div>
                <div className="col-12 text-center">
                    <Link to="/informacion-personal-previsualizacion" className="no-text-decoration">
                        <button type="button" className="video-button font-regular mt-3">Continuar</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewImageForm;