import React from 'react';
import './faqs.css';

import { Link } from 'react-router-dom';

const FAQs = () => {
  return (
    <div className="black-background container-fluid pt-4 pb-5">
      <div className="container">
        <div className="row d-flex align-items-center text-aqua-color font-light d-flex justify-content-between">

          <section className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4">
            <p className="m-0 font-bold">Top FAQ</p>
          </section>
          <section className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4">
            <p className="m-0 font-bold">Contáctanos</p>
          </section>
          <section className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4">
            <p className="m-0 font-bold">Nuestros servicios</p>
          </section>
          <section className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4">
            <p className="m-0 font-bold">Rehabilitación</p>
          </section>
          <section className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4">
            <p className="m-0 font-bold">Nuestro equipo</p>
          </section>

        </div>
      </div>
    </div>
  )
}

export default FAQs;