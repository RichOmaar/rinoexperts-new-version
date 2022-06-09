import React from 'react';
import '../../components/servicios/servicios.css';

import TopServices from '../../components/topServices/TopServices';
const Servicios = () => {
  return (
    <div className="container-fluid">
        <div className="row">
            <div className="col-12 banner-services-container text-center">
              <h2 className="font-bold text-white-color py-2 fs-1">PROCEDIMIENTOS</h2>
              <h3 className="text-white-color py-3">Tu salud es lo más importante para nosotros.</h3>
            </div>
            <div className="col-12 py-3 text-center">
            </div>
        </div>
        <TopServices />
    </div>
  )
}

export default Servicios;