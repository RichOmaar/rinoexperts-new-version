import React, { useState } from 'react';
import '../components/personalData/personalData.css';
import ProgressTop from '../components/progressTop/ProgressTop';
import InitialModal from '../components/initialModal/InitialModal';

import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';

import LogoHeader from '../components/logoHeader/LogoHeader';

const PersonalData = () => {

    const navigate = useNavigate();

    const idStep = ".step-1";

    // const MySwal = withReactContent(Swal)

    const [userName, setNombre] = useState('');
    
    const [lastName, setLastName] = useState('');
    
    const [genre, setGenre] = useState('');
    
    const [email, setEmail] = useState('');
    
    const [phone, setPhone] = useState('');
    
    const [birthday, setBirthday] = useState('');
    
    const [postalCode, setPostalCode] = useState('');
    
    const [state, setState] = useState('');
    
    const [municipality, setMunicipality] = useState('');
    
    const [suburb, setSuburb] = useState('');
    
    const [key, setKey] = useState('');

    const [passwordShow, setPasswordShow] = useState('password');

    // function getTokenSession() {
    //     const tokenString = sessionStorage.getItem('token');
    //     const userToken = JSON.parse(tokenString);
    //     console.log(userToken['token']);
    //     return userToken['token'];
    // }

    // const token = getTokenSession();
    
    function onChangeUserName(e) {
        setNombre(e.target.value);
    }

    function onChangeLastName(e) {
        setLastName(e.target.value);
    }
   
    function onChangeGenre(e) {
        setGenre(e.target.value);
    }
   
    function onChangeEmail(e) {
        setEmail(e.target.value);
    }
   
    function onChangePhone(e) {
        if (!isNaN(e.target.value)) {
            setPhone(e.target.value);
            if((e.target.value).length === 10) {
                let phoneData = {
                    "number": e.target.value
                }

                fetch ("http://localhost:8888/GitHub/rinoexperts-api/controllers/validatePhone.controller.php", {
                // fetch ("http://localhost:8888/rinoexperts-api/controllers/validatePhone.controller.php", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(phoneData)
                })
                .then(response => response.json())
                .then((responseData) => {
                    console.log('response: ',responseData);
                    if(responseData === true) {
                    } else {
                        Swal.fire({
                            icon: 'error',
                            text: 'Este número ya se encuentra registrado, por favor inicia sesión o verifica que tu número sea correcto',
                        })
                        setPhone('');
                        // window.location.href = "#login-modal";
                    }
                })
                .catch(console.error);
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor ingresa los números de tu teléfono de contacto',
            })
        }
    }

    function onChangeBirthday(e) {
        setBirthday(e.target.value);
    }
   
    function onChangePostalCode(e) {
        console.log(e.target.value);
        if (!isNaN(e.target.value)) {
            setPostalCode(e.target.value);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor ingresa los números de tu código postal',
            })
        }
    }
   
    function onChangeState(e) {
        setState(e.target.value);
    }
   
    function onChangeMunicipality(e) {
        setMunicipality(e.target.value);
    }
   
    function onChangeSuburb(e) {
        setSuburb(e.target.value);
    }
   
    function onChangeKey(e) {
        if (!isNaN(e.target.value)) {
            setKey(e.target.value);
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Por favor ingresa una clave de 4 números',
                text: 'Resgudarda tu clave ya que con esta podrás continuar con tu registro.',
            })
        }
    }

    function handleViewPassword() {
        if(document.querySelector('#closed-eye').classList[0] === 'icon-eye' || document.querySelector('#closed-eye').classList[1] === 'icon-eye') {
            document.querySelector('#opened-eye').classList.add('icon-eye');
            document.querySelector('#closed-eye').classList.remove('icon-eye')
            setPasswordShow('password');
        } else {
            document.querySelector('#closed-eye').classList.add('icon-eye');
            document.querySelector('#opened-eye').classList.remove('icon-eye');
            setPasswordShow('text');
        }
    }

    function verifyEmail(email){
        var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (email.match(regex)) {
            return true;
        }
    }

    const personalData = (e) => {

        e.preventDefault();
        
        if(genre === '') {
            Swal.fire({
                icon: 'error',
                title: 'Por favor selecciona un género',
            })
        } else if (phone.length <= 9) {
            Swal.fire({
                icon: 'error',
                title: 'Por favor ingresa un número de teléfono válido',
            })
        } else if(postalCode.length <= 4) {
            Swal.fire({
                icon: 'error',
                title: 'Por favor ingresa un código postal de 5 dígitos',
            })
        }else if(verifyEmail(email)) {

            let allData = {
                userName,
                lastName,
                birthday,
                genre,
                postalCode,
                state,
                municipality,
                suburb,
                phone,
                email,
                key
            }
            console.log(JSON.stringify(allData));
    
            fetch ("http://localhost:8888/GitHub/rinoexperts-api/controllers/addUser.controller.php", {
            // fetch ("http://localhost:8888/rinoexperts-api/controllers/addUser.controller.php", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(allData)
            })
            .then(response => response.json())
            .then((responseData) => {
                Swal.fire({
                    title: <strong>Tu datos se han guardado con éxito</strong>,
                    icon: 'success'
                })
                console.log('error')
            .then((result) => {
                console.log(result);
                localStorage.setItem("id_usuario",JSON.stringify(responseData));
                localStorage.setItem("nombre",JSON.stringify(userName));
                localStorage.setItem("apellidos",JSON.stringify(lastName));
                sessionStorage.setItem("token",JSON.stringify(responseData));
                if (result.isConfirmed) {
                    navigate('/historial-medico');
                }
                })
            })
            .catch(console.error);

        } else{
            Swal.fire({
                icon: 'error',
                title: 'Por favor ingresa un correo válido',
            })
        }

    }

  return (

    <div className="black-background personal-data-container pb-4 pt-3">
        <div className="container text-white-color">
            <div className="row">
                <div className="col-12">
                    <LogoHeader />
                </div>
                <div className="col-12">
                    <ProgressTop idStep={idStep}/>
                </div>
                <div className="col-12 text-center">
                    <h2 className="font-bold text-red-color">DATOS PERSONALES</h2>
                </div>
                <div className="col-12 pt-3">
                    <form className="personal-data-form" id="personal-data-form" onSubmit={ personalData }>
                        <label  className="font-regular form-label pt-2">Nombres(s):</label>
                        <input id="userName" type="text" className="form-control-plaintext name" placeholder="Escribe tu nombre completo" value={ userName } onChange={ onChangeUserName } required/>

                        <label className="font-regular form-label pt-2">Apellidos:</label>
                        <input id="lastName" type="text" className="form-control-plaintext last-name" placeholder="Escribe tus apellidos" value={ lastName } onChange={ onChangeLastName } required/>
                        
                        <label className="font-regular form-label pt-2">Género:</label>
                        <select id="genre" className="form-select" aria-label="Default select example" value={ genre } onChange={ onChangeGenre } required >
                            <option >Selecciona una opción...</option>
                            <option value="F">Femenino</option>
                            <option value="M">Másculino</option>
                        </select>

                        <p className="pt-4 text-center">Por favor ingresa un correo electrónico y teléfono que utilices con frecuencia ya que estaremos en contacto mediante los mismos.</p>

                        <label className="font-regular form-label pt-2">Correo:</label>
                        <input id="email" type="mail" className="form-control-plaintext email" placeholder="escribre@tucorreo.com" value={ email } onChange={ onChangeEmail } required/>

                        <label className="font-regular form-label pt-2">Teléfono:</label>
                        <p className="text-gray-color">Ingresa máximo 10 dígitos</p>
                        <input id="phone" type="tel" className="form-control-plaintext phone" placeholder="5512345678" value={ phone } onChange={ onChangePhone } maxLength="10" required/>

                        <h4 className="text-center pt-3 font-semibold">Fecha de nacimiento</h4>

                        <label className="font-regular form-label pt-2">Fecha de nacimiento:</label>
                        <input id="birthday" type="date" className="form-control-plaintext date" value={ birthday } onChange={ onChangeBirthday }required/>
                        
                        <h4 className="text-center pt-3 font-semibold">Dirección</h4>

                        <label className="font-regular form-label pt-2">Código postal:</label>
                        <input id="postalCode" type="text" className="form-control-plaintext phone" placeholder="Código postal" value={ postalCode } onChange={ onChangePostalCode } required/>                    
                        <label className="font-regular form-label pt-2">Estado:</label>
                        <input id="state" type="text" className="form-control-plaintext state" placeholder="Estado" value={ state } onChange={ onChangeState }required/>
                        
                        <label className="font-regular form-label pt-2">Municipio:</label>
                        <input id="municipality" type="text" className="form-control-plaintext state" placeholder="Municipio" value={ municipality } onChange={ onChangeMunicipality }required/>
                        
                        <label className="font-regular form-label pt-2">Colonia:</label>
                        <input id="suburb" type="text" className="form-control-plaintext state" placeholder="Colonia" value={ suburb } onChange={ onChangeSuburb }required/>
                        
                        <p className="text-center pt-3">Introduzca una clave de 4 números. Esta clave te permitirá continuar tu Consulta más adelante, es importante que la recuerdes.</p>

                        <label className="font-regular form-label pt-2">Clave:</label>
                        <div className="d-flex">
                            <input id="key" type={ passwordShow } className="form-control-plaintext state" placeholder="Clave" maxLength="4" value={ key } onChange={ onChangeKey } required/>
                            <span className="m-2 show-password-icon" onClick={ handleViewPassword }>
                                <AiOutlineEye id="opened-eye" className="icon-eye fs-3"/>
                                <AiOutlineEyeInvisible id="closed-eye" className="fs-3"/>
                            </span>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="presentation-next-button font-regular mt-3">Continuar</button>
                        </div>
                    </form>

                    <div>
                        <InitialModal />
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonalData;