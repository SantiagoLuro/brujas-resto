import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5491112345678"
      className="wapp-fab wapp"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      {/* Podés reemplazar por un SVG si querés */}
      📞
    </a>
  );
}
