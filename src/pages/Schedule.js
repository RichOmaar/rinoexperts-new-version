import React, { useState, useEffect } from 'react';
import '../components/schedule/schedule.css';

import ProgressTop from '../components/progressTop/ProgressTop';
// import { Link } from 'react-router-dom';

import { GrCircleAlert } from 'react-icons/gr';
import { FaLongArrowAltRight } from 'react-icons/fa';

import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
import getTimeAvailability from '../services/getTimeAvailability';
import validateTimeSelected from '../services/validateTimeSelected';
import addSchedule from '../services/schedule';
// import '../components/loaderJquery/loaderJquery';

import { useNavigate } from 'react-router-dom';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import LogoHeader from '../components/logoHeader/LogoHeader';


const Schedule = () => {

    window.onunload = function() {
        alert('Bye.');
    }
    
    const idStep = ".step-5";

    let today = new Date().setHours(0,0,0,0);
    ;
    const navigate = useNavigate();

    const id_user = JSON.parse(sessionStorage.getItem('token'));

    const [changeDate1, onChangeDate1] = useState(new Date());
    const [changeDate2, onChangeDate2] = useState(new Date());
    // const [changeDate3, onChangeDate3] = useState(new Date());

    const [timesDate1, setTimesDate1] = useState('');
    const [timesDate2, setTimesDate2] = useState('');
    // const [timesDate3, setTimesDate3] = useState('');

    const [onlineDate, setOnlineDate] = useState('');
    const [faceToFaceDate, setFaceToFaceDate] = useState('');
    // const [surgeryDate, setSurgeryDate] = useState('');

    // const [showSurgery, setShowSurgery] = useState(false);

    useEffect(() => {

        verifyOnlineAvailability(changeDate1);
        verifyFaceToFaceAvailability(changeDate2);
        // verifySurgeryAvailability(changeDate3);

        window.onload = function(){
            document.forms[0].submit();
            document.forms[1].submit();

        }

        const isLogged = JSON.parse(sessionStorage.getItem('token'));

        // if(!isLogged) {
        //     navigate('/');
        // }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function onChageOnlineCalendar(value, e) {
        onChangeDate1(value);
        verifyOnlineAvailability(value, 1)
    }

    function onChageFaceToFaceCalendar(value, e) {
        onChangeDate2(value);
        verifyFaceToFaceAvailability(value, 2)
    }

    // function onChageSurgerCalendar(value, e) {
    //     onChangeDate3(value);
    //     verifySurgeryAvailability(value, 3)
    // }

    function verifyOnlineAvailability(date) {

        if(today <= date) {

            let formData = new FormData();

            formData.append("date", date.toISOString().replace(/T.*/,''));
            formData.append("appoinmentType", 1);

            getTimeAvailability(formData)
            .then((response) => {

                let _respuesta = JSON.parse(response);

                if(_respuesta.response === 'sunday') {
                    setTimesDate1([]);
                    Swal.fire({
                        icon: 'warning',
                        title: 'Por favor selecciona otra fecha y horario.',
                    })
                } else if(_respuesta) {
                    setTimesDate1(_respuesta);
                }

            })
            .catch((error) => {
                console.log(error);
            });
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Por favor selecciona una fecha posterior.',
            })
            onChangeDate1(new Date());
        }

    }

    function verifyFaceToFaceAvailability(date) {

        if(date < changeDate1) {
            Swal.fire({
                icon: 'warning',
                title: 'Recuerda que la consulta presencial debe ser posterior a la consulta online.',
            })
            onChangeDate2(changeDate1);
        } else if(today <= date){

            let formData = new FormData();

            formData.append("date", date.toISOString().replace(/T.*/,''));
            formData.append("appoinmentType", 2);

            getTimeAvailability(formData)
            .then((response) => {

                let _respuesta = JSON.parse(response);

                if(_respuesta.response === 'sunday') {
                    setTimesDate2([]);
                    Swal.fire({
                        icon: 'warning',
                        title: 'Por favor selecciona otra fecha y horario.',
                    })
                } else if(_respuesta) {
                    setTimesDate2(_respuesta);
                }

            })
            .catch((error) => {
                console.log(error);
            });
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Por favor selecciona una fecha posterior.',
            })
            onChangeDate2(changeDate1);
        }

    }

    // function verifySurgeryAvailability(date) {
    // if(today <= date) {

    //     let formData = new FormData();

    //     formData.append("date", date.toISOString().replace(/T.*/,''));
    //     formData.append("appoinmentType", 3);

    //     getTimeAvailability(formData)
    //     .then((response) => {
    //         let _respuesta = JSON.parse(response);
    //         console.log(_respuesta);
    //         if(_respuesta.response === 'success') {
    //             setTimesDate3(_respuesta.times);
    //         }
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // } else {
    //     Swal.fire({
    //         icon: 'warning',
    //         title: 'Por favor selecciona otro día posterior.',
    //     })
    //      onChangeDate1(new Date());
    // }

    // }

    function verifyTimeSelected(date,time,appoinmentType){

        let formData = new FormData();

        formData.append("date", date.toISOString().replace(/T.*/,''));
        formData.append("appointmentTime", time);
        formData.append("appoinmentType", appoinmentType);

        validateTimeSelected(formData)
        .then(response => {
            let _respuesta = JSON.parse(response);

            if(_respuesta.response === 'error') {
                Swal.fire({
                    icon: 'error',
                    title: 'Por favor selecciona otro horario',
                })
            }
            // if(_respuesta.response === 'success') {
            //     switch (appoinmentType) {

            //         case 1:
            //             document.querySelector('.optionOnline'+time).classList.add('hidden');
            //         break;

            //         case 2:
            //             document.querySelector('.optionFaceToFace'+time).classList.add('hidden');
            //         break;

            //         case 3:
            //             document.querySelector('.optionSurgery'+time).classList.add('hidden');
            //         break;

            //         default:
            //             Swal.fire({
            //                 icon: 'error',
            //                 title: 'Por favor recarga la página',
            //             })
            //     }

            // } else {
            //     Swal.fire({
            //         icon: 'error',
            //         title: 'Por favor selecciona otro horario',
            //     })
            // }

        })

    }

    // const handleShowSurgery = (e) => {
    //     e.preventDefault();

    //     if(showSurgery === true){
    //         document.querySelector('.surgery-date-form').classList.add('hidden');
    //         setShowSurgery(!showSurgery);
    //     } else {
    //         Swal.fire({
    //             icon: 'warning',
    //             title: 'ATENCIÓN',
    //             text: 'Recuerda que la fecha de tu cirugía DEBE ser posterior a la cita online y presencial'
    //         })
    //         document.querySelector('.surgery-date-form').classList.remove('hidden');
    //         setShowSurgery(!showSurgery);
    //     }
    //     window.location.href='#surgery';
    // }

    const handleSchdeule = (e) => {
        e.preventDefault();

        if(onlineDate === "" || faceToFaceDate === ""){
            Swal.fire({
                icon: 'warning',
                title: 'ATENCIÓN',
                text: 'Por favor selecciona una fecha y un horario para tus consultas.'
            })
        } else {

            let formData = new FormData();

            formData.append("id_usuario", id_user);
            formData.append("id_horario_citas_online", onlineDate);
            formData.append("id_tipo_cita_online", 1);
            formData.append("fecha_completa_online", changeDate1.toISOString().replace(/T.*/,''));
            formData.append("id_horario_citas_faceToFace", faceToFaceDate);
            formData.append("id_tipo_cita_faceToFace", 2);
            formData.append("fecha_completa_faceToFace", changeDate2.toISOString().replace(/T.*/,''));

            addSchedule(formData)
            .then(response => {

                let _respuesta = JSON.parse(response);
                console.log(_respuesta);
                if(_respuesta.response === 'success'){
                    Swal.fire({
                        icon: 'success',
                        title: '¡Listo!',
                        text: 'Tu cita ha sido agendada con éxito.',
                        timer: 2000
                    })

                    setTimeout(() => {
                        navigate('/detalles-citas');
                    }, 2000);

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ha ocurrido un error, por favor inténtalo nuevamente',
                    })
                }
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Ha ocurrido un error, por favor inténtalo nuevamente',
                })
            });
        }
    }

    const handleOnlineDate = (e) => {
        setOnlineDate(e.target.value);
        verifyTimeSelected(changeDate1,e.target.value,1);
    }

    const handleFaceToFaceDate = (e) => {
        setFaceToFaceDate(e.target.value);
        verifyTimeSelected(changeDate2,e.target.value,2);
    }

    // const handleSurgeryDate = (e) => {
    //     setSurgeryDate(e.target.value);
    //     verifyTimeSelected(changeDate3,e.target.value,3);
    // }

  return (
    (!timesDate1 || !timesDate2) ? <div className="container py-4">Por favor recarga la página...</div>
    :
    <div className="schedule-container black-background mp-3" id="schdedule-form-1" onSubmit={ handleSchdeule }>
        <div className="container text-white-color">
            <div className="row">
                <div className="col-12">
                    <LogoHeader />
                </div>
                <div className="col-12">
                    <ProgressTop idStep={idStep}/>
                </div>
                <div className="col-12 text-center">
                    <h2 className="font-bold text-red-color">AGENDAR CITAS</h2>
                </div>
                <div className="col-12 text-center pt-3">
                    <p>Con el pago de tu consulta en línea tienes incluido la evaluación presencial previa a tu cirugía.</p>

                    <div className="align-middle">
                        <p className=""><GrCircleAlert className="schedule-alert-icon" /> A continuación selecciona la fecha de tu consulta online.</p>
                    </div>

                    <form>
                        <div className="d-flex justify-content-center">
                            <Calendar onChange={onChageOnlineCalendar} value={changeDate1}/>
                        </div>

                        <select className="mt-4 pick-time" id="online-selector" onChange={ handleOnlineDate }>
                            <option defaultValue >Selecciona un horario</option>
                                {Object.values(timesDate1).map(
                                    (item) => (
                                        <option key={item.id_horario_citas} className={`optionOnline${item.id_horario_citas}`} value={item.id_horario_citas}>{item.hora_inicio}</option>
                                    )
                                )}
                        </select>

                        <div className="align-middle mt-5">
                            <p className=""><GrCircleAlert className="schedule-alert-icon"/> A continuación selecciona la fecha de tu consulta presencial.</p>
                        </div>

                        <div className="d-flex justify-content-center">
                            <Calendar onChange={onChageFaceToFaceCalendar} value={changeDate2} />
                        </div>

                        <select className="mt-4 pick-time" id="face-to-face-selector" onChange={ handleFaceToFaceDate }>
                            <option defaultValue>Selecciona un horario</option>
                                {Object.values(timesDate2).map(
                                    (item) => (
                                        <option key={item.id_horario_citas} className={`optionFaceToFace${item.id_horario_citas}`} value={item.id_horario_citas}>{item.hora_inicio}</option>
                                    )
                                )}
                        </select>

                        <div className="d-flex justify-content-center mt-4 mb-4">
                            {/* <button type="button" className="btn m-0 font-regular schedule-button" onClick={ handleShowSurgery }>Agendar cirugía</button> */}
                            <button id="sendAppointmentData" type="submit" className="btn m-0 font-regular schedule-button" >Agendar citas <FaLongArrowAltRight className=""/></button>
                        </div>
                    </form>


                    {/* <form className="surgery-date-form hidden pb-4" id="surgery">
                        <div className="d-flex justify-content-center">
                            <Calendar onChange={onChageSurgerCalendar} value={changeDate3} />
                        </div>

                        <select className="mt-4" id="surgery-selector" onChange={ handleSurgeryDate }>
                            <option defaultValue>Selecciona un horario</option>
                                {Object.values(timesDate3).map(
                                    (item) => (
                                        <option key={item.id_horario_citas} className={`optionSurgery${item.id_horario_citas}`} value={item.id_horario_citas}>{item.hora_inicio}</option>
                                    )
                                )}
                        </select>
                    </form> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Schedule;