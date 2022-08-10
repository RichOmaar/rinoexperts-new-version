import React from "react";
import "./rinoexpertsBenefits.css";

import Model3d from "../../assets/icons/3d-modeling.svg";
import MedicalEq from "../../assets/icons/equipo-medico.svg";
import MedicalInform from "../../assets/icons/informe-medico.svg";
import Machine from "../../assets/icons/machine.svg";

const RinoexpertsBenefits = () => {
  return (
    <>
      <div className="benefits-container">
        <div className="col-12">
          <h2 className="font-bold text-center">BENEFICIOS RINOEXPERTS</h2>
          <div className="py-2 d-flex" data-aos="fade-right">
            <div className="col-2 align-self-center text-center">
              <img src={Model3d} alt="Rinoexperts Modelo 3D" />
            </div>
            <div className="col-10 px-1">
              <h3>Simulador de resultados</h3>
              <p>
                Con <span className="text-aqua-color">CRISALIX</span> podrás
                visualizar tu nueva imágen antes del procedimiento.
              </p>
            </div>
          </div>
          <div className="py-2 d-flex" data-aos="fade-left">
            <div className="col-2 align-self-center text-center">
              <img src={MedicalEq} alt="Rinoexperts Equipo Médico" />
            </div>
            <div className="col-10 px-1">
              <h3>Personal certificado</h3>
              <p>
                El Dr. Ortiz y todo el equipo de rehabilitación están listos
                para darte el mejor servicio.
              </p>
            </div>
          </div>
          <div className="py-2 d-flex" data-aos="fade-right">
            <div className="col-2 align-self-center text-center">
              <img src={MedicalInform} alt="Rinoexperts Reporte Médico" />
            </div>
            <div className="col-10 px-1">
              <h3>Atención personalizada</h3>
              <p>
                El equipo de Rinoexperts te acompañará durante todo el proceso,
                desde la primer consulta hasta el final de tu rehabilitación.
              </p>
            </div>
          </div>
          <div className="py-2 d-flex" data-aos="fade-left">
            <div className="col-2 align-self-center text-center">
              <img src={Machine} alt="Rinoexperts maquinas" />
            </div>
            <div className="col-10 px-1">
              <h3>Tecnología e instalaciones modernas</h3>
              <p>
                Contamos con instalaciones seguras y equipadas con todo lo
                necesario para brindarte el mejor servicio.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RinoexpertsBenefits;
