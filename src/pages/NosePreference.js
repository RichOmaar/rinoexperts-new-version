import React, { useState, useEffect } from 'react';
import '../components/nosePreference/nosePreference.css';

import ProgressTop from '../components/progressTop/ProgressTop';

import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

import getNoses from '../services/getNosePreferences';
import addNosePreferences from '../services/addNosePreferences';

import LogoHeader from '../components/logoHeader/LogoHeader';
import config from '../config';

const NosePreference = () => {

    const navigate = useNavigate();

    const idStep = ".step-3";

    // const MySwal = withReactContent(Swal);

    const [noseChages, setNoseChages] = useState('');

    const [nosePreference, setNosePreferences] = useState('');

    const [dataFetched, setDataFetched] = useState(null);

    const id_user = JSON.parse(localStorage.getItem('id_usuario'));

    useEffect(() => {
        // let url = config.urlApi+'controllers/getNosePreferences.controller.php';
        // fetch(url)
        // .then(response => response.json())
        // .then((responseData) => {
        //     console.log(responseData);
        //     setDataFetched(responseData);
        // })
        // .catch(console.error);

        getNoses()
        .then((response) => {
            let _respuesta = JSON.parse(response);
            console.log(_respuesta);

            if(_respuesta.response === 'success') {
                setDataFetched(_respuesta.noseTypes);
            }
        })
        .catch((error) => {
            console.log(error);
        });

        const isLogged = JSON.parse(sessionStorage.getItem('token'));

        // if(!isLogged) {
        //     navigate('/');
        // }

    }, []);
    
    function onChangeNoseChanges(e) {
        setNoseChages(e.target.value);
    }

    function onClickNosePreference(e) {
        setNosePreferences(e.target.value);
    }

    const handleNosePreference = (e) => {
        e.preventDefault();

        if(!nosePreference) {
            Swal.fire({
                icon: 'error',
                title: 'Por favor selecciona una opción de naríz',
            })
        } else {

            let formData = new FormData();

            formData.append("id_user", id_user);
            formData.append("noseChages", noseChages);
            formData.append("nosePreference", nosePreference);

            addNosePreferences(formData)
            .then((response) => {
                let _respuesta = JSON.parse(response);
                console.log(_respuesta);

                if(_respuesta.response === 'success') {
                    Swal.fire({
                        title: 'Tus datos se han guardado con éxito',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    })
    
                    setTimeout(() => {
                        navigate('/consulta');
                    }, 2000);
                }

            })
            .catch((error) => {
                document.querySelector('#sendNoseData').removeAttribute("disabled");
                console.log(error);
            });
            // let url = config.urlApi+'controllers/getNosePreferences.controller.php';
            // fetch (url, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(nosePreferences)
            // })
            // .then(response => response.json())
            // .then((responseData) => {
            //     Swal.fire({
            //         title: <strong>Tu respuestas se han guardado con éxito</strong>,
            //         icon: 'success'
            //     })
            //     console.log('error')
            //     .then((result) => {
            //     // console.log(responseData);
            //         if (result.isConfirmed) {
            //             navigate('/consulta');
            //         }
            //     })
            // })
            // .catch((error) => {
            //     document.querySelector('#sendNoseData').removeAttribute("disabled");
            //     console.log(error);
            // });
        }

    }

  return (

    (!dataFetched)? 
    <div className="container py-4">Por favor recarga la página...</div> 
    :
    <div className="medical-record-container black-background pt-3 pb-4">
        <div className="container text-white-color">
            <div className="row">
                <div className="col-12">
                    <LogoHeader />
                </div>
                <div className="col-12">
                    <ProgressTop idStep={ idStep }/>
                </div>
                <div className="col-12 text-center">
                    <h2 className="font-bold text-red-color">PREFERENCIA DE NARIZ</h2>
                </div>
                <div className="col-12 text-center mt-4">
                    <p>Selecciona el tipo de nariz que te gustaría tener.</p>
                </div>
                <div className="col-12 text-center mt-2">

                    <form className="medical-record-form" id="nose-preference-form" onSubmit={ handleNosePreference }>
                        {dataFetched.map(

                            (item) => (
                                <label className="d-block m-4" key={"input"+item.id_preferencia}>

                                    <input type="radio" name="test" value={item.id_preferencia} id={"noseOption"+item.id_preferencia} onClick={ onClickNosePreference }/>

                                    <img src={`${config.urlApi+item.url_imagen}`} width="150" key={"img"+item.id_preferencia} height="150" alt="nose"/>

                                    <h4 key={"txt"+item.id_preferencia} className="font-regular mt-3">{item.tipo_nariz}</h4>
                                    
                                </label>
                            )
                        )}
                        
                        <label className="font-regular form-label mt-3">Antes de continuar, cuéntanos que es lo que no te gusta o te gustaría cambiar de tu nariz.</label>
                        <input type="text" id="deseases" value={ noseChages } onChange={ onChangeNoseChanges } className="form-control-plaintext mt-4 " placeholder="¿Qué te gustaría cambiar?" required/>
                    
                        <button type="sumbit" id="sendNoseData" className="presentation-next-button font-regular mt-3">Continuar</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NosePreference;