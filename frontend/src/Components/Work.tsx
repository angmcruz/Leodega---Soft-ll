import React from "react";
import "./Work.css";

const Work = () => {
  const steps = [
    { icon: "bx bx-check", title: "Escoge la ubicación", text: "Busca la mejor bodega" },
    { icon: "bx bx-calendar", title: "Fecha de inicio", text: "Selecciona fecha y hora de inicio" },
    { icon: "bx bx-car", title: "Reserva tu bodega", text: "Contacta con el arrendador" },
  ];

  return (
    <section className="how-it-works">
      <span className="section-tag">CÓMO TRABAJAMOS</span>
      <h2>Alquila con los siguientes 3 pasos</h2>
      <div className="steps-container">
        {steps.map((step, i) => (
          <div className="step-card" key={i}>
            <i className={step.icon}></i>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;
