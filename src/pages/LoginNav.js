import React, { useState,useEffect }from 'react';

import Swal from 'sweetalert2';

import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

import "../components/loginNav/loginNav.css";
import loginIcon from "../assets/icons/login.svg";
import { TbAlertCircle } from "react-icons/tb";
import '../components/login/login.css';
import login from '../services/login';
import { useNavigate } from "react-router-dom";

const LoginNav = () => {

    const id_user = JSON.parse(localStorage.getItem('id_usuario'));

    const navigate = useNavigate();

    const [phone, setPhone] = useState('');

    const [key, setKey] = useState('');

    const [passwordShow, setPasswordShow] = useState('password');

    useEffect(() => {
        if(id_user) {
          navigate("/mis-citas");
        }
    },[]);

    function onChangePhone(e) {

      if (!isNaN(e.target.value)) {
          setPhone(e.target.value);
      } else {
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Por favor ingresa los números de tu teléfono con el que realiaste tu registro.',
          })
      }
    }

    function onChangeKey(e) {
      if (!isNaN(e.target.value)) {
        setKey(e.target.value);
      } else {
        Swal.fire({
            icon: 'error',
            title: 'Por favor ingresa tu clave de 4 números',
        })
      }
    }

    function handleViewPassword() {
      if(document.querySelector('#closed-eye-modal').classList[0] === 'icon-eye-modal' || document.querySelector('#closed-eye-modal').classList[1] === 'icon-eye-modal') {
          document.querySelector('#opened-eye-modal').classList.add('icon-eye-modal');
          document.querySelector('#closed-eye-modal').classList.remove('icon-eye-modal')
          setPasswordShow('password');
      } else {
          document.querySelector('#closed-eye-modal').classList.add('icon-eye-modal');
          document.querySelector('#opened-eye-modal').classList.remove('icon-eye-modal');
          setPasswordShow('text');
      }
    }

    const handleLogin = (e) => {
      e.preventDefault();

      if (phone.length <= 9) {
        Swal.fire({
            icon: 'error',
            title: 'Por favor ingresa un número de teléfono válido',
        })
      } else if(key.length < 4) {
        Swal.fire({
            icon: 'error',
            title: 'Por favor ingresa tu clave de 4 dígitos',
        })
      } else {

        let formData = new FormData();
        
        formData.append('phone', phone);
        formData.append('key', key);

        login(formData)
        .then((response) => {
          let _respuesta = JSON.parse(response);
          console.log(_respuesta.data.id_usuario);
          if(_respuesta.response === 'success') {
            localStorage.setItem("nombre",JSON.stringify(_respuesta.data.nombre));
            localStorage.setItem("apellidos",JSON.stringify(_respuesta.data.apellidos));
            localStorage.setItem("id_usuario",JSON.stringify(_respuesta.data.id_usuario));
            sessionStorage.setItem("token",JSON.stringify(_respuesta.data.id_usuario));
            navigate("/mis-citas");
          } else{
            Swal.fire({
              icon: 'error',
              title: 'Ha ocurrido un error, verifica tus datos',
            })
          } 

        })
        .catch((error) => {
          console.log(error);
        });
      }
    }
  return (
    <div className="container-fluid black-background loginNav">
      <div className="row d-flex align-items-center py-5">
        <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 text-center order-1 order-sm-1 order-md-1 order-lg-0 order-xl-0 order-xxl-0">
          <img src={loginIcon} alt="Login" className="img-fluid" />
        </div>
        <div className="col-12 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 px-5 order-0 order-sm-0 order-md-0 order-lg-1 order-xl-1 order-xxl-1 loginNav__form">
          <h2 className="text-white">Iniciar sesión</h2>
          <p className="text-gray-color">
            <TbAlertCircle /> Recuerda que únicamente podrás ingresar si ya has
            agendado una cosnulta virtual.
          </p>
          {/* <Login /> */}
          <div className="form-inital-modal" id="modal-initial-login">
            <form
              className="personal-data-form"
              id="personal-data-form"
              onSubmit={handleLogin}
            >
              <label className="font-regular form-label pt-2">Teléfono:</label>
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

              <label className="font-regular form-label pt-2">Clave:</label>
              <div className="d-flex">
                <input
                  id="key"
                  type={passwordShow}
                  className="form-control-plaintext state"
                  placeholder="Clave"
                  maxLength="4"
                  value={key}
                  onChange={onChangeKey}
                  required
                />
                <span
                  className="m-2 show-password-icon-modal"
                  onClick={handleViewPassword}
                >
                  <AiOutlineEye
                    id="opened-eye-modal"
                    className="icon-eye-modal fs-3"
                  />
                  <AiOutlineEyeInvisible
                    id="closed-eye-modal"
                    className="fs-3"
                  />
                </span>
              </div>
              <div id="passHelp" className="form-text mt-1">
                Recuerda que tu contraseña es de 4 números
              </div>

              <button
                type="submit"
                className="initialmodal-login-button font-regular mt-3"
              >
                Iniciar sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginNav;
