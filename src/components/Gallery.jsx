import React from "react";

const COUNT = 12; // cambiá este número si tenés más/menos fotos
const IMGS = Array.from({ length: COUNT }, (_, i) =>
  `/img/gallery/${String(i + 1).padStart(2, "0")}.jpg`
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
              onError={(e) => {
                // si alguna falta, la oculto para que no quede un hueco
                e.currentTarget.style.display = "none";
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
