import React from "react";

/** Iconos SVG (estrellas) */
function Star({ type = "full" }) {
  const common = { width: 16, height: 16, viewBox: "0 0 24 24" };
  if (type === "half") {
    return (
      <svg {...common} aria-hidden="true">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stopColor="currentColor" />
            <stop offset="50%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <path
          d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          fill="url(#half)"
          stroke="currentColor"
          strokeWidth="1"
        />
      </svg>
    );
  }
  if (type === "empty") {
    return (
      <svg {...common} aria-hidden="true">
        <path
          d="M22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.64-7.03L22 9.24z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    );
  }
  // full
  return (
    <svg {...common} aria-hidden="true">
      <path
        d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Renderiza 0..5 estrellas (admite .5) */
function Stars({ rating }) {
  // rating puede ser 4, 4.5 o 5
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;
  const total = 5;

  return (
    <div className="stars" aria-label={`Calificación: ${rating} de 5`}>
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f${i}`} className="star"><Star type="full" /></span>
      ))}
      {hasHalf && <span className="star"><Star type="half" /></span>}
      {Array.from({ length: total - full - (hasHalf ? 1 : 0) }).map((_, i) => (
        <span key={`e${i}`} className="star empty"><Star type="empty" /></span>
      ))}
    </div>
  );
}

const REVIEWS = [
  {
    name: "Carolina",
    text: "La mejor parrilla de la zona. Volveré!",
    rating: 5, // <<-- 4 o 5 (o 4.5 si querés)
  },
  {
    name: "Martín",
    text: "Atención excelente y platos abundantes.",
    rating: 4, // <<-- 4 estrellas
  },
  {
    name: "Sofía",
    text: "Reservé por WhatsApp, súper cómodo.",
    rating: 4.5, // <<-- ejemplo con media, opcional
  },
];

export default function Reviews() {
  return (
    <div className="grid">
      {REVIEWS.map((r, i) => (
        <article key={i} className="card">
          <Stars rating={r.rating} />
          <p style={{ marginTop: 10, marginBottom: 12 }}>“{r.text}”</p>
          <p className="muted">— {r.name}</p>
        </article>
      ))}
    </div>
  );
}
