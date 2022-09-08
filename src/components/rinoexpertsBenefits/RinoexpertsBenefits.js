import React from "react";
import "./rinoexpertsBenefits.css";

import Model3d from "../../assets/icons/3d-modeling.png";
import MedicalEq from "../../assets/icons/equipo-medico.png";
import MedicalInform from "../../assets/icons/informe-medico.png";
import Machine from "../../assets/icons/machine.png";

// import OwlCarousel from "react-owl-carousel";

const RinoexpertsBenefits = () => {
  // const responsive = {
  //   0: {
  //     items: 3,
  //     autoWidth: true,
  //   },
  //   576: {
  //     items: 3,
  //     autoWidth: true,
  //   },
  //   768: {
  //     items: 2,
  //   },
  //   992: {
  //     items: 2,
  //   },
  //   1200: {
  //     items: 2,
  //   },
  // };

  return (
    <div className="benefits my-5">
      <h2 className="font-bold text-center mb-5">BENEFICIOS RINOEXPERTS</h2>
      <div className="row d-flex justify-content-around">
        <div className="col-12 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 benefits__card">
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
        <div className="col-12 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 benefits__card">
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
        <div className="col-12 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 benefits__card">
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
        <div className="col-12 col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 benefits__card">
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
{/* 
      <div className="black-background">
        <OwlCarousel
          className="owl-theme"
          items="3"
          // margin={10}
          autoplay={true}
          loop
          lazyLoad={true}
          dots={true}
          touchDrag={true}
          animateIn={true}
          center={true}
          nav={true}
          responsive={responsive}
        >
          <div className="row d-flex justify-content-between">
            <div className="col-12 benefits__card">
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
          </div>
        </OwlCarousel>
      </div> */}
    </div>
  );
};

export default RinoexpertsBenefits;
