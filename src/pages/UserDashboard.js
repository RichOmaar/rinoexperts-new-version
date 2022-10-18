import React from "react";
import appointment from "../assets/icons/appointment.svg";
import "../components/userDashboard/userDashboard.css";

const UserDashboard = () => {
  return (
    <div className="black-background userDashboard">
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white">Mis citas</h2>
          </div>
          <hr className="userDashboard__hr" />
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 py-4 d-flex align-items-center">
            <h5 className="text-white">
              En este espacio vas a encontrar tus próximas citas así como
              recomendaciones que te pueden servir para acompañar todo tu
              proceso.
            </h5>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 py-4 d-flex justify-content-center userDashboard__icon">
            <img src={appointment} alt="appointment" className="img-fluid" />
          </div>
          <hr className="userDashboard__hr" />
          <div className="col-12">
            <h2 className="text-white">Próximas citas</h2>
          </div>
          <div class="container__card">
            <div class="box">
              <span class="title">GLASS EFFECT</span>
              <div>
                <strong>JOE WATSON SBF</strong>
                <p>0000 000 000 0000</p>
                <span>VALID</span> <span>01/28</span>
              </div>
            </div>
          </div>
          <hr className="userDashboard__hr" />
          <div className="col-12">
            <h2 className="text-white">Recomendaciones</h2>
          </div>
          <p>
            Aqui va un carrusel con videos de recomendaciones de rehabilitacion
            y todo eso
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
