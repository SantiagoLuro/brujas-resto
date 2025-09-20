import React from "react";
import { asset } from "../lib/asset";

const COUNT = 12; // cambiá si tenés otra cantidad
const IMGS = Array.from({ length: COUNT }, (_, i) =>
  asset(`img/gallery/${String(i + 1).padStart(2, "0")}.jpg`)
);

export default function Gallery() {
  return (
    <section id="galeria" className="section alt">
      <div className="container">
        <h2 className="section-title">Galería</h2>
        <div className="gallery-grid">
          {IMGS.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Foto ${i + 1}`}
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
