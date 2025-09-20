import React from "react";
import { NavLink } from "react-router-dom";
import { asset } from "../lib/asset";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      {/* El poster se ve si el video tarda o si el navegador lo bloquea */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster={asset("hero.jpg")}
      >
        <source src={asset("hero.mp4")} type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="container hero-content">
        <h1>Auténtico sabor </h1>
        <p>Menú a la parrilla, ambiente único y reservas directas.</p>
        <NavLink to="/reservar" className="btn">Reservar ahora</NavLink>
      </div>
    </section>
  );
}
