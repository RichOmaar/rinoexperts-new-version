import React from "react";
import "./rinoexpertsBenefits.css";

import Model3d from "../../assets/icons/3d-modeling.svg";
import MedicalEq from "../../assets/icons/equipo-medico.svg";
import MedicalInform from "../../assets/icons/informe-medico.svg";
import Machine from "../../assets/icons/machine.svg";

const RinoexpertsBenefits = () => {
  return (
    <div className="benefits my-5">
  
      <h2 className="font-bold text-center mb-5">BENEFICIOS RINOEXPERTS</h2>
      <div className="row d-flex justify-content-between">
        <div className="col-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 benefits__card">
          <div className="align-self-center text-center">
            <img
              src={Model3d}
              alt="Rinoexperts Modelo 3D"
              className="img-fluid"
            />
            <h3>Simulador de resultados</h3>
            <p>
              Con <span className="text-aqua-color">CRISALIX</span> podrás
              visualizar tu nueva imágen antes del procedimiento.
            </p>
          </div>
        </div>
        <div className="col-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 benefits__card">
          <div className="align-self-center text-center">
            <img
              src={Machine}
              alt="Rinoexperts maquinas"
              className="img-fluid"
            />
            <h3>Tecnología e instalaciones modernas</h3>
            <p>
              Contamos con instalaciones seguras y equipadas con todo lo
              necesario para brindarte el mejor servicio.
            </p>
          </div>
        </div>
        <div className="col-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 benefits__card">
          <div className="align-self-center text-center">
            <img
              src={MedicalEq}
              alt="Rinoexperts Equipo Médico"
              className="img-fluid"
            />
            <h3>Personal certificado</h3>
            <p>
              El Dr. Ortiz y todo el equipo de rehabilitación están listos para
              darte el mejor servicio.
            </p>
          </div>
        </div>
        <div className="col-3 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 benefits__card">
          <div className="align-self-center text-center">
            <img
              src={MedicalInform}
              alt="Rinoexperts Reporte Médico"
              className="img-fluid"
            />
            <h3>Atención personalizada</h3>
            <p>
              El equipo de Rinoexperts te acompañará durante todo el proceso,
              desde la primer consulta hasta el final de tu rehabilitación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RinoexpertsBenefits;
