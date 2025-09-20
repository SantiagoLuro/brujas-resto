export default function Location() {
  return (
    <section id="ubicacion" className="section alt">
      <div className="container">
        <h2 className="section-title">Ubicación</h2>
        <div className="map-wrap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.088841275!2d-58.5817!3d-34.4265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca4bdf8dc2bfb%3A0x4f8e4a3f97d1df3!2sAv.%20Victorica%20380%2C%20B1648%20Tigre%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1695123456789"
            width="100%"
            height="400"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
