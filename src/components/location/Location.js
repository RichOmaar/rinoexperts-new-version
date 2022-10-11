import React from "react";
import "./location.css";

const Location = () => {
  return (
    <div className="container visit-us-main-container text-white-color mt-4" data-aos="fade-up">
      <div className="row">
        <div className="col-4 col-xl-4 col-lg-4 col-md-12 col-sm-12 visit-us-container">
          <h3 className="font-bold">Visítanos</h3>
          <div className="py-3 location-info">
            <h4 className="fs-5">Dirección</h4>
            <p>
              Av Lourdes esq. Sur 76, San Agustin 1ra Secc, 55450 Ecatepec de
              Morelos, Méx.
            </p>
            <h4 className="fs-5">Horario</h4>
            <p>Lunes a Sábado de 9:00 AM a 18:00 PM</p>
            <h4 className="fs-5">WhatsApp</h4>
            <p>
              <a href="https://wa.me/+5215532118512?text=Hola%2C%20deseo%20conocer%20m%C3%A1s%20acerca%20de%20sus%20servicios.%20%C2%BFMe%20pueden%20ayudar%3F" className="blackButton">+52 (55) 3211 8512</a>
            </p>
          </div>
        </div>
        <div className="col-12 col-xl-8 col-lg-8 col-md-12 col-sm-12 map-main-container row">
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.3396773649374!2d-99.03784768511291!3d19.527025186830706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1fa9f4d990845%3A0x48a93bb6bf3751af!2sCl%C3%ADnica%20Divum!5e0!3m2!1ses-419!2smx!4v1653530759331!5m2!1ses-419!2smx"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="map"
            title="Ubicación Rinoexperts"
          />
        </div>
      </div>
    </div>
  );
};

export default Location;
