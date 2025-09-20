import React from "react";
import MenuTabs from "../components/MenuTabs.jsx";

export default function MenuPage() {
  return (
    <>
      <section className="section container">
        <h1 className="section-title">Nuestro Menú</h1>
        <p className="muted" style={{ textAlign: "center", marginBottom: 18 }}>
          Parrilla, milanesas, pastas y más. Cada plato con su foto.
        </p>
      </section>
      <MenuTabs />
    </>
  );
}
