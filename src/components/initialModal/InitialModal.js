import React from 'react';
import './initialModal.css';
import Login from '../login/Login';

const InitialModal = () => {

    return (
      <div id="login-modal">
        <p className="col-12 text-center mt-4">¿Ya tienes cuenta?<span className="mx-2 presentation-account" id="login-modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >Da click aquí</span></p>

        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-black-color" id="staticBackdropLabel">Iniciar sesión</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body text-black-color">
                <Login />
              </div>
              <div className="modal-footer">
                <button type="submit" className="close-modal-button" data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default InitialModal;