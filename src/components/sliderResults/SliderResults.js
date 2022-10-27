import React from "react";

import './sliderResults.css';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Review1 from '../../assets/img/reviews/review-square-1.png';
import Review2 from '../../assets/img/reviews/review-square-2.png';
import Review3 from '../../assets/img/reviews/review-square-3.png';
import Review4 from '../../assets/img/reviews/review-square-4.png';
import Review5 from '../../assets/img/reviews/review-square-5.png';

const SliderResults = () => {

  const state= {
      responsive:{
          0: {
              items: 1,
          },
          576: {
              items: 1,
          },
          768: {
              items: 1,
          },
          992: {
              items: 1,
          },
          1200: {
              items: 2,
          },
      },
  }

  return (
    <div className="slider-result-container py-5">
      <div className="row">
        <div className="col-12 col-xs-12">
          <h2 className="d-block text-white-color text-center py-4 fs-1">RESEÑAS</h2>
        </div>
        <div className="col-12 px-5 slider-result-container__imgBack text-white-color">
          <OwlCarousel
            className="owl-theme"
            items="3"
            margin={18}
            autoplay={true}
            loop
            // dots={true}
            animateIn={true}
            responsive={state.responsive}
            center={true}
          >
            <div className="item__green">
              <div className="row">
                <div className="col-4">
                  <img alt="img1" src={Review1} />
                </div>
                <div className="col-8">
                  <h4>Itzel Estrella</h4>
                  <p>México</p>
                </div>
                <div className="col-12 review-content">
                  <p className="font-regular"><em>"Gracias, son los mejores. Si me cambiaron cañon"</em></p>
                  <small className="font-light">28/04/2022</small>
                </div>
              </div>
            </div>

            <div className="item__green">
              <div className="row">
                <div className="col-4">
                  <img alt="img1" src={Review2} />
                </div>
                <div className="col-8">
                  <h4>Ele Ross</h4>
                  <p>México</p>
                </div>
                <div className="col-12 review-content">
                  <p className="font-regular"><em>"@rinoexperts me hizo mi rinoplastia!!! Corran con él, amo mi nariz"</em></p>
                  <small className="font-light">30/05/2022</small>
                </div>
              </div>
            </div>

            <div className="item__green">
              <div className="row">
                <div className="col-4">
                  <img alt="img1" src={Review3} />
                </div>
                <div className="col-8">
                  <h4>Belem</h4>
                  <p>México</p>
                </div>
                <div className="col-12 review-content">
                  <p className="font-regular"><em>"Se ve súper diferente, me gustó mil"</em></p>
                  <small className="font-light">08/06/2022</small>
                </div>
              </div>
            </div>

            <div className="item__green">
              <div className="row">
                <div className="col-4">
                  <img alt="img1" src={Review4} />
                </div>
                <div className="col-8">
                  <h4>Belem</h4>
                  <p>México</p>
                </div>
                <div className="col-12 review-content">
                  <p className="font-regular"><em>"Se ve súper diferente, me gustó mil"</em></p>
                  <small className="font-light">08/06/2022</small>
                </div>
              </div>
            </div>

            <div className="item__green">
              <div className="row">
                <div className="col-4">
                  <img alt="img1" src={Review5} />
                </div>
                <div className="col-8">
                  <h4>Belem</h4>
                  <p>México</p>
                </div>
                <div className="col-12 review-content">
                  <p className="font-regular"><em>"Se ve súper diferente, me gustó mil"</em></p>
                  <small className="font-light">08/06/2022</small>
                </div>
              </div>
            </div>
            
            {/* {imagenesMaterial.map(mat => (
                          <div key={mat.id_imagenProducto} className="item">
                              <img className="carruselInfoMaterial_img" src={mat.ruta} alt="ImagenProducto" />
                          </div>
                      ))} */}
          </OwlCarousel>
        </div>
      </div>
    </div>
  );
};

export default SliderResults;
