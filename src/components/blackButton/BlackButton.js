import React, { useState, useEffect } from 'react';
import './blackBtton.css';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import addUser from '../../services/addUser';
import Swal from 'sweetalert2';

const BlackButton = ({url,text,modal}) => {

  Modal.setAppElement(document.getElementById('appointmentButton'));

  // const navigate = useNavigate();

  // let subtitle;

  const [modalIsOpen, setIsOpen] = useState(false);
  const [userName, setNombre] = useState("");
  // const [nombreCompleto, setNombreCompleto] = useState("");
  const [lastName, setLastName] = useState("");
  const [genre, setGenre] = useState("");
  const [phone, setPhone] = useState("");
  const [birthday, setBirthday] = useState("");
  const [finalMessage, setFinalMessage] = useState("https://api.whatsapp.com/send?phone=5534090960&text=Hola,%20soy%20"+userName+"%20"+lastName+"%20y%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20service.");

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const personalData = (e) => {
    e.preventDefault();

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
    } else {
      setFinalMessage("https://api.whatsapp.com/send?phone=5534090960&text=Hola,%20soy%20"+userName+"%20"+lastName+"%20y%20me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio%20de%20service");
      console.log(userName);
      console.log(lastName);
      let formData = new FormData();

      formData.append("userName", userName);
      formData.append("lastName", lastName);
      formData.append("birthday", birthday);
      formData.append("genre", genre);
      formData.append("phone", phone);

      addUser(formData)
      .then((response) => {
        let _respuesta = JSON.parse(response);
        console.log('_respuesta:',_respuesta);
        if (_respuesta.response === "success") {
          localStorage.setItem(
            "id_usuario",
            JSON.stringify(_respuesta.idUsuario)
          );
          localStorage.setItem("nombre", JSON.stringify(userName));
          localStorage.setItem("apellidos", JSON.stringify(lastName));
          localStorage.setItem("form",JSON.stringify("short"));
          sessionStorage.setItem(
            "token",
            JSON.stringify(_respuesta.idUsuario)
          );

          Swal.fire({
            title: "Serás redirigido WhatsApp",
            icon: "success",
            showConfirmButton: false,
            timer: 2000,
          });

          setTimeout(() => {
            window.location.replace(finalMessage)
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

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',

      transform: 'translate(-50%, -50%)',
    },
  };  

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = 'var(--aqua-color)';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (modal ? 
    <>
      <button onClick={openModal} id="appointmentButton">Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="black-background personal-data-container pb-4 pt-3">
      <div className="container text-white-color">
        <div className="row">
          {/* <div className="col-12">
            <LogoHeader />
          </div> */}
          {/* <div className="col-12 mt-3">
            <ProgressTop idStep={idStep} />
          </div> */}
          <div className="col-12 text-center">
            <h2 className="font-bold text-red-color">DATOS PERSONALES</h2>
          </div>
          <div className="col-12 pt-3">
            <form
              className="personal-data-form"
              id="personal-data-form"
              onSubmit={personalData}
            >
              <label className="font-regular form-label pt-2">
                Nombre(s):
              </label>
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
      </Modal>
    </>
    :
    <div className="text-center">
      <Link to={url} >
          <button className="blackButton">{text}</button>
      </Link>
    </div>
  )
}

export default BlackButton;