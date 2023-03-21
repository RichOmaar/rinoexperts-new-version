import React, { useEffect, useState } from 'react';
import '../components/Lottery/lottery.css';
import Team from '../assets/img/team-igb.jpg';
import getParticipants from '../services/getLottery';
import slider from '../assets/img/banner-selectivo.png';
import OwlCarousel from "react-owl-carousel";
import config from '../config';

const Lottery = () => {
  console.log(config.urlApi+'assets/images/team/')
  const [participants, setParticipants] = useState([]);

  const team = [
    {
      id: 1,
      img: 'alessandro-77.jpg',
      name: 'Alessandro',
    },
    {
      id: 2,
      img: 'angel-7.jpg',
      name: 'Angel',
    },
    {
      id: 3,
      img: 'axel-3.jpg',
      name: 'Axel',
    },
    {
      id: 4,
      img: 'brandon-10.jpg',
      name: 'Brandon',
    },
    {
      id: 5,
      img: 'david-27.jpg',
      name: 'David',
    },
    {
      id: 6,
      img: 'dylan-32.jpg',
      name: 'Dylan',
    },
    {
      id: 7,
      img: 'elias-15.jpg',
      name: 'Elias',
    },
    {
      id: 8,
      img: 'jefferson-10.jpg',
      name: 'Jefferson',
    },
    {
      id: 9,
      img: 'marco-20.jpg',
      name: 'Marco',
    },
    {
      id: 10,
      img: 'miguel-72.jpg',
      name: 'Miguel',
    }
  ];

  const state= {
    responsive:{
        0: {
            items: 2,
            center: true
        },
        576: {
            items: 3,
            center: true
        },
        768: {
            items: 3,
            center: true
        },
        992: {
            items: 4,
            center: true
        },
        1200: {
            items: 4,
            center: true
        },
    },
  }

  useEffect(() => {
    countDown();
    getAllParticipants();
  }, []);

  function countDown() {
    var countDownDate = new Date("March 28, 2023 20:00:00").getTime();

    var x = setInterval(function() {

      var now = new Date().getTime();
        
      var distance = countDownDate - now;
        
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
      document.querySelector(".countdown").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
        
      if (distance < 0) {
        clearInterval(x);
        document.querySelector(".countdown").innerHTML = "El ganador será contactado a través de una llamada telefoónica";
      }
    }, 1000);
  }

  function getAllParticipants() {
    getParticipants().then((response) => {
      let _response = JSON.parse(response);

      if(_response.response === 'success') {
        setParticipants(_response.data);
      }
    })
  }

  function cards(participant) {
    if(participant.paid === '1') {
      return (
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-sm-5 mt-3'>
          <div className='spaces__container-card d-flex align-items-center'>
            <img src={participant.image} className="rounded-circle p-4" style={{width: '150px'}} alt="Avatar" />
            <div>
              <h3 className='font-bold'>Número: {participant.id_lottery}</h3>
              <p className='text-justify'>{participant.name}</p>
              <span><a href={participant.social_url} target='_blank' rel='noreferrer'>Red Social: {participant.name}</a></span>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-sm-5 mt-3'>
          <div className='spaces__container-card d-flex align-items-center p-4'>
              <div className="rounded-circle empty">
                <h2>?</h2>
              </div>
              <div className='mx-4'>
                <h3 className='font-bold'>Número: {participant.id_lottery}</h3>
              </div>
          </div>
        </div>
      )
    } 
  }

  return (
    <div>
      <div className='countdown__container py-3 text-center shadow'>
        <span className='countdown__title'>Faltan: </span>
        <span className='countdown'></span>
      </div>
      {/* <h1 className='text-center font-bold my-3'>PARTICIPA PARA GANAR UNA RINOPLASTIA</h1> */}
      <img src={slider} alt='slider' className='d-block w-100' />
      <section className='container my-5'>
        <div className='row d-flex align-items-center'>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <h2 className='font-bold fs-1 text-center'>PARTICIPA PARA GANAR UNA RINOPLASTIA</h2>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <video src={config.urlApi+'assets/rifa/intro.mp4'} class="waterTreatment__video embed-responsive-item shadow rounded" type="video/mp4" autoplay height="450" controls></video>
          </div>
        </div>
      </section>

      <section className='container my-5'>
        <div className='row d-flex align-items-center'>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <img src={Team} alt='team' className='img-fluid countdown__img shadow' />
          </div>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12 mt-sm-5'>
            <p className='text-justify'>
              ¿Quiénes son estos Pequeños de tan solo 9 y 10 años? 🤷‍♂️🤷🏽‍♀️
              <br/>
              <br/>
              Con gran Orgullo 🤩 podemos decir, que ellos son el SELECTIVO TAMAULIPAS DE BASKETBALL EN LA CATEGORIA 2013 ⛹🏻⛹️‍♂️⛹🏿‍♂️ los cuales en cada cancha 🏀 han tenido grandes y fuertes batallas dejando su corazón y garra dentro, 💪🏻 obteniendo Campeonatos para el Estado de Tamaulipas 🏆en el cual han mostrado su gran desafío como grandes jugadores. 
              <br/>
              <br/>
              Pequeños que no han tenido miedo al fracaso y han luchado Juntos hasta el ultimo segundo.🥰
              <br/>
              <br/>
              Nuestros niños los cuales cada uno pertenece a distintos clubs 🏀del estado han aprendido a trabajar y respetar juntos el trabajo de cada uno. Estos chiquitines son el gran talento Tamaulipeco el cual en base a sus grandes resultados han obtenido su Pase al Torneo International Global en Colombia Medellín 🇨🇴, representando con gran Orgullo a Nuestro País 🇲🇽
              <br/>
              <br/>
              Te invitamos a ser parte de esta nueva y gran aventura para estos chiquitines!!!
              <br/>
              <br/>
              “El talento gana partidos, pero el trabajo en equipo y la inteligencia ganan campeonatos.” 
            </p>
          </div>
        </div>
      </section>

      <section className='container my-5'>
        <div className='row d-flex align-items-center'>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <h2 className='font-bold fs-1 text-center'>CONOCE LAS BASES</h2>
          </div>
          <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
            <video src={config.urlApi+'assets/rifa/bases.mp4'} class="waterTreatment__video embed-responsive-item shadow rounded" type="video/mp4" autoplay height="450" controls></video>
          </div>
        </div>
      </section>

      <section className='container my-5 spaces__container shadow'>
        <div className='row d-flex align-items-center'>
          <h2 className='font-bold fs-1'>Lugares disponibles</h2>
          {participants?.map((participant) => (
            cards(participant)
          ))}
          {/* <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mt-sm-5'>
            <div className='spaces__container-card d-flex align-items-center'>
              <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" className="rounded-circle p-4" style={{width: '150px'}} alt="Avatar" />
              <div>
                <h3 className='font-bold'>Lugar 1</h3>
                <p className='text-justify'>Pancho Pantera</p>
                <span><a href=''>Red Social: Pancho Pantera</a></span>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      <section>
          <h2 className='text-center fw-bold fs-1 mb-5'>CONOCE A LOS CAMPEONES</h2>
          <OwlCarousel
              className="owl-theme"
              items="5"
              margin={20}
              autoplay={true}
              loop
              touchDrag={true}
              animateIn={true}
              center={true}
              responsive={state.responsive}
              >
              {team?.map((membrer) => (
                <div key={membrer.id} className="shadow team__members-card">
                  <img src={config.urlApi+'assets/images/team/'+membrer.img} alt={membrer.name} />
                  <h3 className='fw-bold fs-2 text-center py-3 text-white-color'>{membrer.name}</h3>
                </div>
              ))}
          </OwlCarousel>
      </section>

      <section className='my-5 team__members-card container'>
        <h2 className='text-center fw-bold fs-1 p-5 text-white-color'>CONOCE TODOS LOS DETALLES PARA PARTICIPAR</h2>
        <div class="accordion pb-4" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <h2 className='fs-3'>Pasos para participar:</h2>
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>
                  <ol>
                    <li>Realiza una transferencia de $1,000 a la siguiente cuenta: 014180605774788011, a nombre de Nohemí Charlotte Flores Zolozabal, con el concepto de “rifa”.</li>
                    <li>Escoge un número disponible del 1 al 30 y envía el número elegido junto con el comprobante de transferencia al WhatsApp: <a href='https://wa.me/+5215532118512' target="_blank" rel="noreferrer" className='whatsapp'>55 3211 8512</a>.</li>
                    <li>Revisa el resultado de la rifa a través de un live en nuestra página de instagram <a href='https://www.instagram.com/rinoexperts/' target="_blank" rel="noreferrer" className='whatsapp'>(@rinoexperts)</a> el 30 de Marzo del 2023 a las 8:00pm.</li>
                  </ol>
                </strong>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <h2 className='fs-3'>Términos y condiciones:</h2>
              </button>
            </h2>
            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>
                  <ul>
                    <li>La rifa es abierta para todas las personas mayores de 18 años y residentes de México.</li>
                    <li>El premio no es transferible ni canjeable por dinero en efectivo u otros servicios.</li>
                    <li>El ganador de la rifa será elegido al azar y se anunciará públicamente en la fecha establecida.</li>
                    <li>El ganador deberá someterse a una evaluación médica para determinar su elegibilidad para la cirugía y cumplir con cualquier requisito médico adicional previo a la cirugía.</li>
                    <li>La organización benéfica se reserva el derecho de cancelar o modificar la rifa en cualquier momento por razones justificadas.</li>
                    <li>La organización benéfica no asume ninguna responsabilidad por lesiones, pérdidas o daños relacionados con la cirugía de rinoplastia ultrasónica.</li>
                    <li>La rifa es realizada con fines benéficos, los fondos recaudados serán destinados al Selectivo Tamaulipas Categoría 2013.</li>
                    <li>La participación en la rifa implica la aceptación de todos los términos y condiciones establecidos previamente.</li>
                  </ul>
                </strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Lottery;