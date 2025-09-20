import React, { useMemo, useState } from "react";

export default function ReservarPage() {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(2);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [note, setNote] = useState("");

  const minDate = useMemo(() => new Date().toISOString().split("T")[0], []);
  const PHONE = "5491112345678"; // cambiá por el real

  const sendWhatsApp = (e) => {
    e.preventDefault();
    if (!name || !people || !date || !time) return alert("Completá nombre, personas, fecha y hora 🙂");
    const msg =
      `Hola, soy ${name}. Quiero reservar para ${people} ${Number(people)===1?"persona":"personas"} ` +
      `el ${date} a las ${time}.` + (note ? `\nNota: ${note}` : "");
    window.open(`https://wa.me/${PHONE}?text=${encodeURIComponent(msg)}`, "_blank");
  };

  return (
    <section className="section container">
      <h1 className="section-title">Reservas</h1>
      <p className="muted" style={{ textAlign: "center", marginBottom: 22 }}>
        Completá tus datos y te confirmamos por WhatsApp.
      </p>

      <form className="form card" onSubmit={sendWhatsApp}>
        <div className="row">
          <div className="field">
            <label>Nombre y apellido</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej: Santiago Luro" />
          </div>
          <div className="field">
            <label>Personas</label>
            <input type="number" min="1" value={people} onChange={(e) => setPeople(e.target.value)} />
          </div>
        </div>

        <div className="row">
          <div className="field">
            <label>Fecha</label>
            <input type="date" min={minDate} value={date} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div className="field">
            <label>Hora</label>
            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
          </div>
        </div>

        <div className="field">
          <label>Comentario (opcional)</label>
          <textarea rows="4" value={note} onChange={(e) => setNote(e.target.value)} placeholder="Mesa afuera, silla para bebé, etc." />
        </div>

        <button className="btn lg" type="submit">Enviar por WhatsApp</button>
      </form>
    </section>
  );
}
