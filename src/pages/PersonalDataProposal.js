import React, { useState, useEffect } from "react";
import "../components/personalDataProposal/personalDataProposal.css";

import ProgressTop from "../components/progressTop/ProgressTop";
import validatePhone from "../services/validatePhoneNumber";
import addUser from "../services/addUser";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import getServices from "../services/getAllServices";

const PersonalDataProposal = () => {
  const idStep = ".step-1";

  const navigate = useNavigate();

  const [userName, setNombre] = useState("");

  const [lastName, setLastName] = useState("");

  const [genre, setGenre] = useState("");

  const [phone, setPhone] = useState("");

  const [birthday, setBirthday] = useState("");

  const [procedure, setProcedure] = useState("");

  const [services, setServices] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetAllServices();
  }, []);

  function onChangeUserName(e) {
    setNombre(e.target.value);
  }

  function onChangeLastName(e) {
    setLastName(e.target.value);
  }

  function onChangeGenre(e) {
    setGenre(e.target.value);
  }

  function onChangePhone(e) {
    if (!isNaN(e.target.value)) {
      setPhone(e.target.value);
      // if (e.target.value.length === 10) {
      //   let formData = new FormData();

      //   formData.append("phone", e.target.value);

      //   validatePhone(formData)
      //   .then((response) => {
      //     let _respuesta = JSON.parse(response);

      //     if (_respuesta.response === "error") {
      //       Swal.fire({
      //         icon: "error",
      //         text: "Este número ya se encuentra registrado, por favor inicia sesión o verifica que tu número sea correcto",
      //       });
      //       setPhone("");
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      // }
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor ingresa los números de tu teléfono de contacto",
      });
    }
  }

  function onChangeBirthday(e) {
    setBirthday(e.target.value);
  }

  function onChangeProcedure(e) {
    setProcedure(e.target.value);
  }

  function fetAllServices() {
    getServices().then((response) => {
      let _respuesta = JSON.parse(response);

      if (_respuesta.response === "success") {
        setServices(_respuesta.data);
      }
    });
  }

  const personalData = (e) => {
    e.preventDefault();
    console.log(procedure);
    if (genre === "") {
      Swal.fire({
        icon: "error",
        title: "Por favor selecciona un género",
      });
    } else if (phone.length <= 9) {
      Swal.fire({
        icon: "error",
        title: "Por favor ingresa un número de teléfono válido",
      });
    } else if (procedure === "") {
      Swal.fire({
        icon: "error",
        title: "Por favor selecciona el procedimiento en el que estás interesado",
      });
    } else {
      let formData = new FormData();

      formData.append("userName", userName);
      formData.append("lastName", lastName);
      formData.append("birthday", birthday);
      formData.append("genre", genre);
      formData.append("phone", phone);
      formData.append("procedure", procedure);

      addUser(formData)
        .then((response) => {
          let _respuesta = JSON.parse(response);
          console.log("_respuesta:", _respuesta);
          if (_respuesta.response === "success") {
            localStorage.setItem(
              "id_usuario",
              JSON.stringify(_respuesta.idUsuario)
            );
            localStorage.setItem("nombre", JSON.stringify(userName));
            localStorage.setItem("apellidos", JSON.stringify(lastName));
            localStorage.setItem("form", JSON.stringify("short"));
            localStorage.setItem("procedimiento", JSON.stringify(procedure));
            sessionStorage.setItem(
              "token",
              JSON.stringify(_respuesta.idUsuario)
            );

            Swal.fire({
              title: "Tus datos se han guardado con éxito",
              icon: "success",
              showConfirmButton: false,
              timer: 2000,
            });

            setTimeout(() => {
              navigate("/historial-medico");
            }, 2000);
          }
        })
        .catch((error) => {
          document
            .querySelector("#sendPersonalData")
            .removeAttribute("disabled");
          console.log(error);
        });
    }
  };

  return (
    <div className="black-background personal-data-container pb-4 pt-3">
      <div className="container text-white-color">
        <div className="row">
          {/* <div className="col-12">
            <LogoHeader />
          </div> */}
          <div className="col-12 mt-3">
            <ProgressTop idStep={idStep} />
          </div>
          <div className="col-12 text-center">
            <h2 className="font-bold text-red-color">DATOS PERSONALES</h2>
          </div>
          <div className="col-12 pt-3">
            <form
              className="personal-data-form"
              id="personal-data-form"
              onSubmit={personalData}
            >
              <label className="font-regular form-label pt-2">Nombre(s):</label>
              <input
                id="userName"
                type="text"
                className="form-control-plaintext name"
                placeholder="Escribe tu nombre completo"
                value={userName}
                onChange={onChangeUserName}
                required
              />

              <label className="font-regular form-label pt-2">Apellidos:</label>
              <input
                id="lastName"
                type="text"
                className="form-control-plaintext last-name"
                placeholder="Escribe tus apellidos"
                value={lastName}
                onChange={onChangeLastName}
                required
              />

              <label className="font-regular form-label pt-2">Género:</label>
              <select
                id="genre"
                className="form-select"
                aria-label="Default select example"
                value={genre}
                onChange={onChangeGenre}
                required
              >
                <option>Selecciona una opción...</option>
                <option value="F">Femenino</option>
                <option value="M">Másculino</option>
              </select>

              <label className="font-regular form-label pt-2">Teléfono:</label>
              <p className="text-gray-color">Ingresa máximo 10 dígitos</p>
              <input
                id="phone"
                type="tel"
                className="form-control-plaintext phone"
                placeholder="5512345678"
                value={phone}
                onChange={onChangePhone}
                maxLength="10"
                required
              />

              <label className="font-regular form-label pt-2">
                Procedimiento:
              </label>
              <p className="text-gray-color">
                Selecciona el procedimiento que te gustaría realizarte
              </p>

              <select
                id="procedure"
                className="form-select"
                aria-label="Default select example"
                value={procedure}
                onChange={onChangeProcedure}
                required
              >
                <option defaultValue>Selecciona una opción</option>

                {!services ? (
                  <option defaultValue>Cargando...</option>
                ) : (
                  services.map(
                    (service) => (
                      <option value={service.id_servicio}>{service.nombre}</option>
                    )
                  )
                )}
              </select>

              <h4 className="text-center pt-3 font-semibold">
                Fecha de nacimiento
              </h4>

              <label className="font-regular form-label pt-2">
                Fecha de nacimiento:
              </label>
              <input
                id="birthday"
                type="date"
                className="form-control-plaintext date"
                value={birthday}
                onChange={onChangeBirthday}
                required
              />

              <div className="text-center">
                <button
                  type="submit"
                  id="sendPersonalData"
                  className="presentation-next-button font-regular mt-3"
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

export default PersonalDataProposal;
