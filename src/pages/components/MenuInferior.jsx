import css from "./MenuInferior.module.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { alertaConfirm } from "./Admin/components/alerts/alertas";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";

export const MenuInferior = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleButtonClick = (button) => {
    setSelectedButton(button);
  };

  const datarol = localStorage.getItem("datarol");

  const cerrarSesion = () => {
    console.log("Tenemos ", datarol);
    localStorage.removeItem("token");
    localStorage.removeItem("datarol");
    navigate("/Login");
  };

  const preguntar = () => {
    Swal.fire({
      title: "Esta seguro?",
      text: "Vas a cerrar tu sesión",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, cerrar sesión",
    }).then((result) => {
      if (result.isConfirmed) {
        cerrarSesion();
      }
    });
  };

  return (
    <div className={css.contenedorGeneral}>
      <nav className={css.botones}>
        <div className={css.botonesIzquierdos}>
          <Link
            to="/Empleados"
            className={selectedButton === "people" ? "selected" : ""}
            onClick={() => handleButtonClick("people")}
          >
            <PeopleAltOutlinedIcon />
          </Link>
          <Link
            to="/Horarios"
            className={selectedButton === "clock" ? "selected" : ""}
            onClick={() => handleButtonClick("clock")}
          >
            <AccessTimeOutlinedIcon />
          </Link>
          <Link
            to="/Calendario"
            className={selectedButton === "calendar" ? "selected" : ""}
            onClick={() => handleButtonClick("calendar")}
          >
            <CalendarMonthOutlinedIcon />
          </Link>
          <Link
            to="/Configuracion"
            className={selectedButton === "gear" ? "selected" : ""}
            onClick={() => handleButtonClick("gear")}
          >
            <SettingsOutlinedIcon />
          </Link>
        </div>

        <button onClick={preguntar} className={css.botonCerrar}>
          <LogoutOutlinedIcon className={css.logout}></LogoutOutlinedIcon>
        </button>
      </nav>
    </div>
  );
};
