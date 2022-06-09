import React from "react";
import "./topServices.css";

import OwlCarousel from "react-owl-carousel";

import Review1 from '../../assets/img/reviews/review-square-1.png';
import Review2 from '../../assets/img/reviews/review-square-2.png';
import Review3 from '../../assets/img/reviews/review-square-3.png';

const TopServices = () => {

    const responsive = {
        0: {
          items: 1,
        },
        576: {
          items: 1,
        },
        768: {
          items: 2,
        },
        992: {
          items: 2,
        },
        1200: {
          items: 2,
        },
    };

  return (
    <div className="slider-result-caontainer">
      <OwlCarousel
        className="owl-theme"
        items="1"
        margin={10}
        autoplay={true}
        loop
        dots={false}
        touchDrag={true}
        animateIn={true}
        center={true}
        responsive={responsive}
      >
        <div className="item">
          <div className="row">
            <div className="col-4">
              <img alt="img1" src={Review1} />
            </div>
            <div className="col-8 text-white-color">
              <h4>Itzel Estrella</h4>
              <p>México</p>
            </div>
            <div className="col-12 text-white-color">
              <p className="font-regular">
                <em>"Gracias, son los mejores. Si me cambiaron cañon"</em>
              </p>
              <small className="font-light">28/04/2022</small>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="row">
            <div className="col-4">
              <img alt="img1" src={Review2} />
            </div>
            <div className="col-8 text-white-color">
              <h4>Ele Ross</h4>
              <p>México</p>
            </div>
            <div className="col-12 text-white-color">
              <p className="font-regular">
                <em>
                  "@rinoexperts me hizo mi rinoplastia!!! Corran con él, amo mi
                  nariz"
                </em>
              </p>
              <small className="font-light">30/05/2022</small>
            </div>
          </div>
        </div>

        <div className="item">
          <div className="row">
            <div className="col-4">
              <img alt="img1" src={Review3} />
            </div>
            <div className="col-8 text-white-color">
              <h4>Belem</h4>
              <p>México</p>
            </div>
            <div className="col-12 text-white-color">
              <p className="font-regular">
                <em>"Se ve súper diferente, me gustó mil"</em>
              </p>
              <small className="font-light">08/06/2022</small>
            </div>
          </div>
        </div>
        
      </OwlCarousel>
    </div>
  );
};

export default TopServices;
