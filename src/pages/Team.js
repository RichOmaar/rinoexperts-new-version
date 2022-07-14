import React from 'react';
import '../components/team/team.css';

import config from '../config';

import { IoIosArrowUp } from 'react-icons/io';

const Team = () => {

    function loadMoreMembers(e) {
        e.preventDefault();

        document.querySelectorAll('#team-membrer').forEach(membrer => {
            membrer.classList.remove("hidden-membrer")
        })

        document.querySelector('#load-more-members').classList.add("hidden");
        document.querySelector('#load-less-members').classList.remove("hidden");

        window.location.href = "#our-team-tittle";

    }

    function lessMembers(e) {
        e.preventDefault();

        document.querySelectorAll('#team-membrer').forEach(membrer => {
            membrer.classList.add("hidden-membrer")
        });
        document.querySelector('#load-more-members').classList.remove("hidden");
        document.querySelector('#load-less-members').classList.add("hidden");

        window.location.href = "#our-team-tittle";

    }

  return (
    <div className="black-background team-container">
        <div className="container py-3">
            <div className="col-xs-12 col-sm-12">
                <h2 className="font-bold text-white-color">Conoce A Nuestro Equipo</h2>
            </div>
            <div className="col-xs-12 col-sm-12">
                <p className="text-white-color"><em>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</em></p>
            </div>
            <h2 className="font-bold text-white-color text-center my-4" id="our-team-tittle">NUESTROS ESPECIALISTAS</h2>
            <div className="row text-center text-white-color px-3 d-flex justify-content-center">
                <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-3">
                    <img src={config.urlApi+'assets/images/hombre-1.png'} className="img-fluid team-image my-2" alt="..." />
                    <p className="m-0">Dr. Jorge Ortiz</p>
                    <p className="m-0 font-light team-specialty">CIRUJANO MAXILOFACIAL</p>
                </div>
                <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-3">
                    <img src={config.urlApi+'assets/images/mujer-1.png'} className="img-fluid team-image my-2" alt="..." />
                    <p className="m-0">Dra. Charlotte Flores</p>
                    <p className="m-0 font-light team-specialty">REHABILITACIÓN</p>
                </div>
                <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-3">
                    <img src={config.urlApi+'assets/images/hombre-2.png'} className="img-fluid team-image my-2" alt="..." />
                    <p className="m-0">Pamela Anderson</p>
                    <p className="m-0 font-light team-specialty">AUXILIAR REHABILITACIÓN</p>
                </div>
                <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-3">
                    <img src={config.urlApi+'assets/images/mujer-2.png'} className="img-fluid team-image my-2" alt="..." />
                    <p className="m-0">Cristiano Ronaldo</p>
                    <p className="m-0 font-light team-specialty">AUXILIAR REHABILITACIÓN</p>
                </div>

                <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-3 hidden-membrer" id="team-membrer">
                    <img src={config.urlApi+'assets/images/hombre-1.png'} className="img-fluid team-image my-2" alt="..." />
                    <p className="m-0">Dr. Jorge Ortiz</p>
                    <p className="m-0 font-light team-specialty">CIRUJANO MAXILOFACIAL</p>
                </div>
                <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-3 hidden-membrer" id="team-membrer">
                    <img src={config.urlApi+'assets/images/mujer-1.png'} className="img-fluid team-image my-2" alt="..." />
                    <p className="m-0">Dra. Charlotte Flores</p>
                    <p className="m-0 font-light team-specialty">REHABILITACIÓN</p>
                </div>
                <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-3 hidden-membrer" id="team-membrer">
                    <img src={config.urlApi+'assets/images/hombre-2.png'} className="img-fluid team-image my-2" alt="..." />
                    <p className="m-0">Pamela Anderson</p>
                    <p className="m-0 font-light team-specialty">AUXILIAR REHABILITACIÓN</p>
                </div>
                <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-3 hidden-membrer" id="team-membrer">
                    <img src={config.urlApi+'assets/images/mujer-2.png'} className="img-fluid team-image my-2" alt="..." />
                    <p className="m-0">Cristiano Ronaldo</p>
                    <p className="m-0 font-light team-specialty">AUXILIAR REHABILITACIÓN</p>
                </div> 

                <div className="col-6 col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 p-3 hidden-membrer" id="team-membrer">
                    <img src={config.urlApi+'assets/images/hombre-1.png'} className="img-fluid team-image my-2" alt="..." />
                    <p className="m-0">Dr. Jorge Ortiz</p>
                    <p className="m-0 font-light team-specialty">CIRUJANO MAXILOFACIAL</p>
                </div>

                <div className="col-12 my-3">
                    <button className="team-more-btn mt-4" id="load-more-members" onClick={(e) => loadMoreMembers(e) }>Ver más</button>
                    <span className="mt-4 hidden" id="load-less-members" onClick={(e) => lessMembers(e) }><IoIosArrowUp  className="floating"/></span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Team;