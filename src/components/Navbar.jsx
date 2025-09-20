import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container nav-row">
        <NavLink to="/" className="brand" onClick={close}>
          BRUJAS <span>Restó</span>
        </NavLink>

        <button
          className="nav-toggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>

        <nav className={`nav-menu ${open ? "open" : ""}`}>
          <NavLink className="nav-link" to="/" onClick={close} end>Inicio</NavLink>
          <NavLink className="nav-link" to="/menu" onClick={close}>Menú</NavLink>
          <NavLink className="nav-link" to="/galeria" onClick={close}>Galería</NavLink>
          <NavLink className="nav-link" to="/ubicacion" onClick={close}>Ubicación</NavLink>
          <NavLink className="btn nav-cta" to="/reservar" onClick={close}>Reservar</NavLink>
        </nav>
      </div>
    </header>
  );
}
