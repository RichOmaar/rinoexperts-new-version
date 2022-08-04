import React from 'react';
import { Link } from 'react-router-dom';
import { BsCheckCircle } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import Location from '../components/location/Location';

import '../components/crisalixReceipt/crisalixReceipt.css';

const CrisalixReceipt = () => {
  return (
    <>
    <div className="container-fluid compra-realizada-container p-0">
            <Link to="/" >
                <div className="exit-icon p-2 d-flex justify-content-end">
                    <AiOutlineClose />
                </div>
            </Link>
            <section className="container text-center pb-4 success-container">
                <div className="check-icon d-flex justify-content-center">
                    <BsCheckCircle />
                </div>
                <div className="col-12 my-3">
                    <h2 className="text-white-color font-regular">¡Felicidades!</h2>
                    <p className="text-white-color fs-4 px-2">Estás un paso más cerca de conocer tu nuevo yo</p>
                </div>
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">En un lapso no mayor a 5 días hábiles nos pondremos en contacto vía WhatsApp para enviarte los resultados que nuestros expertos están preprando para ti.</p>
                    </div>
                </div>
            </section>
        </div>

        <div className="black-background py-4">
            <Location />
        </div>
    </>
  )
}

export default CrisalixReceipt;