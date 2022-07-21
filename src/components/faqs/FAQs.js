import React, { useState } from 'react';
import './faqs.css';

import { Link } from 'react-router-dom';
import TopFAQ from '../topFAQ/TopFAQ';

const FAQs = () => {

  const [showTopFAQ, setShowTopFAQ] = useState(false);

  function handleTopFAQ() {
    // console.log(showTopFAQ);
    // if(showTopFAQ === false) {
    //   document.querySelector('#topFAQ').FAQcontent.classList.remove('hidden');
    //   document.querySelector('#topFAQ').FAQcontent.classList.add('fadeIn');
    //   setShowTopFAQ(!showTopFAQ);
    // } else {
    //   document.querySelector('#topFAQ').FAQcontent.classList.remove('faseIn');
    //   document.querySelector('#topFAQ').FAQcontent.classList.add('fadeOut');
    //   document.querySelector('#topFAQ').FAQcontent.classList.add('hidden');
    //   setShowTopFAQ(!showTopFAQ);
    // }
    setShowTopFAQ(!showTopFAQ);

  }

  return (
    <div className="black-background container-fluid pt-4 pb-5">
      <div className="container">
        <div className="row d-flex align-items-center text-aqua-color font-light d-flex justify-content-between">

          <section id="topFAQ-btn" className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4" onClick={ handleTopFAQ }>
          {/* <section id="topFAQ-btn" className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4"> */}
            <p className="m-0 font-bold">Top FAQ</p>
          </section>
          <section>
            <TopFAQ showStatus={showTopFAQ}/>
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