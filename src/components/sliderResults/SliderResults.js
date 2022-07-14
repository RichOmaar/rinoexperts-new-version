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
              items: 2,
          },
          576: {
              items: 3,
          },
          768: {
              items: 3,
          },
          992: {
              items: 5,
          },
          1200: {
              items: 5,
          },
      },
  }

  return (
    <div className="slider-result-container">
        <h2 className="d-block text-white-color text-center py-4">Nuestros pacientes</h2>
        
        <OwlCarousel
          className="owl-theme"
          items="5"
          margin={18}
          autoplay={true}
          loop
          dots={true}
          animateIn={true}
          responsive={state.responsive}
          center={true}
          // navText={[
          //     '<div className="carruselInfoMaterial_arrowIcon1"><i className="fa fa-angle-left"></i></div>',
          //     '<div className="carruselInfoMaterial_arrowIcon2"><i className="fa fa-angle-right"></i></div>'
          // ]}
          //
        >
          <div className="item">
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

          <div className="item">
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

          <div className="item">
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

          <div className="item">
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

          <div className="item">
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
          {/* <div className="item">
            <div className="row">
              <div className="col-12">
                <img alt="img2" src={Result2} />
              </div>
              <div className="col-12 py-3 px-4">
                <h3>Ele Ross</h3>
                <p>México</p>
                <h5>@rinoexperts me hizo mi rinoplastia!!! Corran con él, amo mi nariz</h5>
              </div>
            </div>
          </div>
          
          <div className="item">
            <div className="row">
              <div className="col-12">
                <img alt="img3" src={Result3} />
              </div>
              <div className="col-12 text-white-color py-3 px-4">
                <h3>Belem</h3>
                <p>México</p>
                <h5>Se ve súper diferente, me gustó mil</h5>
              </div>
            </div>
          </div> */}
          {/* {imagenesMaterial.map(mat => (
                        <div key={mat.id_imagenProducto} className="item">
                            <img className="carruselInfoMaterial_img" src={mat.ruta} alt="ImagenProducto" />
                        </div>
                    ))} */}
        </OwlCarousel>
    </div>
  );
};

export default SliderResults;
