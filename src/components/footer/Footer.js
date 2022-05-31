import React from 'react';
import './footer.css';

import RinoexpertsLogo from '../../assets/img/logo-negro.png';

import { ImWhatsapp } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { BsInstagram } from 'react-icons/bs';
import { FiFacebook } from 'react-icons/fi';

const Footer = () => {
  return (
    <div className="container container-footer py-4">
        <div className="row">
            <div className="col-12">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 rinoexperts-info">
                        <img src={RinoexpertsLogo} className="img-fluid" alt="Rinoexperts Logo" />
                        <p className="short-text">Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                        <div className="row">
                            <div className="col-2 container-icon">
                                <ImWhatsapp className="whatsapp-icon"/>
                            </div>
                            <div className="col-10 contact-us-footer">
                                <h3 className="p-0 m-0">Contáctanos</h3>
                                <a href="#"><p>+525512436587</p></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <h3 className="font-bold">Enlaces rápidos</h3>
                        <ul className="quick-links p-0">
                            <li>
                                <Link to='/'><span>Nosotros</span></Link>
                            </li>
                            <li>
                                <Link to='/'><span>Servicios</span></Link>
                            </li>
                            <li>
                                <Link to='/'><span>Citas</span></Link>
                            </li>
                            <li>
                                <Link to='/'><span>Equipo</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <h3 className="font-bold">Nuestros servicios</h3>
                        <ul className="quick-links p-0">
                            <li>
                                <Link to='/'><span>Rinoplastia</span></Link>
                            </li>
                            <li>
                                <Link to='/'><span>Bichectomia</span></Link>
                            </li>
                            <li>
                                <Link to='/'><span>Mentoplastia</span></Link>
                            </li>
                            <li>
                                <Link to='/'><span>Ver más</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <h3 className="font-bold">Redes sociales</h3>
                        <div className=" social-icons">
                            <a href="https://www.facebook.com/" target="_blank" className="facebook-icon mx-3"><FiFacebook /></a>
                            <a href="https://www.instagram.com/rinoexperts/" target="_blank" className="instagram-icon mx-3"><BsInstagram /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12 text-center">
                <hr/>
                <p>© 2022 Rinoexperts <span className="text-pink-color">|</span> Design & Developed by Rich Omaar</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;