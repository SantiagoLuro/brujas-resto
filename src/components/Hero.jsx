import React from "react";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <video className="hero-video" autoPlay muted loop playsInline poster="/hero.jpg">
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <h1>Auténtico sabor criollo</h1>
        <p>Menú a la parrilla, ambiente único y reservas directas.</p>
        <a href="/reservar" className="btn">Reservar ahora</a>
      </div>
    </section>
  );
}
