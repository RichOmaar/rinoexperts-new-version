import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

import '../components/purchaseDetails/purchaseDetails.css';

import SurgeryAppointment from '../components/surgeryAppointment/SurgeryAppointment';

import { ImCancelCircle } from 'react-icons/im';
import { FiAlertCircle } from 'react-icons/fi';
import { FaLongArrowAltRight } from 'react-icons/fa';


import Swal from 'sweetalert2';

import LogoHeader from '../components/logoHeader/LogoHeader';

let stripePromise;

const getStripe = () => {

    if(!stripePromise) {
        stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    }

    return stripePromise;
};

const PurchaseDetails = () => {

    const [stripeError, setStripeError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const item = {
        price: 'price_1KoLqoEYaHE9Yh1cYnIe3DI0',
        quantity: 1,
    }

    const checkoutOptions = {
        lineItems: [item],
        mode: 'payment',
        successUrl: `${window.location.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancelUrl: `${window.location.origin}/cancel`,
    }

    const redirectToCheckout = async () => {
        setIsLoading(true);
        console.log('redirectToCheckout');
        console.log(process.env.REACT_APP_STRIPE_KEY);
        
        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);
        
        console.log("Stripe checkout error", error);
        
        if (error) setStripeError(error.message);

        setIsLoading(false);
    }

    if(stripeError) alert(stripeError);

    const [totalAmount, setTotalAmount] = useState();

    const [baseAmount, setBaseAmount] = useState(800);

    const [surgeryAmount, setSurgeryAmount] = useState(3000);

    const [userDataAppointments, setUserDataAppointments] = useState('');

    const id_user = JSON.parse(sessionStorage.getItem('token'));

    const nombre = JSON.parse(localStorage.getItem('nombre'));
    
    const apellidos = JSON.parse(localStorage.getItem('apellidos'));

    useEffect(() => {

        // verifySurgery(id_user);
        // verifyAppointments(id_user);

        console.log(process.env.REACT_APP_STRIPE_KEY);
        // const script = document.createElement("script");

        // script.src = "https://polyfill.io/v3/polyfill.min.js?version=3.52.1&features=fetch";

        // document.body.appendChild(script);
        
        // const script2 = document.createElement("script");

        // script2.src = "https://js.stripe.com/v3/";

        // document.body.appendChild(script2);

    }, []);

    function verifySurgery(id_user) {

        let validateSurgery = {
            "id_usuario":id_user
        }

        fetch("http://localhost:8888/GitHub/rinoexperts-api/controllers/verifySurgery.controller.php", {
        // fetch("http://localhost:8888/rinoexperts-api/controllers/verifySurgery.controller.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(validateSurgery)
        })
        .then(response => response.json())
        .then((responseData) => {
            if(responseData === false){
                document.querySelector('.surgery-appointment-component').classList.remove('hidden');
                document.querySelector('.surgery-details').classList.add('hidden');
                setTotalAmount(baseAmount);
            } else {
                setTotalAmount(baseAmount + surgeryAmount);
            }
        })
        .catch(console.error);
    }

    function verifyAppointments(id_user) {

        let validateAppoinments = {
            "id_usuario":id_user
        }

        fetch("http://localhost:8888/GitHub/rinoexperts-api/controllers/verifyAppointments.controller.php", {
        // fetch("http://localhost:8888/rinoexperts-api/controllers/verifyAppointments.controller.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(validateAppoinments)
        })
        .then(response => response.json())
        .then((responseData) => {
            if(responseData !== false){

                // console.log(responseData);
                setUserDataAppointments(responseData);
                
            }
        })
        .catch(console.error);
    }

    const recomendations = (appointmentType) => {
        console.log(appointmentType);
        switch(appointmentType){
            case 'cita-online':
                Swal.fire({
                    text: 'Para la consulta online te contactaremos vía WhatsApp para enviarte el enlace correpsondiente para realizar la videoconsulta.'
                })
                break;
           
            case 'cita-presencial':
                Swal.fire({
                    text: 'Para la consulta presencial debes presentarte 15 minutos antes de la hora para evitar contratiempos.'
                })
                break;
           
            case 'cita-cirugia':
                Swal.fire({
                    text: 'Los requerimientos se hablarán en la cita presencial, posteriormente te enviaremos nuevamente mediante WhatsApp la lista de requerimientos.',
                    // buttonsStyling: false
                })
                break;

            default:
                Swal.fire({
                    icon: 'error',
                    title: 'Ha ocurrido un error al cargar tus imágenes, inténtalo nuevamente',
                })
                break;
        }
    }

    function handleCancellSurgery(e){
        e.preventDefault();

        let cancellSurgery = {
            "id_usuario":id_user
        }

        fetch("http://localhost:8888/GitHub/rinoexperts-api/controllers/cancelSurgery.controller.php", {
        // fetch("http://localhost:8888/rinoexperts-api/controllers/cancelSurgery.controller.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cancellSurgery)
        })
        .then(response => response.json())
        .then((responseData) => {
            if(responseData === false){
                document.querySelector('.surgery-appointment-component').classList.remove('hidden');
                document.querySelector('.surgery-details').classList.add('hidden');
                setTotalAmount({baseAmount});
                window.location.href = "#total-details";
            }
            window.location.reload();
        })
        .catch(console.error);

    }

    const payment = (e) => {
        e.preventDefault();                                               

        // console.log(totalAmount*100);
        let paymentType = {
            "amount":totalAmount
        }

        fetch("http://localhost:8888/GitHub/rinoexperts-api/create-checkout-session.php", {
        // fetch("http://localhost:8888/rinoexperts-api/controllers/payment.controller.php", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Access-Control-Allow-Headers" : "Content-Type",
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
            },
            // body: JSON.stringify(paymentType)
        })
        .then(response => response.json())
        .then((responseData) => {
            if(responseData === false){
                // document.querySelector('.surgery-appointment-component').classList.remove('hidden');
                // document.querySelector('.surgery-details').classList.add('hidden');
                // setTotalAmount({baseAmount});
                // window.location.href = "#total-details";
            }
            // window.location.reload();
        })
        .catch(console.error);
    }

  return (

    <div className="container">
        <div className="row">
            <div className="col-12">
                <LogoHeader />
            </div>
            <div className="col-12 name-container">
                <h3><span className="text-aqua-color">{nombre}</span>&nbsp; {apellidos}</h3>
                <p className="my-3">¡Estás a punto de confirmar tus citas!</p>
            </div>
            
            <div className="col-12 py-4 my-sm-0 hidden surgery-appointment-component">
                <SurgeryAppointment onChange={ verifySurgery(id_user) }/>
            </div>

            <div className="col-12 my-sm-0 my-md-2 my-lg-5 my-xl-5">
                <div className="row d-flex justify-content-evenly gy-xs-5 gy-sm-5">
                    {Object.values(userDataAppointments).map(
                        (item) => (
                            <div key={item.id_cita} className="cardDetail p-4 my-2 col-xs-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 d-flex justify-content-center">
                                <div className="col-8">
                                    <h4 className="my-3 text-aqua-color">{`Cita ${item.tipo}`}</h4>
                                    <p>{`Fecha: ${item.fecha_completa}`}</p>
                                    <p>{`Hora: ${item.hora_inicio}`}</p>
                                </div>
                                <div id={'cita-'+(item.tipo).toLowerCase()} className="col-4 d-flex align-items-center justify-content-center">
                                    <FiAlertCircle className="fs-3 alert-icon-details" onClick={() => recomendations('cita-'+(item.tipo).toLowerCase())}/>
                                </div>
                            </div>
                        )
                        )}
                </div>
            </div>

            <div className="total-container py-2">
                <div className="col-12 d-flex py-4">
                    <div className="col-5 d-flex justify-content-start align-items-center">
                        <p className="font-semibold text-aqua-color">Consulta online y presencial</p> </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <p>{`$ ${baseAmount}.00 MXN`}</p>
                    </div>
                    <div className="col-1 d-flex justify-content-center">

                    </div>
                </div>
                
                <div className="col-12 d-flex surgery-details">
                    <div className="col-5 d-flex justify-content-start align-items-center">
                        <p className="font-semibold text-aqua-color">Cirugía*</p>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <p className="">{`$ ${surgeryAmount}.00 MXN`}</p>
                    </div>

                    <div className="col-1 d-flex justify-content-center" onClick={ handleCancellSurgery }>
                        <span className="align-items-center cancell-surgery">
                            <ImCancelCircle className="fs-4 text-red-color"/>
                        </span>
                    </div>
                </div>

                <div className="col-12 d-flex total-details py-2" id="total-details">
                    <div className="col-5 d-flex justify-content-start align-items-center">
                        <p className="font-semibold text-aqua-color">Total</p>
                    </div>

                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <p className="">{`$ ${totalAmount}.00 MXN`}</p>
                    </div>
                </div>
                <div className="col-12 text-center">
                    <button type="button" onClick={ redirectToCheckout } disabled={ isLoading } className="presentation-next-button font-regular mt-3">{ isLoading ? "Cargando..." : "Pagar ahora"} <FaLongArrowAltRight /></button>
                </div>
            </div>

            <div>
                <p className="pricing-warning">El costo del concepto de "Cirugía" es únicamente para realizar el APARTADO de la misma, el resto se deberá pagar posteriormente.</p>
            </div>
        </div>
    </div>

  )
}

export default PurchaseDetails