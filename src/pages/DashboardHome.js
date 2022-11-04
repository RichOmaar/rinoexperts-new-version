import React from "react";
import '../components/dashboardHome/dashboardHome.css';
import { AiOutlineCheckCircle } from "react-icons/ai";
import DataChart from "../components/dataChart/DataChart";
import { Link } from "react-router-dom";

const DashboardHome = () => {
  const data = [
    {
      name: "Lunes",
      Citas: 2,
    },
    {
      name: "Martes",
      Citas: 3,
    },
    {
      name: "Miércoles",
      Citas: 2,
    },
    {
      name: "Jueves",
      Citas: 2,
    },
    {
      name: "Viernes",
      Citas: 1,
    },
    {
      name: "Sábado",
      Citas: 2,
    },
    {
      name: "Domingo",
      Citas: 3,
    },
  ];
  
  const dataServices = [
    {
      name: "RINO",
      Nombre: 'RINOPLASTIA',
      Citas: 2,
    },
    {
      name: "POMULO",
      Citas: 3,
    },
    {
      name: "BLEFARO",
      Citas: 2,
    },
    {
      name: "RITIDEC",
      Citas: 2,
    },
    {
      name: "RITIDO",
      Citas: 1,
    },
    {
      name: "BICHE",
      Citas: 2,
    },
    {
      name: "MENTO",
      Citas: 3,
    },
    {
      name: "LIPOPAPADA",
      Citas: 3,
    },
    {
      name: "LABIOS",
      Citas: 3,
    },
    {
      name: "CUELLO",
      Citas: 3,
    },
  ];
  
  return (
    <div className="container-fluid black-background dashboardHome">
      <div className="container text-white py-4">
        <h1 className="font-light">PANEL DE ADMINISTRACIÓN</h1>
        <hr className="separator"/>
        <div className="row my-4">
          <div className="col-12 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 dashboardHome__cardBlack p-4">
            <div>
              <h3 className="text-center">CITAS</h3>
            </div>
            <hr className="separator"/>
            <div className="row text-center mb-4">
              <div className="col-6">
                <h4>100</h4>
                <p className="font-light">Atentidas</p>
              </div>
              <div className="col-6">
                <h4>50</h4>
                <p className="font-light">Pendientes</p>
              </div>
            </div>
            <div className="col-12">
                <p><AiOutlineCheckCircle className="fs-2"/> $8000 de ingresos en Noviembre</p>
            </div>
            <div className="col-12">
                <p><AiOutlineCheckCircle className="fs-2"/> $10000 de ingresos en Octubre</p>
            </div>
            <div className="col-12">
                <p><AiOutlineCheckCircle className="fs-2"/> $6000 de ingresos en Septiembre</p>
            </div>
          </div>
          <div className="col-1"></div>
          <div className="col-12 col-xl-7 col-lg-7 col-md-6 col-sm-12 col-xs-12 dashboardHome__white p-4">
            <DataChart data={data} />
          </div>
          <div className="col-12 my-4">
            <hr className="separator"/>
            <h3>CITAS SIN ATENDER</h3>
            <div className="dashboardHome__cardBlack">
                <table class="table text-white">
                    <thead>
                        <tr scope="col">
                            <th>NOMBRE</th>
                            <th>APELLIDOS</th>
                            <th>TELEFONO</th>
                            <th>SERVICIO</th>
                            <th>FECHA REGISTRO</th>
                            <th></th>
                        </tr>
                    </thead>
                    <thead>
                        <tr scope="col">
                            <th>JUAN OMAR</th>
                            <th>CAMACHO</th>
                            <th>5534080960</th>
                            <th>RINOPLASTIA</th>
                            <th>04/11/2022</th>
                            <th><Link to="/detalles/" >Ver todo</Link></th>
                        </tr>
                    </thead>
                    <thead>
                        <tr scope="col">
                            <th>JUAN OMAR</th>
                            <th>CAMACHO</th>
                            <th>5534080960</th>
                            <th>RINOPLASTIA</th>
                            <th>04/11/2022</th>
                            <th><Link to="/detalles/" >Ver todo</Link></th>
                        </tr>
                    </thead>
                </table>
            </div>
          </div>
          <hr className="separator"/>
          <h3>MÉTRICAS DE SERVICIOS</h3>
          <div className="col-12 dashboardHome__dataServices dashboardHome__white p-4">
            <DataChart data={dataServices} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
