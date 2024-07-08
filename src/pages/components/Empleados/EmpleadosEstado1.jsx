import React, { useEffect, useState } from "react";
import css from "./EmpleadosEstado1.module.css";

export const EmpleadosEstado1 = ({ titulo, descripcion, cantidad }) => {
  const [expandido, setExpandido] = useState(false);
  const cardclassName = `${css.card} ${expandido ? css.expandido : ""}`;
  const infoEscondidaclassName = `${css.infoEscondida} ${
    expandido ? css.mostrar : ""
  }`;
  const handleClic = () => {
    setExpandido(!expandido);
  };

  return (
    <div className={cardclassName} onClick={handleClic}>
      <h3 className={css.titulo}>{titulo}</h3>
      <p className={css.desc}>{descripcion}</p>
      <div className={css.alinearFinal}>
        <h3 className={css.cantidad}>{cantidad}</h3>
      </div>
      <section className={css.infoEscondida}>
        <div>
          <span>Software 9</span>
          <div className={css.linea}></div>
          <span>Seguridad 20</span>
          <div className={css.linea}></div>
          <span>Redes 12</span>
          <div className={css.linea}></div>
        </div>
      </section>
    </div>
  );
};
