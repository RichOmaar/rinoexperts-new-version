import React from "react";
import appointment from "../assets/icons/appointment.svg";
import "../components/userDashboard/userDashboard.css";
import OwlCarousel from "react-owl-carousel";
import ReactPlayer from 'react-player'

const UserDashboard = () => {

  const responsive = {
    0: {
      items: 2,
      autoWidth: true,
    },
    576: {
      items: 2,
      autoWidth: true,
    },
    768: {
      items: 2,
      autoWidth: true,
    },
    992: {
      items: 2,
      autoWidth: true,
    },
    1200: {
      items: 2,
      autoWidth: true,
    },
  };

  return (
    <div className="black-background userDashboard">
      <div className="container py-5">
        <div className="row">
          <div className="col-12">
            <h2 className="text-white">Mis citas</h2>
          </div>
          <hr className="userDashboard__hr" />
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 py-4 d-flex align-items-center">
            <h5 className="text-white">
              En este espacio vas a encontrar tus próximas citas así como
              recomendaciones que te pueden servir para acompañar todo tu
              proceso.
            </h5>
          </div>
          <div className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 py-4 d-flex justify-content-center userDashboard__icon">
            <img src={appointment} alt="appointment" className="img-fluid" />
          </div>
          <hr className="userDashboard__hr" />
          <div className="col-12">
            <h2 className="text-white">Próximas citas</h2>
          </div>
          <div class="container__card text-white my-3 col-3">
            <div class="box">
              <span class="title my-2">CITA ONLINE</span>
              <div>
                <strong>Fecha:</strong>
                <p>10/10/2022</p>
                <strong>Hora:</strong>
                <p>16:30</p>
                <div className="text-center">
                  <button type="button" class="lightButton">Confirmar</button>
                </div>
                <span>Ayuda</span>
              </div>
              {/* <div className="d-flex justify-content-between">
                <p className="">Cancelar</p>
                <p className="">Reagendar</p>
              </div> */}
            </div>
          </div>
          <hr className="userDashboard__hr" />
          <div className="col-12">
            <h2 className="text-white">Recomendaciones</h2>
          </div>
          <div className="col-12 mt-4">
            <OwlCarousel
                className="owl-theme"
                items="2"
                margin={15}
                // autoplay={true}
                loop
                touchDrag={true}
                animateIn={true}
                center={true}
                nav={true}
                responsive={responsive}
                >
                <div className="player-wrapper">
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                </div>
                <div className="player-wrapper">
                  <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                </div>
                <div className="player-wrapper">
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                </div>
                <div className="player-wrapper">
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                </div>
                <div className="player-wrapper">
                <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'/>
                </div>
                {/* <div className="player-wrapper">
                  <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </div>
                <div className="player-wrapper">
                  <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </div>
                <div className="player-wrapper">
                  <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </div>
                <div className="player-wrapper">
                  <ReactPlayer className='react-player' url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </div> */}
            </OwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
