import React, { useEffect, useState } from "react";
import css from "./EmpleadosEstado.module.css";

export const EmpleadosEstado = ({
  titulo,
  descripcion,
  cantidad,
  color,
  colort,
  width1,
  height1,
  font,
}) => {
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
      <div className={css.titulo}>{titulo}</div>
      <div className={css.desc}>{descripcion}</div>
      <div className={css.alinearFinal}>
        <div
          className={css.cantidad}
          style={{
            backgroundColor: color,
            color: colort,
            width: width1,
            height: height1,
            fontWeight: font,
          }}
        >
          {cantidad}
        </div>
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
