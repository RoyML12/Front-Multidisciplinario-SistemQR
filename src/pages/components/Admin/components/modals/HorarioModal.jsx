import React from "react";
import "./HorarioModal.css";

export const HorarioModal = () => {
  return (
    <div className="fondo">
      <div className="contenedor">
        <div className="header">
          <h1 className="nombreEmpleado">Nombre del empleado</h1>
          <div className="botones">
            <button className="botonEditar">Editar</button>
            <button className="botonCerrar">Cerrar</button>
          </div>
        </div>

        <div className="tabla">
          <table>
            <thead>
              <tr>
                <th>Día</th>
                <th>Hora de Entrada</th>
                <th>Hora de Salida</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Lunes</td>
                <td>9:00 AM</td>
                <td>5:00 PM</td>
              </tr>
              <tr>
                <td>Martes</td>
                <td>9:00 AM</td>
                <td>5:00 PM</td>
              </tr>
              <tr>
                <td>Miércoles</td>
                <td>9:00 AM</td>
                <td>5:00 PM</td>
              </tr>
              <tr>
                <td>Jueves</td>
                <td>9:00 AM</td>
                <td>5:00 PM</td>
              </tr>
              <tr>
                <td>Viernes</td>
                <td>9:00 AM</td>
                <td>5:00 PM</td>
              </tr>
              <tr>
                <td>Sabado</td>
                <td>9:00 AM</td>
                <td>5:00 PM</td>
              </tr>
              <tr>
                <td>Domingo</td>
                <td>9:00 AM</td>
                <td>5:00 PM</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="forms">
          <div className="grupo1">
            <label>Tiempo de comida "hrs"</label>
            <input type="text" />
            <label>Hora de comida</label>
            <input type="time" />
          </div>

          <select name="" id="" className="select">
            <option value="">Seleccionar dia</option>
            <option value="">Lunes</option>
            <option value="">Martes</option>
            <option value="">Miercoles</option>
            <option value="">Jueves</option>
            <option value="">Viernes</option>
            <option value="">Sabado</option>
            <option value="">Domingo</option>
          </select>
        </div>
      </div>
    </div>
  );
};
