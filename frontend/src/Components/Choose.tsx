import React from "react";
import "./Choose.css";
import storageImg from "../img/storage.jpg";

const Choose = () => {
  const features = [
    { icon: "bx bx-money", title: "Precios transparentes", text: "Consulta precios sin costos ocultos." },
    { icon: "bx bx-layer", title: "Variedad de opciones", text: "Diferentes tamaños y ubicaciones." },
    { icon: "bx bx-time", title: "Disponibilidad actualizada", text: "Ve qué bodegas están libres." },
    { icon: "bx bx-chat", title: "Mensajería directa", text: "Contacta fácilmente al arrendador." },
  ];

  return (
    <section className="why-choose-us">
      <div className="why-image">
        <img src={storageImg} alt="Bodega interior" />
      </div>
      <div className="why-text">
        <span className="section-tag">POR QUÉ ESCOGERNOS</span>
        <h2>Ofrecemos la mejor experiencia con las bodegas</h2>
        <div className="feature-list">
          {features.map((f, i) => (
            <div className="feature-item" key={i}>
              <i className={f.icon}></i>
              <div>
                <h4>{f.title}</h4>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Choose;
