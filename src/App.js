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

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
