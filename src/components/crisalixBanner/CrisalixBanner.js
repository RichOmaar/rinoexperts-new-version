import React from 'react';
import './crisalixBanner.css';

import OwlCarousel from "react-owl-carousel";

import phone1 from '../../assets/img/phone.png';

import BlackButton from '../../components/blackButton/BlackButton';

const CrisalixBanner = () => {
  return (
    <div className="container-fluid green-background">
        <div className="container crisalix-container py-4">
            <div className="row d-flex align-items-center">
                <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 mt-4">
                    <OwlCarousel
                        className="owl-theme"
                        items="1"
                        margin={10}
                        autoplay={true}
                        loop
                        touchDrag={true}
                        animateIn={true}
                        center={true}
                        >
                        <div className="d-flex justify-content-center">
                            <img src={phone1} className="crisalix-phone" alt=""/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <img src={phone1} className="crisalix-phone" alt=""/>
                        </div>
                        <div className="d-flex justify-content-center">
                            <img src={phone1} className="crisalix-phone" alt=""/>
                        </div>
                    </OwlCarousel>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-xs-12 text-center">
                    <div className="col-12">
                        <h2 className="font-bold">Visualiza tu <span className="text-pink-color">nueva imagen</span> antes del procedimiento</h2>
                        <p>Simplemente regístrate, envíanos 3 fotos y nosotros hacemos el resto</p>
                        <BlackButton url={'/formulario-nueva-imagen'} text={'Descúbrelo ahora'}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CrisalixBanner;