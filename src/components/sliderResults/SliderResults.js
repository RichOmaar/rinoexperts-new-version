import React from "react";

import './sliderResults.css';

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Result1 from '../../assets/results/compare-1.png';
import Result2 from '../../assets/results/compare-2.png';
import Result3 from '../../assets/results/compare-3.png';

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
    <div className="slider-result-caontainer">
        <h2 className="d-block text-white-color text-center py-4">Nuestros pacientes</h2>
        
        <OwlCarousel
          className="owl-theme"
          items="5"
          margin={18}
          autoplay={true}
          loop
          dots={true}
          touchDrag={true}
          animateIn={true}
          responsive={state.responsive}
          center={true}
          // navText={[
          //     '<div className="carruselInfoMaterial_arrowIcon1"><i className="fa fa-angle-left"></i></div>',
          //     '<div className="carruselInfoMaterial_arrowIcon2"><i className="fa fa-angle-right"></i></div>'
          // ]}
          //
        >
          <div class="item">
            <img
              alt="img1"
              src={Result1}
            />
          </div>
          <div class="item">
            <img
              alt="img1"
              src={Result2}
            />
          </div>
          <div class="item">
            <img
              alt="img1"
              src={Result3}
            />
          </div>
          <div class="item">
            <img
              alt="img1"
              src={Result2}
            />
          </div>
          <div class="item">
            <img
              alt="img1"
              src={Result1}
            />
          </div>
          <div class="item">
            <img src={Result3} />
          </div>

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
