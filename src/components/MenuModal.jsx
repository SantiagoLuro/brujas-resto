import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MenuModal({ open, onClose, item }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && item && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={`Detalle de ${item.n}`}>
          <motion.div
            className="backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.article
            className="sheet"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
          >
            <button className="close" onClick={onClose} aria-label="Cerrar detalle">✕</button>

            {item.img && <img className="media" src={item.img} alt={item.n} loading="lazy" />}

            <div className="content">
              <header className="head">
                <h2>{item.n}</h2>
                <span className="price">{item.p}</span>
              </header>

              <p className="muted" style={{ marginTop: 6 }}>{item.d}</p>

              {item.det && (
                <>
                  <h4 style={{ marginTop: 16, marginBottom: 8 }}>Detalles</h4>
                  <p>{item.det}</p>
                </>
              )}

              {(item.ing || []).length > 0 && (
                <>
                  <h4 style={{ marginTop: 16, marginBottom: 8 }}>Ingredientes</h4>
                  <ul className="bullets">
                    {item.ing.map((x, i) => <li key={i}>{x}</li>)}
                  </ul>
                </>
              )}

              <div className="meta">
                {item.porcion && <span className="pill">Porción: {item.porcion}</span>}
                {(item.tags || []).map((t, i) => (
                  <span key={i} className="pill">{t}</span>
                ))}
              </div>
            </div>
          </motion.article>
        </div>
      )}
    </AnimatePresence>
  );
}
