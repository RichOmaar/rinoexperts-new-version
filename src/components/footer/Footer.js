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
                        <p className="short-text">Cirugía de nariz, rostro y cuello. Rinoplastia estética, funcional, reparadora y revisional.</p>
                        <div className="row">
                            <div className="col-2 d-flex align-items-center justify-content-start">
                                <ImWhatsapp className="whatsapp-icon"/>
                            </div>
                            <div className="col-10 contact-us-footer">
                                <h3 className="p-0 m-0">Contáctanos</h3>
                                <a href="https://wa.me/+5215532118512?text=Hola%2C%20deseo%20conocer%20m%C3%A1s%20acerca%20de%20sus%20servicios.%20%C2%BFMe%20pueden%20ayudar%3F">+52 (55) 1243 6587</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <h3 className="font-bold">Enlaces rápidos</h3>
                        <ul className="quick-links p-0">
                            <li>
                                <Link to='/rinoexperts'><span>Nosotros</span></Link>
                            </li>
                            <li>
                                <Link to='/servicios'><span>Servicios</span></Link>
                            </li>
                            <li>
                                <a href="https://wa.me/+5215532118512?text=Hola%2C%20deseo%20conocer%20m%C3%A1s%20acerca%20de%20sus%20servicios.%20%C2%BFMe%20pueden%20ayudar%3F">Citas</a>
                            </li>
                            <li>
                                <Link to='/equipo'><span>Equipo</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                        <h3 className="font-bold">Nuestros servicios</h3>
                        <ul className="quick-links p-0">
                            <li>
                                <Link to='/servicios/rinoplastia'><span>Rinoplastia</span></Link>
                            </li>
                            <li>
                                <Link to='/servicios/bichectomia'><span>Bichectomia</span></Link>
                            </li>
                            <li>
                                <Link to='/servicios/mentoplastia'><span>Mentoplastia</span></Link>
                            </li>
                            <li>
                                <Link to='/servicios'><span>Ver más</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                        <h3 className="font-bold">Redes sociales</h3>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/" rel="noreferrer" target="_blank" className="facebook-icon mx-3"><FiFacebook /></a>
                            <a href="https://www.instagram.com/rinoexperts/" rel="noreferrer" target="_blank" className="instagram-icon mx-3"><BsInstagram /></a>
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