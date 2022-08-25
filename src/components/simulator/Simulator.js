import React from 'react';
import './simulator.css';

import BlackButton from '../../components/blackButton/BlackButton';

const Simulator = () => {
  return (
    <div className="container-fluid green-background">
        <div className="container py-4">
            <div className="row">
                <div className="col-xl-2 col-lg-2 col-md-1 col-sm-0 col-xs-0"></div>
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 d-flex align-items-center">
                    <h2 className="font-semibold">¿Te gustaría visualizar tu nueva imágen?</h2>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-xs-12">
                    <p className="fs-5 mt-4">Descubre tu nuevo yo de manera <strong>GRATUITA</strong>, llena el siguiente formulario y sigue los pasos para descubrirlo.</p>
                    <div className="d-flex justify-content-center justify-content-md-start">
                        <BlackButton url={'/visualizar-imagen'} text={'Ver más'}/>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-1 col-sm-0 col-xs-0"></div>
            </div>
        </div>
    </div>
  )
}

export default Simulator;