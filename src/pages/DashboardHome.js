import React, { useState, useEffect } from "react";
import "../components/dashboardHome/dashboardHome.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import DataChart from "../components/dataChart/DataChart";
import { Link } from "react-router-dom";
import getEarningsByMonth from "../services/getMonthlyEarnings";
import getRevenue from "../services/getRevenue";

const DashboardHome = () => {
  const [currentMonth, setCurrentMonth] = useState("");
  const [pastMonth, setPastMonth] = useState("");
  const [beforePastMonth, setBeforePastMonth] = useState("");
  const [totalRevenue, setTotalRevenue] = useState("");
  const [pendingAppointments, setPendingAppointments] = useState("");
  const [pendingAppointmentsData, setPendingAppointmentsData] = useState("");

  const month = new Date();
  month.setMonth(month.getMonth());
  const current = month.toLocaleString("default", { month: "long" });

  const previousMonth = new Date();
  previousMonth.setMonth(previousMonth.getMonth() - 1);
  const prev = previousMonth.toLocaleString("default", { month: "long" });

  const beforePrevMonth = new Date();
  beforePrevMonth.setMonth(beforePrevMonth.getMonth() - 2);
  const bef = beforePrevMonth.toLocaleString("default", { month: "long" });

  useEffect(() => {
    getEarnings();
    getTotalRevenue();
    getPendingAppointments();
    getAllPendingAppointments();
  }, []);

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
      Nombre: "RINOPLASTIA",
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

  function getEarnings() {
    getEarningsByMonth()
      .then((response) => {
        let _respuesta = JSON.parse(response);

        if (_respuesta.response === "success") {
          setCurrentMonth(_respuesta.data["current"]["Total"]);
          setPastMonth(_respuesta.data["past"]["Total"]);
          setBeforePastMonth(_respuesta.data["pastBefore"]["Total"]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getTotalRevenue() {
    let formData = new FormData();
    formData.append("option", 1);

    getRevenue(formData).then((response) => {
      let _respuesta = JSON.parse(response);
      if (_respuesta.response === "success") {
        setTotalRevenue(_respuesta.data["Total"]);
      }
    });
  }

  function getPendingAppointments() {
    let formData = new FormData();
    formData.append("option", 0);

    getRevenue(formData).then((response) => {
      let _respuesta = JSON.parse(response);
      if (_respuesta.response === "success") {
        setPendingAppointments(_respuesta.data["Total"]);
      }
    });
  }

  function getAllPendingAppointments() {
    let formData = new FormData();
    formData.append("option", 3);

    getRevenue(formData).then((response) => {
      let _respuesta = JSON.parse(response);

      if (_respuesta.response === "success") {
        setPendingAppointmentsData(_respuesta.data);
      }
    });
  }

  return !totalRevenue || !pendingAppointments || !pendingAppointmentsData ? (
    <div classname="d-flex justify-content-center">
      <div classname="spinner-border" role="status">
        <span classname="sr-only">Loading...</span>
      </div>
    </div>
  ) : (
    <div className="container-fluid black-background dashboardHome">
      <div className="container text-white py-4">
        <h1 className="font-light">PANEL DE ADMINISTRACIÓN</h1>
        <hr className="separator" />
        <div className="row my-4">
          <div className="col-12 col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 dashboardHome__cardBlack p-4 my-3">
            <div>
              <h3 className="text-center">CITAS</h3>
            </div>
            <hr className="separator" />
            <div className="row text-center mb-4">
              <div className="col-6">
                <h4>{totalRevenue}</h4>
                <p className="font-light">Atentidas</p>
              </div>
              <div className="col-6">
                <h4>{pendingAppointments}</h4>
                <p className="font-light">Pendientes</p>
              </div>
            </div>

            <div className="col-12">
              <p>
                <AiOutlineCheckCircle className="fs-2" />{" "}
                {(currentMonth * 800).toLocaleString("es-MX", {
                  style: "currency",
                  currency: "MXN",
                })}{" "}
                de ingresos en {current}
              </p>
            </div>
            <div className="col-12">
              <p>
                <AiOutlineCheckCircle className="fs-2" />{" "}
                {(pastMonth * 800).toLocaleString("es-MX", {
                  style: "currency",
                  currency: "MXN",
                })}{" "}
                de ingresos en {prev}
              </p>
            </div>
            <div className="col-12">
              <p>
                <AiOutlineCheckCircle className="fs-2" />{" "}
                {(beforePastMonth * 800).toLocaleString("es-MX", {
                  style: "currency",
                  currency: "MXN",
                })}{" "}
                de ingresos en {bef}
              </p>
            </div>
          </div>
          <div className="col-1 col-xl-1 col-lg-1 col-md-0 col-sm-0 col-xs-0"></div>
          <div className="col-12 col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 dashboardHome__white p-4 my-3">
            <DataChart data={data} />
          </div>
          <div className="col-12 my-4">
            <hr className="separator" />
            <h3>CITAS SIN ATENDER</h3>
            <div className="dashboardHome__cardBlack">
              <table className="table text-white">
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
                {!pendingAppointmentsData ? (
                  <div classname="d-flex justify-content-center">
                    <div classname="spinner-border" role="status">
                      <span classname="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  pendingAppointmentsData.map((item) => (
                    <thead key={item.id_usuario}>
                      <tr scope="col">
                        <th>{item.nombre}</th>
                        <th>{item.apellidos}</th>
                        <th>
                          <a
                            href={`https://wa.me/+5215532118512?text=Hola%2C%20${item.nombre}`}
                            target="_blank"
                          >
                            {item.telefono}
                          </a>
                        </th>
                        <th>{item.procedimiento}</th>
                        <th>{item.registro}</th>
                        <th>
                          <Link to={`/detalles/${item.id_usuario}`}>
                            Ver datalles
                          </Link>
                        </th>
                      </tr>
                    </thead>
                  ))
                )}
              </table>
            </div>
          </div>
          <hr className="separator" />
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
