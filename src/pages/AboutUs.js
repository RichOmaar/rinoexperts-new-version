import React, { useEffect } from "react";
import "../components/aboutUs/aboutUs.css";
import Main from "../assets/img/about-us-main.jpg";
import BlackButton from "../components/blackButton/BlackButton";
import HelpIcon from "../assets/icons/help.svg";
import Location from "../components/location/Location";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0,0);
    const obj1 = document.getElementById("valueClients");
    animateValue(obj1, 0, 10, 1200);
    const obj2 = document.getElementById("valueCoverage");
    animateValue(obj2, 0, 100, 15000);
  }, []);

  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }

  return (
    <div className="aboutUs black-background container-fluid text-white-color p-0">
      <div className="container py-5 aboutUs__firstContainer">
        <div className="row">
          <div
            className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 aboutUs__paddingContent"
            data-aos="fade-up"
          >
            <h1 className="font-semibold fs-2 m-0">
              Expertos en cosmética facial y rinoplastias.
            </h1>
          </div>
          <div
            className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 mt-4 align-self-end aboutUs__paddingContent"
            data-aos="fade-up"
          >
            <p className="text-muted font-light-italic m-0">
              Esto significa que aceptamos tus necesidades y deseos, que un
              cambio en tu apariencia puede ser la motivación que necesitas para
              la superación interior, no para ser tú, sino para promover una
              mayor confianza en ti mismo y autoestima.
            </p>
            {/* <p className="text-muted font-light-italic m-0">
              Nuestro principal objetivo es que nuestros pacientes queden
              satisfechos con los resultados obtenidos. Al visitarnos, usted
              siente que su tratamiento o el procedimiento está en manos de los
              mejores cirujanos y expertos médicos y es de alta calidad. Esto es
              lo que ofrece la cirugía plástica: mejorar nuestra apariencia e
              inspirarnos a crear nuevos hábitos.
            </p>
            <p className="text-muted font-light-italic m-0">
              Ayúdanos a sentirnos mejor con nosotros mismos. En resumen, ser
              más feliz. Una sonrisa y una vida sana seguirán siendo importantes
              para la felicidad.
            </p> */}
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <img
          src={Main}
          className="img-fluid"
          alt="Dr. Jorge Ortiz RINOEXPERTS"
        />
      </div>
      <hr className="aboutUs__hr" />
      <div className="container my-5">
        <div className="row">
          <div
            className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 aboutUs__paddingContent"
            data-aos="fade-up"
          >
            <h2 className="title-light green-strong-text-color fs-2 aboutUs__paddingContent--partTitle">
              Nuestro principal objetivo es que nuestros pacientes queden
              satisfechos con los resultados obtenidos.
            </h2>
            <h2 className="title-light green-strong-text-color fs-1 mb-4 text-center aboutUs__paddingContent--fullTitle">
              Nuestro principal objetivo es que nuestros pacientes queden
              satisfechos con los resultados obtenidos.
            </h2>
          </div>
          <div
            className="col-12 col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 aboutUs__paddingContent"
            data-aos="fade-up"
          >
            <h3 className="mb-3 title-regular">RINOEXPERTS</h3>
            <p className="font-regular text-muted">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo.
            </p>
            <p className="font-regular text-muted">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <p className="font-regular text-muted">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
              consectetur, adipisci velit, sed quia non numquam eius modi
              tempora incidunt ut labore et dolore magnam aliquam quaerat
              voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem
              ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
              consequatur? Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur, vel illum
              qui dolorem eum fugiat quo voluptas nulla pariatur?
            </p>
          </div>
          <div className="col-12 aboutUs__quote mt-5" data-aos="fade-up">
            <h2 className="fs-1 font-bold-italic">
              <q>
                Aunque viajemos por todo el mundo para encontrar la belleza,
                debemos llevarla con nosotros para poder encontrarla.
              </q>
            </h2>
            <h2 className="fs-3 text-muted">- Emerson.</h2>
          </div>
        </div>
      </div>
      <hr className="aboutUs__hr" />
      <div className="container my-5">
        <div className="row">
          <div className="col-4 text-center" data-aos="fade-up">
            <span
              className="aboutUs__results--numbers green-tertiary-text-color"
              id="valueClients"
            >
              10
            </span>
            <span className="aboutUs__results--numbers green-tertiary-text-color">
              +
            </span>
            <p className="font-regular">Ańos de experiencia</p>
          </div>
          <div className="col-4 text-center" data-aos="fade-up">
            <span className="aboutUs__results--numbers green-tertiary-text-color">
              2k+
            </span>
            <p className="font-regular">Cirugías realizadas</p>
          </div>
          <div className="col-4 text-center" data-aos="fade-up">
            <span
              className="aboutUs__results--numbers green-tertiary-text-color"
              id="valueCoverage"
            >
              100
            </span>
            <span className="aboutUs__results--numbers green-tertiary-text-color">
              %
            </span>
            <p className="font-regular">Clientes satisfechos</p>
          </div>
        </div>
      </div>
      <Location />
      <div className="aboutUs__questions">
        <div className="container">
          <div className="row">
            <div
              className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 order-1 order-xl-0 order-lg-0 order-md-1 order-sm-1 order-xs-1 align-self-center aboutUs__paddingContent"
              data-aos="fade-up"
            >
              <h2 className="aboutUs__questions--title font-bold">
                ¿Te quedaste con dudas?
              </h2>
              <h2 className="aboutUs__questions--title font-bold">
                Nuestro equipo está feliz de ayudarte.
              </h2>
              <p className="text-muted font-light">
                Pregunta por nuestros servicios, ubicación, presupuestos o
                cualquier otra cosa. Nuestros representantes están listos para
                ayudarte.
              </p>
              <div className="mt-5 aboutUs__contact" data-aos="fade-up">
                <a href="https://wa.me/+5215532118512?text=Hola%2C%20deseo%20conocer%20m%C3%A1s%20acerca%20de%20sus%20servicios.%20%C2%BFMe%20pueden%20ayudar%3F" className="blackButton">Contáctanos</a>
              </div>
            </div>
            <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 order-0 order-xl-1 order-lg-1 order-md-0 order-sm-0 order-xs-0 align-self-center text-center aboutUs__paddingContent">
              <img
                src={HelpIcon}
                alt="Imagen de contacto"
                className="aboutUs__icon img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
