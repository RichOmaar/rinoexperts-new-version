import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar/Narvbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";
import Servicios from "./pages/services/Servicios";
import Otoplastia from "./pages/services/Otoplastia";
import Rinoplastia from "./pages/services/Rinoplastia";
import Presentation from "./pages/Presentation";
import PersonalData from "./pages/PersonalData";
import MedicalRecord from "./pages/MedicalRecord";
import NosePreference from "./pages/NosePreference";
import Appointment from "./pages/Appointment";
// import Schedule from "./pages/Schedule";c

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/servicios/otoplastia" element={<Otoplastia />} />
        <Route path="/servicios/rinoplastia" element={<Rinoplastia />} />
        <Route path="/presentacion" element={<Presentation />} />
        <Route path="/informacion-personal" element={<PersonalData />} />
        <Route path="/historial-medico" element={<MedicalRecord />} />
        <Route path="/seleccion-nariz" element={<NosePreference />} />
        <Route path="/consulta" element={<Appointment />} />
        {/* <Route path="/agendar-citas" element={<Schedule />} /> */}

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
