import React from "react";
import css from "./CardHorario.module.css";
export const CardHorario = () => {
  return (
    <div>
      <div className={css.card}>
        <div className={css.superior}>
          <div className={css.capsula}>
            <img
              src="https://i.pinimg.com/564x/0b/88/71/0b887102f2cfb795a6bbb8b8006a7117.jpg"
              className={css.imagen}
            />
            <div className={css.capsula2}>
              <h2 className={css.nombre}>Jaime Eduardo Grimaldo Moreno</h2>
              <h3>Programador FrontEnd</h3>
            </div>
          </div>
          <span className={css.estado}>Presente</span>
        </div>

        <div className={css.inferior}>
          <div className={css.contHora}>
            <h3>Hora de entrada</h3>
            <h2>8:00am</h2>
          </div>
          <div className={css.contHora}>
            <h3>Hora de salida</h3>
            <h2>6:00pm</h2>
          </div>
          <div className={css.contHora}>
            <h3>Hora de descanso</h3>
            <h2>3:00pm</h2>
          </div>
          <div className={css.contHora}>
            <h3>Tiempo de descanso</h3>
            <h2>1:00hr</h2>
          </div>
          <div className={css.contHora}>
            <h3>Horas extras registradas</h3>
            <h2>-</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
