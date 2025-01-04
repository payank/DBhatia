import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar"; // Your Navbar Component
import Home from "./pages/Home";
import Team from "./pages/Team";
import Services from "./pages/service/Services";
import SectoralExposure from "./pages/SectoralExposure";
import KnowledgeBank from "./pages/KnowledgeBank";
import Careers from "./pages/Careers";
import Admin from "./pages/Admin";
import Contact from "./pages/Contact";
import ServiceDetails from "./pages/service/ServiceDetails";

function App() {
  return (
    <Router basename="/">
      <Navbar /> {/* Navbar visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetails />} />
        <Route path="/sectoral-exposure" element={<SectoralExposure />} />
        <Route path="/knowledge-bank" element={<KnowledgeBank />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
