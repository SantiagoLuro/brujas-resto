import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

// Páginas (asegurate que el archivo se llame Home.jsx o cambia el import)
import Home from "./pages/Home.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import GaleriaPage from "./pages/GaleriaPage.jsx";
import UbicacionPage from "./pages/UbicacionPage.jsx";
import ReservarPage from "./pages/ReservarPage.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/galeria" element={<GaleriaPage />} />
          <Route path="/ubicacion" element={<UbicacionPage />} />
          <Route path="/reservar" element={<ReservarPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
