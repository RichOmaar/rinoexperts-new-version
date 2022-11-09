import React from 'react';
import '../components/dashboardAppointmentsDetail/dashboardAppointmentsDetail.css';

const DashboardAppointmentsDetail = () => {
  return (
    <div className="container-fluid black-background dashboard__appointments text-white-color">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2 className="font-light">{'OMAR CAMACHO'}</h2>
                </div>
                <div className="col mx-3 dashboardHome__cardBlack p-4 my-3">
                    <h3 className="font-light">Datos personales</h3>
                    <p>Nombres: {'Omar'}</p>
                    <p>Apellidos: {'Camacho'}</p>
                    <p>Género: {'Maculino'}</p>
                    <p>Correo: {'omar@gmail.com'}</p>
                    <p>Teléfono: {'5534080960'}</p>
                </div>
                {/* <div className="col-1 col-xl-1 col-lg-1 col-md-0 col-sm-0 col-xs-0"></div> */}
                <div className="col mx-3 dashboardHome__cardBlack p-4 my-3">
                    <h3 className="font-light">Dirección</h3>
                    <p>Código postal:: {'57210'}</p>
                    <p>Estado: {'Mexico'}</p>
                    <p>Municipio: {'Neza'}</p>
                    <p>Colonia: {'Estado de México'}</p>
                    <p>Procedimiento: {'Rinoplastia'}</p>
                </div>
            </div>
            <div className="row" >
                <div className="col-12">
                    <h2 className="font-light">Historial Médico</h2>
                </div>
                <div className="col mx-3 dashboardHome__cardBlack p-4 my-3">
                    <h3 className="font-light">Enfermedades</h3>
                    <p>Amsiedad</p>
                </div>
                <div className="col mx-3 dashboardHome__cardBlack p-4 my-3">
                    <h3 className="font-light">Meicamentos actuales</h3>
                    <p>Paracetamol</p>
                </div>
                <div className="col mx-3 dashboardHome__cardBlack p-4 my-3">
                    <h3 className="font-light">Procedimientos en nariz</h3>
                    <p>Inyectable: NO</p>
                    <p>Biopolímeros: NO</p>
                    <p>Funcional: SI</p>
                    <p>Estética: NO</p>
                    <p>Cantidad: 1</p>
                    <p>Protesis Nasal: NO</p>
                    <p>Carilago Oreja: NO</p>
                    <p>Carilago Costilla: NO</p>
                </div>
            </div>
            <div className="row" >
                <div className="col-12">
                    <h2 className="font-light">Preferencia de nariz</h2>
                </div>
                <div className="col-4 dashboardHome__cardBlack p-4 my-3">
                    <p>Muy Proyectada</p>
                    <p>Está muy ancha y no me gusta</p>
                </div>
            </div>
            <div className="row">
                <div className="col mx-3 dashboardHome__cardBlack p-4 my-3 text-center">
                    <h2>Imagen del usuario 1</h2>
                    <img className="img-fluid" src="https://rinoexperts.kinesiuz.com/assets/images/noseType/nose-1.jpg" alt="" />
                    <button className="blackButton mt-4">Descargar</button>
                </div>
                <div className="col mx-3 dashboardHome__cardBlack p-4 my-3 text-center">
                    <h2>Imagen del usuario 2</h2>
                    <img className="img-fluid" src="https://rinoexperts.kinesiuz.com/assets/images/noseType/nose-2.jpg" alt="" />
                    <button className="blackButton mt-4">Descargar</button>
                </div>
                <div className="col mx-3 dashboardHome__cardBlack p-4 my-3 text-center">
                    <h2>Imagen del usuario 3</h2>
                    <img className="img-fluid" src="https://rinoexperts.kinesiuz.com/assets/images/noseType/nose-3.jpg" alt="" />
                    <button className="blackButton mt-4">Descargar</button>
                </div>
            </div>
        </div>
    </div>
  );
}

export default DashboardAppointmentsDetail;