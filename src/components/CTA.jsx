import React from "react";

export default function CTA() {
  return (
    <section id="reservas" className="cta">
      <div className="container cta-row">
        <div style={{ textAlign: "center" }}>
          <h3 style={{ margin: 0 }}>¿Listo para reservar?</h3>
          <p className="muted" style={{ marginTop: 6 }}>
            Contactanos y te guardamos mesa al instante.
          </p>
        </div>

        {/* Más separación gracias a .cta-row (gap: 18px) */}
        <a className="btn lg" href="https://wa.me/5491112345678" target="_blank" rel="noreferrer">
          Reservar por WhatsApp
        </a>
      </div>
    </section>
  );
}
