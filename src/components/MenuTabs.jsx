import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuModal from "./MenuModal.jsx";

const IMG = (name) => `/img/menu/${name}`;

const MENU = {
  Entradas: [
    { n: "Provoleta", d: "Queso fundido con hierbas.", p: "$5.500", img: IMG("provoleta.jpg"),
      det: "Provoleta dorada a la plancha con orégano y ají molido.",
      ing: ["Provolone", "Orégano", "Ají molido", "Aceite de oliva"], porcion: "1 unidad", tags: ["Vegetariano"] },
    { n: "Empanadas criollas", d: "Carne a cuchillo.", p: "$1.500", img: IMG("empanda.jpg"),
      det: "Horneadas, masa casera.", ing: ["Carne", "Cebolla", "Huevo", "Aceitunas"], porcion: "1 un." },
    { n: "Chorizo", d: "Con chimichurri casero.", p: "$2.900", img: IMG("chorizo.jpg"),
      det: "Chori 100% cerdo.", ing: ["Chorizo", "Chimichurri"], porcion: "1 un." },
  ],

  Parrilla: [
    { n: "Vacío", d: "A punto jugoso.", p: "$10.900", img: IMG("vacio.jpg"),
      det: "Costra crocante, centro tierno.", ing: ["Vacío", "Sal parrillera"], porcion: "350 g", tags: ["Sin TACC*"] },
    { n: "Pollo deshuesado", d: "Limón y hierbas.", p: "$7.900", img: IMG("pollo.jpg"),
      det: "Muslo deshuesado a la parrilla.", ing: ["Pollo", "Limón", "Tomillo"], porcion: "1/4", tags: ["Sin TACC*"] },
    { n: "Parrillada", d: "Surtido para compartir.", p: "$45.000", img: IMG("parrillada.jpg"),
      det: "Asado, pollo, chorizo, morcilla y guarniciones.", ing: ["Asado", "Pollo", "Chorizo", "Morcilla", "Papas"], porcion: "2-3 pers." },
  ],

  Milanesas: [
    { n: "Napolitana", d: "Jamón, queso y papas.", p: "$18.500", img: IMG("milanesanapolitana.jpg"),
      det: "Fileto casero y muzza gratinada.", ing: ["Carne", "Huevo", "Pan rallado", "Jamón", "Queso"], porcion: "1 plato" },
    { n: "A caballo", d: "Con huevos fritos.", p: "$19.800", img: IMG("milanesacaballo.jpg"),
      det: "Clásica con papas bastón.", ing: ["Carne", "Huevo", "Pan rallado", "Huevos"], porcion: "1 plato" },
  ],

  Sandwiches: [
    { n: "Bondiola braseada", d: "Criolla y papas.", p: "$17.500", img: IMG("bondiolabraseada.jpg"),
      det: "12 h de cocción, pan de masa madre.", ing: ["Bondiola", "Pan", "Criolla"], porcion: "1 un." },
    { n: "Choripán", d: "Chimichurri casero.", p: "$8.900", img: IMG("chorizo.jpg"),
      det: "Pan tostado y chori a la brasa.", ing: ["Chorizo", "Pan", "Chimichurri"], porcion: "1 un." },
  ],

  Pastas: [
    { n: "Sorrentinos caprese", d: "Fileto o crema.", p: "$22.000", img: IMG("sorrentinos.jpg"),
      det: "Relleno de albahaca y muzza.", ing: ["Harina", "Huevo", "Tomate", "Mozzarella", "Albahaca"], porcion: "350 g", tags: ["Vegetariano"] },
    { n: "Ñoquis caseros", d: "Papa, salsa a elección.", p: "$15.000", img: IMG("nioquis.jpg"),
      det: "Tradicionales del 29.", ing: ["Papa", "Harina", "Huevo"], porcion: "350 g", tags: ["Vegetariano"] },
  ],

  Parrilladas: [
    { n: "Parrillada", d: "Surtido para compartir.", p: "$45.000", img: IMG("parrillada.jpg"),
      det: "Incluye chimichurri y criolla.", ing: ["Asado", "Pollo", "Chorizo", "Morcilla", "Verduras"], porcion: "2-3 pers." },
  ],
};

export default function MenuTabs() {
  const [tab, setTab] = useState("Entradas");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  const openItem = (item) => { setActive(item); setOpen(true); };
  const close = () => { setOpen(false); setTimeout(() => setActive(null), 200); };

  return (
    <section id="menu" className="section container">
      <h2 className="section-title">Nuestro Menú</h2>

      <div className="tabs">
        {Object.keys(MENU).map((k) => (
          <button key={k} onClick={() => setTab(k)} className={`tab ${tab === k ? "active" : ""}`}>
            {k}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          className="grid"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.35 }}
        >
          {MENU[tab].map((i, idx) => (
            <motion.article
              key={i.n + idx}
              className="card menu-item"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              onClick={() => openItem(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openItem(i)}
            >
              <img
                className="thumb"
                src={i.img}
                alt={i.n}
                loading="lazy"
                onError={(e) => { e.currentTarget.src = "/img/placeholder.jpg"; }}
              />
              <div className="card-body">
                <div className="card-head">
                  <h3>{i.n}</h3>
                  <span className="price">{i.p}</span>
                </div>
                <p className="muted">{i.d}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      <MenuModal open={open} onClose={close} item={active} />
    </section>
  );
}
