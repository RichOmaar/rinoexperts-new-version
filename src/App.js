import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// import Aos from 'aos';
// import 'aos/dist/aos.css'

import Navbar from "./components/navbar/Narvbar";
import Home from "./pages/Home";
import Footer from "./components/footer/Footer";

import Servicios from "./pages/services/Servicios";
import Rinoplastia from "./pages/services/Rinoplastia";
import Blefaroplastia from "./pages/services/Blefaroplastia";
import Bichectomia from "./pages/services/Bichectomia";

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
import CrisalixReceipt from "./pages/CrisalixReceipt";
import Pomuloplastia from "./pages/services/Pomuloplastia";
import Ritidectomia from "./pages/services/Ritidectomia";
import Ritidoplastia from "./pages/services/Ritidoplastia";
import Mentoplastia from "./pages/services/Mentoplastia";
import Lipopapada from "./pages/services/Lipopapada";
import LiftLabios from "./pages/services/LiftLabios";
import LiftCuello from "./pages/services/LiftCuello";
import AboutUs from "./pages/AboutUs";
import AddPassword from "./pages/AddPassword";
import LoginNav from "./pages/LoginNav";
import UserDashboard from "./pages/UserDashboard";
import AppointmentCancel from "./pages/AppointmentCancel";
import DashboardHome from "./pages/DashboardHome";
import DashboardAppointmentsDetail from "./pages/DashboardAppointmentsDetail";
import Lottery from "./pages/Lottery";

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      {/* https://mockuphone.com/ */}
      <Routes>
        <Route path="/" element={<Lottery />} />
        {/* <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Servicios />} />

        <Route path="/servicios/rinoplastia" element={<Rinoplastia />} />
        <Route path="/servicios/blefaroplastia" element={<Blefaroplastia />} />
        <Route path="/servicios/bichectomia" element={<Bichectomia />} />
        <Route path="/servicios/pomuloplastia" element={<Pomuloplastia />} />
        <Route path="/servicios/estiramiento-facial" element={<Ritidectomia />} />
        <Route path="/servicios/levantamiento-cejas" element={<Ritidoplastia />} />
        <Route path="/servicios/mentoplastia" element={<Mentoplastia />} />
        <Route path="/servicios/lipopapada" element={<Lipopapada />} />
        <Route path="/servicios/lifting-labios" element={<LiftLabios />} />
        <Route path="/servicios/lifting-cuello" element={<LiftCuello />} />
        
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
        <Route path="/contacto" element={<ContactUs />} /> */}
        {/* Formulario apra previsualización de crisalix */}
        {/* <Route path="/formulario-nueva-imagen" element={<NewImageForm />} />
        <Route path="/informacion-personal-previsualizacion" element={<PersonalDataProposal />} />
        <Route path="/historial-medico-previsualizacion" element={<MedicalRecordProposal />} />
        <Route path="/registro-exitoso" element={<CrisalixReceipt />} />
        <Route path="/cita-cancelada" element={<AppointmentCancel />} /> */}
        {/* Formulario apra previsualización de crisalix */}
        {/* <Route path="/rinoexperts" element={<AboutUs />} />
        <Route path="/completar-perifl" element={<AddPassword />} />
        <Route path="/login-citas" element={<LoginNav />} />
        <Route path="/mis-citas" element={<UserDashboard />} /> */}
        
        {/* Dashboard */}
        {/* <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/citas-agendadas/:id_usuario" element={<DashboardAppointmentsDetail />} /> */}

      </Routes>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
