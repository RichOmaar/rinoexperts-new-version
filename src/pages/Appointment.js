import React,{ useState, useEffect } from 'react';
import '../components/appointment/appointment.css';

import ProgressTop from '../components/progressTop/ProgressTop';

import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
import addUserImage from '../services/addUserImages';

import LogoHeader from '../components/logoHeader/LogoHeader';

import config from '../config';

const Appointment = () => {

    const navigate = useNavigate();

    const idStep = ".step-4";

    // const MySwal = withReactContent(Swal);

    const [imageOne, setImageOne] = useState();

    const [imageTwo, setImageTwo] = useState('');

    const [imageThree, setImageThree] = useState('');

    const id_user = JSON.parse(localStorage.getItem('id_usuario'));

    const form = JSON.parse(localStorage.getItem('form'));
    
    let responseOne = '';

    let responseTwo = '';
    
    let responseThree = '';

    useEffect(() => {
        window.scrollTo(0, 0);
        const isLogged = JSON.parse(sessionStorage.getItem('token'));
        // if(!isLogged) {
        //     navigate('/');
        // }
    }, [])

    function encodeImageFileAsURL(element) {
        var file = element;
        var reader = new FileReader();
        reader.onloadend = function() {
            // console.log('RESULT', reader.result)
        }
        reader.readAsDataURL(file);
    }

    function previewImage(e, imagePreview) {
        let img = e.target.files[0];
        let files = e.target.files;

        switch (imagePreview) {
            
            case 'photo-appoinment-1':
                document.getElementById(imagePreview).src = URL.createObjectURL(img);
                responseOne = encodeImageFileAsURL(img);
                let fileReaderOne = new FileReader();
                fileReaderOne.readAsDataURL(files[0]);
                fileReaderOne.onload = (event) => {
                    setImageOne(event.target.result)
                }
                break;
                
            case 'photo-appoinment-2':
                document.getElementById(imagePreview).src = URL.createObjectURL(img);
                responseTwo = encodeImageFileAsURL(img);
                let fileReaderTwo = new FileReader();
                fileReaderTwo.readAsDataURL(files[0]);
                fileReaderTwo.onload = (event) => {
                    setImageTwo(event.target.result);
                }
                break;
                
            case 'photo-appoinment-3':
                document.getElementById(imagePreview).src = URL.createObjectURL(img);
                responseThree = encodeImageFileAsURL(img);
                let fileReaderThree = new FileReader();
                fileReaderThree.readAsDataURL(files[0]);
                fileReaderThree.onload = (event) => {
                    setImageThree(event.target.result)
                }
                break;

            default:
                Swal.fire({
                    icon: 'error',
                    title: 'Ha ocurrido un error al cargar tus imágenes, inténtalo nuevamente',
                })
                break;
        }

    }
    
    const handleAppoinmentData = (e) => {
        e.preventDefault();
        
        if(!imageOne || !imageTwo || !imageThree) {
            Swal.fire({
                icon: 'error',
                title: 'Por favor verifica que hayas subido las 3 imágenes',
            })
        } else {
            let formData = new FormData();
            
            formData.append("id_user", id_user);
            formData.append("imageOne", imageOne);
            formData.append("imageTwo", imageTwo);
            formData.append("imageThree", imageThree);

            // let userImages = {
            //     id_user,
            //     imageOne,
            //     imageTwo,
            //     imageThree
            // }
    
            // fetch ("http://localhost:8888/GitHub/rinoexperts-api/controllers/addUserImage.controller.php", {
            // // fetch ("http://localhost:8888/rinoexperts-api/controllers/addUserImage.controller.php", {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(userImages)
            // })
            // .then(response => response.json())
            // .then((responseData) => {
            //     Swal.fire({
            //         title: <strong>Tu respuestas se han guardado con éxito</strong>,
            //         icon: 'success'
            //     })
            //     console.log('error')
            //     .then((result) => {
            //         if (result.isConfirmed) {
            //             navigate('/agendar-citas');
            //         }
            //     })
            // })
            // .catch((error) => {
            //     document.querySelector('#sendAppointmentData').removeAttribute("disabled");
            //     console.log(error);
            // });

            addUserImage(formData)
            .then(response => {
                let _respuesta = JSON.parse(response);

                if(_respuesta.response === 'success') {
                    Swal.fire({
                        title: 'Tus imágenes se han guardado con éxito',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 2000
                    })
    
                    setTimeout(() => {
                        if(!form) {
                            navigate('/agendar-citas');
                        } else {
                            navigate('/registro-exitoso');
                        }
                    }, 2000);
                }
            })
            .catch((error) => {
                document.querySelector('#sendAppointmentData').removeAttribute("disabled");
                console.log(error);
            });
        }
    }

  return (
    <div className="appointment-container black-background pt-3 pb-4">
        <div className="container text-white-color">
            <div className="row">
                <div className="col-12">
                    <LogoHeader />
                </div>
                <div className="col-12">
                    <ProgressTop idStep={idStep}/>
                </div>
                <div className="col-12 text-center">
                    <h2 className="font-bold text-red-color">CONSULTA</h2>
                </div>
                <div className="col-12 mt-3">
                    <form className="appoinment-form text-center" id="userImagesForm"  onSubmit={ handleAppoinmentData }>
                        <p>En este paso deberás subir tus fotos para la evaluación, asegúrate que tengan buena iluminación, fondo blanco y una distancia acorde.</p>

                        <h4 className="font-regular mt-4 d-block">Foto frontal</h4>
                        <p className="mt-3 text-gray-color font-light">Debes mantenerte de frente en donde se aprecie tu rostro.</p>

                        <img src={`${config.urlApi}assets/images/noseType/nose-1.jpg`} className="adapt-user-image" id="photo-appoinment-1" width="250" height="250" alt="nose-1"/>

                        <div className="input-group mb-3 mt-3">
                            <input htmlFor="userImagesForm" type="file" onChange={(e) => previewImage(e, 'photo-appoinment-1')} className="form-control" id="inputGroupFile01" />
                        </div>

                        <h4 className="font-regular mt-4">Foto de perfil</h4>
                        <p className="mt-3 text-gray-color font-light">Gira el rostro en donde se aprecie la parte izquierda o derecha.</p>

                        <img src={`${config.urlApi}assets/images/noseType/nose-2.jpg`} className="adapt-user-image" id="photo-appoinment-2" width="250" height="250" alt="nose-2"/>

                        <div className="input-group mb-3 mt-3">
                            <input htmlFor="userImagesForm" type="file" onChange={(e) => previewImage(e, 'photo-appoinment-2')} className="form-control" id="inputGroupFile01" />
                        </div>

                        <h4 className="font-regular mt-4">Foto frontal</h4>
                        <p className="mt-3 text-gray-color font-light">Debe inclinar hacia arriba el rostro en donde puedan verse las fosas nasales.</p>

                        <img src={`${config.urlApi}assets/images/noseType/nose-3.jpg`} className="adapt-user-image" id="photo-appoinment-3" width="250" height="250" alt="nose-3"/>

                        <div className="col-2 input-group  mt-3">
                            <input htmlFor="userImagesForm" type="file" onChange={(e) => previewImage(e, 'photo-appoinment-3')} className="form-control" id="inputGroupFile01" />
                        </div>

                        <button type="sumbit" id="sendAppointmentData"className="presentation-next-button font-regular mt-5">Continuar</button>

                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Appointment;