import React, { useState, useEffect } from 'react';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const SurgeryAppointment = () => {

    // const MySwal = withReactContent(Swal);

    const id_user = JSON.parse(sessionStorage.getItem('token'));

    const [changeDate3, onChangeDate3] = useState(new Date());
    const [timesDate3, setTimesDate3] = useState('');
    const [surgeryDate, setSurgeryDate] = useState('');

    useEffect(() => {
        
        verifySurgeryAvailability(changeDate3);

    }, []);

    function onChageSurgerCalendar(value, e){
        onChangeDate3(value);
        verifySurgeryAvailability(value, 3)
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

    function verifyTimeSurgerySelected(date,time,appoinmentType){

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

    const handleSurgerySchdeule = (e) => {
        e.preventDefault();

        let appointmentsData = [{
            id_usuario: id_user, 
            id_horario_citas: surgeryDate,
            id_tipo_cita: 3,
            fecha_completa: changeDate3.toISOString().replace(/T.*/,'')
        }]

        if(surgeryDate === "") {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Por favor selecciona un horario',
            // })
        } else {

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
                    console.log(responseData);
                    if(responseData === true){
                        // Swal.fire({
                        //     icon: 'success',
                        //     title: <strong>Tus citas se han agendado con éxito</strong>,
                        // })
                        document.querySelector('.surgery-appointment-component').classList.add('hidden');
                        document.querySelector('.surgery-details').classList.remove('hidden');
                        window.location.reload();
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

    const handleSurgeryDate = (e) => {
        setSurgeryDate(e.target.value);
        verifyTimeSurgerySelected(changeDate3,e.target.value,3);
    }

  return (
    <div>
        <h5 className="text-center">Hemos notado que no has apartado la fecha de tu cirugía</h5>
        <form className="surgery-date-form pb-4 text-center" id="surgery-form" onSubmit={ handleSurgerySchdeule }>
            <div className="d-flex justify-content-center">
                <Calendar onChange={onChageSurgerCalendar} value={changeDate3} />
            </div>
        
            <select className="mt-4" id="surgery-selector" onChange={ handleSurgeryDate }>
                <option defaultValue>Selecciona un horario</option>
                    {Object.values(timesDate3).map(
                        (item) => (
                            <option key={item.id_horario_citas} className={`optionSurgery ${item.id_horario_citas}`} value={item.id_horario_citas}>{item.hora_inicio}</option>
                        )
                    )}
            </select>

            <div className="d-flex justify-content-center mt-3 mb-3">
                <button id="sendAppointmentData" type="submit" className="btn m-0 font-regular schedule-button" >Agendar cita</button>
            </div>
        </form>
    </div>
  )
}

export default SurgeryAppointment