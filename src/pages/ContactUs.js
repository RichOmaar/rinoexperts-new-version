import React, { useState, useEffect } from 'react';
import '../components/contactUs/contactUs.css';
import Location from '../components/location/Location';

import Swal from 'sweetalert2';

const ContactUs = () => {

  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
      window.scrollTo(0, 0)
  }, [])

  function onChangeName(e){
    setName(e.target.value);
  }
  function onChangeSubject(e){
    setSubject(e.target.value);
  }
  function onChangeMessage(e){
    setMessage(e.target.value);
  }

  function senMessage(e) {
    e.preventDefault();

    if(name != '' && subject != '' && message != '') {
      Swal.fire({
        title: '¡Gracias!',
        text: 'En breve serás redireccionado a WhatsApp',
        icon: 'success',
        showConfirmButton: false,
        timer: 2000
      })

      setName('');
      setSubject('');
      setMessage('');
      
      setTimeout(() => {
        window.open('https://api.whatsapp.com/send?phone=5215532118512&text=Hola%20mi%20nombre%20es%20' + name + '%20y%20me%20pongo%20en%20contacto%20por%20' + subject + '.%20' + message, '_blank');
      }, 2000);
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Por favor llena todos los campos.',
      })
    }
  }

  return (
    <div className="container-fluid black-background py-4">
        <div className="conainer">
          <div className="row">
            <section className="col-12 text-center text-white-color">
              <h1>CONTÁCTANOS</h1>
              <p className="text-gray-color">Si tienes alguna duda por favor llena el siguiente formulario y en breve te responderemos.</p>
            </section>
            <form className="contact-form" onSubmit={senMessage}>
              <input type="text" className="form-control" placeholder="Nombre" value={name} onChange={onChangeName} required/>
              <input type="text" className="form-control" placeholder="Asunto" value={subject} onChange={onChangeSubject} required/>
              <textarea type="text" className="form-control" placeholder="Mensaje" value={message} onChange={onChangeMessage} required/>
              <button type="submit" className="see-more-button-green" >Enviar</button>
            </form>
          </div>
        </div>
        <hr className="hr-contact-form"/>
        <Location className="p-0"/>
    </div>
  )
}

export default ContactUs;