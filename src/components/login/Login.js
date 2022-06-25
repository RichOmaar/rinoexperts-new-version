import React, { useState }from 'react';

import Swal from 'sweetalert2';

import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

import login from '../../services/login.js';

import './login.css';

const Login = () => {

    // const navigate = useNavigate();

    // const MySwal = withReactContent(Swal);

    const [phone, setPhone] = useState('');

    const [key, setKey] = useState('');

    const [passwordShow, setPasswordShow] = useState('password');

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
          
          if(_respuesta.id_usuario){
            localStorage.setItem("nombre",JSON.stringify(_respuesta['nombre']));
            localStorage.setItem("apellidos",JSON.stringify(_respuesta['apellidos']));
            sessionStorage.setItem("token",JSON.stringify(_respuesta['id_usuario']));
            window.location.href = "/detalles-citas";
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
    <div className="form-inital-modal" id="modal-initial-login" >
      <form className="personal-data-form" id="personal-data-form" onSubmit={ handleLogin }>

        <label className="font-regular form-label pt-2">Teléfono:</label>
        <input id="phone" type="tel" className="form-control-plaintext phone" placeholder="5512345678" value={ phone } onChange={ onChangePhone } maxLength="10" required/>

        <label className="font-regular form-label pt-2">Clave:</label>
        <div className="d-flex">
        <input id="key" type={ passwordShow } className="form-control-plaintext state" placeholder="Clave" maxLength="4" value={ key } onChange={ onChangeKey } required/>
        <span className="m-2 show-password-icon-modal" onClick={ handleViewPassword }>
            <AiOutlineEye id="opened-eye-modal" className="icon-eye-modal fs-3"/>
            <AiOutlineEyeInvisible id="closed-eye-modal" className="fs-3"/>
        </span>
        </div>
        <div id="passHelp" className="form-text mt-1">Recuerda que tu contraseña es de 4 números</div>

        <button type="submit" className="initialmodal-login-button font-regular mt-3">Iniciar sesión</button>

      </form>
    </div>
  )
}

export default Login;