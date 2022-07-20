import React from 'react';
import './faqSlider.css';

const FAQSlider = () => {
  return (
    <div className="container-fluid faq-slider-container">
        <div className="py-5 text-center text-white">
            <div className="row">
                <div className="col-12">
                    <p className="font-bold">FAQ's</p>
                </div>
                <div className="col-12">
                    <h1 className="font-bold">Preguntas frecuentes</h1>
                </div>
                <div className="col-12">
                    <p className="font-bold form-control-plaintext">¿Aún tienes dudas? <span>Contáctanos</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FAQSlider;