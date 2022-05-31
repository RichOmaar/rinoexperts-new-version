import React from "react";
import "./location.css";

const Location = () => {
  return (
    <div className="container visit-us-main-container text-white-color">
      <div className="row">
        <div className="col-12 col-xl-4 col-lg-4 col-md-4 col-sm-12 visit-us-container">
          <h3 className="font-bold">Visítanos</h3>
          <div className="py-3 location-info">
            <h4 className="fs-5">Dirección</h4>
            <p>
              Av Lourdes esq. Sur 76, San Agustin 1ra Secc, 55450 Ecatepec de
              Morelos, Méx.
            </p>
            <h4 className="fs-5">Horario</h4>
            <p>Lunes a Sábado de 9:00 AM a 18:00 PM</p>
            <h4 className="fs-5">Teléfono</h4>
            <p>
              <a href="tel:5543360298">+52 (55) 4336 0298</a>
            </p>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 embed-responsive embed-responsive-16by9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.3396773649374!2d-99.03784768511291!3d19.527025186830706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fa9f4d990845%3A0x48a93bb6bf3751af!2sCl%C3%ADnica%20Divum!5e0!3m2!1ses-419!2smx!4v1653530759331!5m2!1ses-419!2smx"
            width="800"
            height="450"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="map embed-responsive-item"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
