import React from "react";
import Hero from "../components/Hero.jsx";
import Reviews from "../components/Reviews.jsx";
import CTA from "../components/CTA.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section container">
        <h2 className="section-title">Opiniones</h2>
        <Reviews />
      </section>
      <CTA />
    </>
  );
}
