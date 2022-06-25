import React, { useState, useEffect } from 'react';
import '../components/schedule/schedule.css';

import ProgressTop from '../components/progressTop/ProgressTop';
// import { Link } from 'react-router-dom';

import { GrCircleAlert } from 'react-icons/gr';
import { FaLongArrowAltRight } from 'react-icons/fa';

// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';

import '../components/loaderJquery/loaderJquery';

import { useNavigate } from 'react-router-dom';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import LogoHeader from '../components/logoHeader/LogoHeader';

const Schedule = () => {
    
    const idStep = ".step-5";

    // const MySwal = withReactContent(Swal);

    const navigate = useNavigate();

    const id_user = JSON.parse(sessionStorage.getItem('token'));

    const [changeDate1, onChangeDate1] = useState(new Date());
    const [changeDate2, onChangeDate2] = useState(new Date());
    const [changeDate3, onChangeDate3] = useState(new Date());

    const [timesDate1, setTimesDate1] = useState('');
    const [timesDate2, setTimesDate2] = useState('');
    const [timesDate3, setTimesDate3] = useState('');
    
    const [onlineDate, setOnlineDate] = useState('');
    const [faceToFaceDate, setFaceToFaceDate] = useState('');
    const [surgeryDate, setSurgeryDate] = useState('');

    const [showSurgery, setShowSurgery] = useState(false);

    useEffect(() => {
        
        verifyOnlineAvailability(changeDate1);
        verifyFaceToFaceAvailability(changeDate2);
        verifySurgeryAvailability(changeDate3);

        window.onload = function(){
            document.forms[0].submit();
            document.forms[1].submit();
            
        }

        const isLogged = JSON.parse(sessionStorage.getItem('token'));

        if(!isLogged) {
            navigate('/');
        }

    }, []);
    
    function onChageOnlineCalendar(value, e){
        onChangeDate1(value);
        verifyOnlineAvailability(value, 1)
    }

    function onChageFaceToFaceCalendar(value, e){
        onChangeDate2(value);
        verifyFaceToFaceAvailability(value, 2)
    }
   
    function onChageSurgerCalendar(value, e){
        onChangeDate3(value);
        verifySurgeryAvailability(value, 3)
    }

    function verifyOnlineAvailability(date){
        let loadOnlineDate = {
            "date":date.toISOString().replace(/T.*/,''),
            "appoinmentType":1
        }

        fetch("http://localhost:8888/GitHub/rinoexperts-api/controllers/timeAvailability.controller.php", {
        // fetch("http://localhost:8888/rinoexperts-api/controllers/timeAvailability.controller.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loadOnlineDate)
        })
        .then(response => response.json())
        .then((responseData) => {
            setTimesDate1(responseData);
        })
        .catch(console.error);
    }
    
    function verifyFaceToFaceAvailability(date){
        let loadFaceToFaceDate = {
            "date":date.toISOString().replace(/T.*/,''),
            "appoinmentType":2
        }

        fetch("http://localhost:8888/GitHub/rinoexperts-api/controllers/timeAvailability.controller.php", {
        // fetch("http://localhost:8888/rinoexperts-api/controllers/timeAvailability.controller.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loadFaceToFaceDate)
        })
        .then(response => response.json())
        .then((responseData) => {
            setTimesDate2(responseData);
        })
        .catch(console.error);
    }
    
    function verifySurgeryAvailability(date){
        let loadSurgeryDate = {
            "date":date.toISOString().replace(/T.*/,''),
            "appoinmentType":3
        }

        fetch("http://localhost:8888/GitHub/rinoexperts-api/controllers/timeAvailability.controller.php", {
        // fetch("http://localhost:8888/rinoexperts-api/controllers/timeAvailability.controller.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loadSurgeryDate)
        })
        .then(response => response.json())
        .then((responseData) => {
            setTimesDate3(responseData);
        })
        .catch(console.error);
    }

    function verifyTimeSelected(date,time,appoinmentType){

        let verifyTime = {
            "date": date.toISOString().replace(/T.*/,''),
            "appointmentTime":time,
            "appoinmentType":appoinmentType
        }

        fetch("http://localhost:8888/GitHub/rinoexperts-api/controllers/validateTimeSelected.controller.php", {
        // fetch("http://localhost:8888/rinoexperts-api/controllers/validateTimeSelected.controller.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(verifyTime)
        })
        .then(response => response.json())
        .then((result) => {
            if(!result) {
                switch (appoinmentType) {
                    case 1:
                        document.querySelector('.optionOnline'+time).classList.add('hidden');
                    break;
                    
                    case 2:
                        document.querySelector('.optionFaceToFace'+time).classList.add('hidden');
                    break;
                    
                    case 3:
                        document.querySelector('.optionSurgery'+time).classList.add('hidden');
                    break;

                    default:
                        // Swal.fire({
                        //     icon: 'error',
                        //     title: 'Por favor recarga la página',
                        // })
                }
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Por favor selecciona otro horario',
                // })
            }
        })
        .catch(console.error);
    }

    const handleShowSurgery = (e) => {
        e.preventDefault();
        
        if(showSurgery === true){
            document.querySelector('.surgery-date-form').classList.add('hidden');
            setShowSurgery(!showSurgery);
        } else {
            // Swal.fire({
            //     icon: 'warning',
            //     title: 'ATENCIÓN',
            //     text: 'Recuerda que la fecha de tu cirugía DEBE ser posterior a la cita online y presencial'
            // })
            document.querySelector('.surgery-date-form').classList.remove('hidden');
            setShowSurgery(!showSurgery);
        }
        window.location.href='#surgery';
    }

    const handleSchdeule = (e) => {
        e.preventDefault();

        if(onlineDate === "" || faceToFaceDate === ""){
            // Swal.fire({
            //     icon: 'warning',
            //     title: 'ATENCIÓN',
            //     text: 'Por favor selecciona una fecha y un horario para tus consultas.'
            // })
        } else {

            let appointmentsData = [
                {id_usuario: id_user, id_horario_citas: onlineDate, id_tipo_cita: 1, fecha_completa: changeDate1.toISOString().replace(/T.*/,'')},
                {id_usuario: id_user, id_horario_citas: faceToFaceDate, id_tipo_cita: 2, fecha_completa: changeDate2.toISOString().replace(/T.*/,'')},
                {id_usuario: id_user, id_horario_citas: surgeryDate, id_tipo_cita: 3, fecha_completa: changeDate3.toISOString().replace(/T.*/,'')}
            ]

            fetch ("http://localhost:8888/GitHub/rinoexperts-api/controllers/addAppointments.controller.php", {
            // fetch ("http://localhost:8888/rinoexperts-api/controllers/addAppointments.controller.php", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(appointmentsData)
            })
            .then(response => response.json())
            .then((responseData) => {
                // Swal.fire({
                //     icon: 'warning',
                //     title: 'UN MOMENTO POR FAVOR',
                //     text: 'Estamos validando la disponibilidad de las citas'
                // })
                console.log('error')
                .then((result) => {
                    if(responseData === true){
                        // Swal.fire({
                        //     icon: 'success',
                        //     title: <strong>Tus citas se han agendado con éxito</strong>,
                        // })
                        if (result.isConfirmed) {
                            navigate('/detalles-citas');
                        }
                    } else {
                        // Swal.fire({
                        //     icon: 'error',
                        //     title: 'Ha ocurrido un error, por favor inténtalo nuevamente',
                        // })
                    }
                })
            })
            .catch((error) => {
                document.querySelector('#sendAppointmentData').removeAttribute("disabled");
                console.log(error);
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
   
    const handleSurgeryDate = (e) => {
        setSurgeryDate(e.target.value);
        verifyTimeSelected(changeDate3,e.target.value,3);
    }

  return (
    (!timesDate1 || !timesDate2 || !timesDate3)? <div>Por favor recarga la página...</div> 
    :
    <div className="schedule-container mt-3" id="schdedule-form-1" onSubmit={ handleSchdeule }>
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
                
                    <select className="mt-4" id="online-selector" onChange={ handleOnlineDate }>
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
                
                    <select className="mt-4" id="face-to-face-selector" onChange={ handleFaceToFaceDate }>
                        <option defaultValue>Selecciona un horario</option>
                            {Object.values(timesDate2).map(
                                (item) => (
                                    <option key={item.id_horario_citas} className={`optionFaceToFace${item.id_horario_citas}`} value={item.id_horario_citas}>{item.hora_inicio}</option>
                                )
                            )}
                    </select>

                    <div className="d-flex justify-content-center mt-3 mb-3">
                        <button type="button" className="btn m-0 font-regular schedule-button" onClick={ handleShowSurgery }>Agendar cirugía</button>
                        <button id="sendAppointmentData" type="submit" className="btn m-0 font-regular schedule-button" >Pagar ahora <FaLongArrowAltRight className=""/></button>
                    </div>
                </form>


                <form className="surgery-date-form hidden pb-4" id="surgery">
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
                </form>
            </div>
        </div>
    </div>
  )
}

export default Schedule;