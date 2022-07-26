import React, { useEffect } from 'react';
import './faqs.css';

import { Link } from 'react-router-dom';

const FAQs = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  // const [showTopFAQ, setShowTopFAQ] = useState(false);

  // function handleTopFAQ() {
  //   setShowTopFAQ(!showTopFAQ);
  // }

  return (
    <div className="black-background container-fluid pt-4 pb-5">
      <div className="container faq-list">
        <div className="row d-flex align-items-center text-aqua-color font-light d-flex justify-content-between">

          <div className="col-12 mt-4">
            <Link to="/top-faqs">
              <button className="faq-container font-bold">Top FAQ's</button>
            </Link>
          </div>
          <div className="col-12 mt-4">
            <Link to="/contacto">
              <button className="faq-container font-bold">Contáctanos</button>
            </Link>
          </div>
          <div className="col-12 mt-4">
            <Link to="/servicios">
              <button className="faq-container font-bold">Nuestros servicios</button>
            </Link>
          </div>
          <div className="col-12 mt-4">
            <Link to="/">
              <button className="faq-container font-bold">Rehabilitación</button>
            </Link>
          </div>
          <div className="col-12 mt-4">
            <Link to="/equipo">
              <button className="faq-container font-bold">Nuestro equipo</button>
            </Link>
          </div>
          {/* <Link to="/top-faqs" className="m-0 font-bold col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4">
            Top FAQ's
          </Link>
          <Link to="/top-faqs" className="m-0 font-bold col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4">
            Contáctanos
          </Link>
          <Link to="/top-faqs" className="m-0 font-bold col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4">
            Nuestros servicios
          </Link>
          <Link to="/top-faqs" className="m-0 font-bold col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4">
            Rehabilitación
          </Link>
          <Link to="/top-faqs" className="m-0 font-bold col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4">
            Nuestro equipo
          </Link> */}
          {/* <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 text-center mt-4">
            <Link to="/" className="m-0 font-bold"><button className="">Top FAQ's</button></Link>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4">
            <Link to="/" className="m-0 font-bold">Contáctanos</Link>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4">
            <Link to="/" className="m-0 font-bold">Nuestros servicios</Link>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4">
            <Link to="/" className="m-0 font-bold">Rehabilitación</Link>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12 faq-container text-center mt-4">
            <Link to="/" className="m-0 font-bold">Nuestro equipo</Link>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default FAQs;