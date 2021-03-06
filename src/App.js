import React from "react";
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
import Schedule from "./pages/Schedule";
import PurchaseDetails from "./pages/PurchaseDetails";
import Summary from "./pages/Summary";
import Team from "./pages/Team";
import Crisalix from "./pages/Crisalix";
import FAQ from "./pages/FAQ";
import TopFAQ from "./components/topFAQ/TopFAQ";
import ContactUs from "./pages/ContactUs";
import NewImageForm from "./pages/NewImageForm";
import PersonalDataProposal from "./pages/PersonalDataProposal";
import MedicalRecordProposal from "./pages/MedicalRecordProposal";

function App() {
  return (
    <div>
      <Navbar />
      {/* https://mockuphone.com/ */}
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
        <Route path="/agendar-citas" element={<Schedule />} />
        <Route path="/detalles-citas" element={<PurchaseDetails />} />
        <Route path="/resumen-citas" element={<Summary />} />
        <Route path="/equipo" element={<Team />} />
        <Route path="/visualizar-imagen" element={<Crisalix />} />
        <Route path="/preguntas-frecuentes" element={<FAQ />} />
        <Route path="/top-faqs" element={<TopFAQ />} />
        <Route path="/contacto" element={<ContactUs />} />
        <Route path="/formulario-nueva-imagen" element={<NewImageForm />} />
        <Route path="/informacion-personal-previsualizacion" element={<PersonalDataProposal />} />
        <Route path="/historial-medico-previsualizacion" element={<MedicalRecordProposal />} />
        

      </Routes>

      <Footer />
    </div>
  );
}

export default App;
