import React, { useState, useEffect } from "react";
import "../components/medicalRecord/medicalRecord.css";

import ProgressTop from "../components/progressTop/ProgressTop";
import { useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

import medicalAnswers from "../services/addMedicalAnswers";

import LogoHeader from "../components/logoHeader/LogoHeader";

const MedicalRecord = () => {
  const navigate = useNavigate();

  const idStep = ".step-2";

  const [disease, setDisease] = useState(0);

  const [diseases, setDiseases] = useState("");

  const [medicine, setMedicine] = useState(0);

  const [medicinesDescription, setMedicineDescription] = useState("");

  const [noseSurgery, setNoseSurgery] = useState(0);

  const [injectable, setInjectable] = useState(0);

  const [biopolymers, setBiopolymers] = useState(0);

  const [surgeryFunctional, setSurgeryFunctional] = useState(0);

  const [steticSurgery, setSteticSurgery] = useState(0);

  const [surgeryAmount, setSurgeryAmount] = useState("0");

  const [nasalProsthesis, setNasalProsthesis] = useState(0);

  const [earCartilage, setEarCartilage] = useState(0);

  const [ribCartilage, setRibCartilage] = useState(0);

  const id_user = JSON.parse(localStorage.getItem("id_usuario"));

  const [login, setLogin] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const isLogged = JSON.parse(sessionStorage.getItem("token"));

    // if(!isLogged) {
    //     navigate('/');
    // }
  });

  function onChangeDisease() {
    if (disease === 1) {
      setDisease(0);
      document.querySelector("#diseases").classList.add("hidden");
      setDiseases("");
    } else {
      setDisease(1);
      document.querySelector("#diseases").classList.remove("hidden");
      window.location.href = "#diseases";
    }
  }

  function onChangeDiseases(e) {
    setDiseases(e.target.value);
  }

  function onChangeMedicine() {
    if (medicine === 1) {
      setMedicine(0);
      document.querySelector("#medicinesDescription").classList.add("hidden");
      setMedicineDescription("");
    } else {
      setMedicine(1);
      document
        .querySelector("#medicinesDescription")
        .classList.remove("hidden");
      window.location.href = "#medicinesDescription";
    }
  }

  function onChangeMedicinesDescription(e) {
    setMedicineDescription(e.target.value);
  }

  function onChangeNoseSurgery() {
    if (noseSurgery === 1) {
      setNoseSurgery(0);
      document.querySelector(".injectable").classList.add("hidden");
      document.querySelector(".biopolymers").classList.add("hidden");
      document.querySelector(".surgeryFunctional").classList.add("hidden");
      document.querySelector(".steticSurgery").classList.add("hidden");

      document.querySelector(".surgeryAmount").classList.add("hidden");
      document.querySelector(".nasalProsthesis").classList.add("hidden");
      document.querySelector(".earCartilage").classList.add("hidden");
      document.querySelector(".ribCartilage").classList.add("hidden");
    } else {
      setNoseSurgery(1);
      document.querySelector(".injectable").classList.remove("hidden");
      document.querySelector(".biopolymers").classList.remove("hidden");
      document.querySelector(".surgeryFunctional").classList.remove("hidden");
      document.querySelector(".steticSurgery").classList.remove("hidden");
      window.location.href = "#injectable";
    }
  }

  function onChangeInjectable() {
    if (injectable === 1) {
      setInjectable(0);
    } else {
      setInjectable(1);
    }
  }

  function onChangeBiopolymers() {
    if (biopolymers === 1) {
      setBiopolymers(0);
    } else {
      setBiopolymers(1);
    }
  }

  function onChangeSurgeryFunctional() {
    if (surgeryFunctional === 1) {
      setSurgeryFunctional(0);
    } else {
      setSurgeryFunctional(1);
    }
  }

  function onChangeSteticSurgery() {
    if (steticSurgery === 1) {
      setSteticSurgery(0);
      document.querySelector(".surgeryAmount").classList.add("hidden");
      document.querySelector(".nasalProsthesis").classList.add("hidden");
      document.querySelector(".earCartilage").classList.add("hidden");
      document.querySelector(".ribCartilage").classList.add("hidden");
    } else {
      setSteticSurgery(1);
      document.querySelector(".surgeryAmount").classList.remove("hidden");
      document.querySelector(".nasalProsthesis").classList.remove("hidden");
      document.querySelector(".earCartilage").classList.remove("hidden");
      document.querySelector(".ribCartilage").classList.remove("hidden");
      window.location.href = "#surgeryAmount";
    }
  }

  function onChangeSurgeryAmount(e) {
    setSurgeryAmount(e.target.value);
  }

  function onChangeNasalProsthesis() {
    if (nasalProsthesis === 1) {
      setNasalProsthesis(0);
    } else {
      setNasalProsthesis(1);
    }
  }

  function onChangeEarCartilage() {
    if (earCartilage === 1) {
      setEarCartilage(0);
    } else {
      setEarCartilage(1);
    }
  }

  function onChangeRibCartilage() {
    setRibCartilage(!ribCartilage);
  }

  function onClickSendButton() {
    document.querySelector("#sendMedicalData").setAttribute("disabled", true);
  }

  const medicalData = (e) => {
    e.preventDefault();

    let formData = new FormData();

    formData.append("disease", disease);
    formData.append("diseases", diseases);
    formData.append("medicine", medicine);
    formData.append("medicinesDescription", medicinesDescription);
    formData.append("noseSurgery", noseSurgery);
    formData.append("injectable", injectable);
    formData.append("biopolymers", biopolymers);
    formData.append("surgeryFunctional", surgeryFunctional);
    formData.append("steticSurgery", steticSurgery);
    formData.append("surgeryAmount", surgeryAmount);
    formData.append("nasalProsthesis", nasalProsthesis);
    formData.append("earCartilage", earCartilage);
    formData.append("ribCartilage", ribCartilage);
    formData.append("id_user", id_user);

    medicalAnswers(formData)
      .then((response) => {
        let _respuesta = JSON.parse(response);
        if (_respuesta.response === "success") {
          Swal.fire({
            title: "Tus datos se han guardado con éxito",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });

          setTimeout(() => {
            navigate("/seleccion-nariz");
          }, 2000);
        }
      })
      .catch((error) => {
        document.querySelector("#sendMedicalData").removeAttribute("disabled");
        console.log(error);
      });
  };

  return (
    <div className="medical-record-container black-background pt-3 pb-4">
      <div className="container text-white-color">
        <div className="row">
          <div className="col-12">
            <LogoHeader />
          </div>
          <div className="col-12">
            <ProgressTop idStep={idStep} />
          </div>
          <div className="col-12 text-center">
            <h2 className="font-bold text-red-color">HISTORIAL MÉDICO</h2>
          </div>
          <div className="col-12 text-center pt-3">
            <form className="medical-record-form" onSubmit={medicalData}>
              <label className="font-regular form-label pt-2">
                Los siguientes datos solicitados son de suma importancia, por
                favor tómese el tiempo necesario para completarlos de forma
                correcta.
              </label>

              <div className="form-check form-switch pt-4">
                <label className="form-check-label">
                  ¿Padeces alguna enfermedad?
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="disease"
                  onChange={onChangeDisease}
                />
                {/* Aquí tiene que ir un if para validar si está activo o no */}
                <textarea
                  type="text"
                  id="diseases"
                  className="form-control-plaintext mt-4 hidden"
                  placeholder="Indica las enfermedades que padeces"
                  value={diseases}
                  onChange={onChangeDiseases}
                />
              </div>

              <div className="form-check form-switch pt-4">
                <label className="form-check-label">
                  ¿Te encuentras tomando algún medicamento?
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="medicine"
                  onChange={onChangeMedicine}
                />
              </div>
              {/* Aquí tiene que ir un if para validar si está activo o no */}
              <input
                type="text"
                id="medicinesDescription"
                className="form-control-plaintext pt-3 hidden"
                placeholder="Indica los  medicamentos que estás tomando"
                value={medicinesDescription}
                onChange={onChangeMedicinesDescription}
              />

              <div className="form-check form-switch pt-4">
                <label className="form-check-label">
                  ¿Te has realizado algún procedimiento en la nariz?
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="noseSurgery"
                  value={noseSurgery}
                  onChange={onChangeNoseSurgery}
                />
              </div>
              {/* Aquí tiene que ir un if para validar si está activo o no */}
              <div className="form-check form-switch injectable pt-4 injectable hidden">
                <label className="form-check-label">¿Inyectable?</label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="injectable"
                  value={injectable}
                  onChange={onChangeInjectable}
                />
              </div>

              <div className="form-check form-switch pt-4 biopolymers hidden">
                <label className="form-check-label">
                  ¿Tienes biopolímeros en la nariz?
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="biopolymers"
                  value={biopolymers}
                  onChange={onChangeBiopolymers}
                />
              </div>

              <div className="form-check form-switch pt-4 surgeryFunctional hidden">
                <label className="form-check-label">
                  ¿Cirugía funcional en la nariz?
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="surgeryFunctional"
                  value={surgeryFunctional}
                  onChange={onChangeSurgeryFunctional}
                />
              </div>

              <div className="form-check form-switch pt-4 steticSurgery hidden">
                <label className="form-check-label">
                  ¿Cirugía estética en la nariz?
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="steticSurgery"
                  value={steticSurgery}
                  onChange={onChangeSteticSurgery}
                />
              </div>

              <div className="form-check form-switch pt-4 surgeryAmount hidden">
                <label className="font-regular form-label pt-4">
                  Indica la cantidad de cirugías nasales que te has realizado
                </label>
                <input
                  type="number"
                  className="form-control-plaintext date"
                  id="surgeryAmount"
                  value={surgeryAmount}
                  onChange={onChangeSurgeryAmount}
                />
              </div>
              {/* Aquí tiene que ir un if para validar si está activo o no */}
              <div className="form-check form-switch pt-4 nasalProsthesis hidden">
                <label className="form-check-label">
                  ¿Tienes prótesis nasal?
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="nasalProsthesis"
                  value={nasalProsthesis}
                  onChange={onChangeNasalProsthesis}
                />
              </div>

              <div className="form-check form-switch pt-4 earCartilage hidden">
                <label className="form-check-label">
                  ¿Tienes alguna de las cirugías nasales se utilizó cartílago de
                  oreja?
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="earCartilage"
                  onChange={onChangeEarCartilage}
                />
              </div>

              <div className="form-check form-switch pt-4 ribCartilage hidden">
                <label className="form-check-label">
                  ¿En alguna de las cirugías nasales se utilizó cartílago de
                  costilla?
                </label>
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="ribCartilage"
                  onChange={onChangeRibCartilage}
                />
              </div>

              <div className="col-12 text-center">
                <button
                  id="sendMedicalData"
                  type="submit"
                  className="presentation-next-button mt-3 font-regular"
                  onClick={onClickSendButton}
                >
                  Continuar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalRecord;
