import React from "react";
import "./rinoexpertsPlans.css";
import { GoCheck } from "react-icons/go";
import LightButton from "../lightButton/LightButton";
import BlackButton from "../blackButton/BlackButton";

const RinoexpertsPlans = () => {
  return (
    <div className="container-fluid black-background rinoexpertsPlans">
      <div className="container">
        <div className="text-center rinoexpertsPlans__title">
          <h2>PLANES RINOEXPERTS</h2>
          <p>
            Es muy importante seguir un buen preoperatorio, pues esto va a
            permitir al paciente afrontar la operación con las máximas garantías
            físicas y, sobretodo, psicológicas.
          </p>
        </div>
        <div className="row">
          <div className="col-2 rinoexpertsPlans__hidePlans p-0"></div>
          <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-sx-12 align-self-center rinoexpertsPlans__displayedPlans p-0">
            <h3 className="text-center">Básico</h3>
            <ul className="rinoexpertsPlans__ul">
              <li>
                <GoCheck
                  size={25}
                  className="rinoexpertsPlans__checkIconBasic"
                />{" "}
                Consulta de valoración.
              </li>
              <li>
                <GoCheck
                  size={25}
                  className="rinoexpertsPlans__checkIconBasic"
                />{" "}
                Cirugía.
              </li>
              <li>
                <GoCheck
                  size={25}
                  className="rinoexpertsPlans__checkIconBasic"
                />{" "}
                Medicamentos durante la cirugía.
              </li>
              <li>
                <GoCheck
                  size={25}
                  className="rinoexpertsPlans__checkIconBasic"
                />{" "}
                Rehabilitación.
              </li>
            </ul>
            {/* <LightButton url={"/"} text={"Agendar ahora"} /> */}
            <a href="https://wa.me/+5215532118512?text=Hola,%20deseo%20agendar%20una%20cita" className="blackButton">AGENDAR CITA</a>
            {/* <div classname="d-flex justify-content-center">
                    </div> */}
          </div>
          <div className="col-2 rinoexpertsPlans__hidePlans p-0"></div>
          <div className="col-12 col-xl-3 col-lg-3 col-md-6 col-sm-12 col-sx-12 rinoexpertsPlans__bestSeller p-0 rinoexpertsPlans__displayedPlans p-0">
            <div className="rinoexpertsPlans__bestSeller-title text-center">
              <span>MÁS VENDIDO</span>
            </div>
            <div className="px-3 pb-4">
              <h3 className="text-center pt-3">Premium</h3>
              <ul className="rinoexpertsPlans__ul">
                <li>
                  <GoCheck
                    size={25}
                    className="rinoexpertsPlans__checkIconPremium"
                  />{" "}
                  Consulta de valoración.
                </li>
                <li>
                  <GoCheck
                    size={25}
                    className="rinoexpertsPlans__checkIconPremium"
                  />{" "}
                  Estudios preoperatorios.
                </li>
                <li>
                  <GoCheck
                    size={25}
                    className="rinoexpertsPlans__checkIconPremium"
                  />{" "}
                  Cirugía.
                </li>
                <li>
                  <GoCheck
                    size={25}
                    className="rinoexpertsPlans__checkIconPremium"
                  />{" "}
                  Medicamentos durante y después de la cirugía.
                </li>
                <li>
                  <GoCheck
                    size={25}
                    className="rinoexpertsPlans__checkIconPremium"
                  />{" "}
                  Cambio de vendajes.
                </li>
                <li>
                  <GoCheck
                    size={25}
                    className="rinoexpertsPlans__checkIconPremium"
                  />{" "}
                  Hidratación de tu piel.
                </li>
                <li>
                  <GoCheck
                    size={25}
                    className="rinoexpertsPlans__checkIconPremium"
                  />{" "}
                  Radiografías.
                </li>
                <li>
                  <GoCheck
                    size={25}
                    className="rinoexpertsPlans__checkIconPremium"
                  />{" "}
                  Rehabilitación.
                </li>
                <li>
                  <GoCheck
                    size={25}
                    className="rinoexpertsPlans__checkIconPremium"
                  />{" "}
                  Ozono.
                </li>
                <li>
                  <GoCheck
                    size={25}
                    className="rinoexpertsPlans__checkIconPremium"
                  />{" "}
                  Pulido de rostro..
                </li>
              </ul>
              {/* <BlackButton url={"/"} text={"Agendar ahora"} /> */}
              <a href="https://wa.me/+5215532118512?text=Hola,%20deseo%20agendar%20una%20cita" className="blackButton">AGENDAR CITA</a>
            </div>
          </div>
          <div className="col-2 rinoexpertsPlans__hidePlans p-0"></div>
        </div>
      </div>
    </div>
  );
};

export default RinoexpertsPlans;
