import React, { useEffect } from 'react';
import addUserPayment from '../services/addPayment';

const PurchaseResume = () => {
    
    useEffect(() => {
      sendPayment(window.location.search);
    },[])
    
    function sendPayment(sessionPayment) {
      console.log(sessionPayment.split("=")[1]);
      let formData = new FormData();
      formData.append("session",sessionPayment.split("=")[1]);

      addUserPayment(formData).then((response) => {
        let _respuesta = JSON.parse(response);
        console.log(_respuesta);
      })
    }
  return (
    <div>PurchaseResume</div>
  )
}

export default PurchaseResume;