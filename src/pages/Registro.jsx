import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { FaQrcode } from "react-icons/fa";

export const Registro = () => {
  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();

  const handleSumbit = async () => {
    // Simula un inicio de sesión exitoso
    setUser("");
    setPwd("");
    navigate("/Registro");
  };

  return (
    <div className={styles.contenedorGeneral}>
      <div className={styles.azular}>
        <div className={styles.azul1}></div>
        <div className={styles.contenedorForm}>
          <div className={styles.aux}>
            <h1 className={styles.texto1}>
              
              SistemQR<span className={styles.adelgazar}> | </span>
              <FaQrcode />
            </h1>
            <br />
            <h1>Registro</h1>
            <h2 className={styles.bienvenidoAgain}>
              Por favor ingrese sus credenciales
            </h2>
            <br />
            <form>
              <div className={styles.inputs}>
                <TextField
                  tabIndex="1"
                  type="text"
                  placeholder="Nombre"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon className={styles.usuario} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                        borderRadius: "10px",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <TextField
                  tabIndex="1"
                  type="text"
                  placeholder="Apellido Paterno"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon className={styles.usuario} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                        borderRadius: "10px",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <TextField
                  tabIndex="1"
                  type="text"
                  placeholder="Apellido Materno"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon className={styles.usuario} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                        borderRadius: "10px",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <TextField
                  tabIndex="1"
                  type="text"
                  placeholder="Correo electrónico"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon className={styles.usuario} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                        borderRadius: "10px",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <TextField
                  tabIndex="1"
                  type="text"
                  placeholder="Numero telefónico"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon className={styles.usuario} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                        borderRadius: "10px",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <TextField
                  tabIndex="1"
                  type="text"
                  placeholder="Contrasña"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon className={styles.usuario} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                        borderRadius: "10px",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                />
                <TextField
                  tabIndex="2"
                  type="password"
                  placeholder="Repetir contraseña"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon className={styles.usuario} />
                      </InputAdornment>
                    ),
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "white",
                        borderRadius: "10px",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "white",
                      },
                    },
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleSumbit();
                    }
                  }}
                />
              </div>
              <a
                href="#"
                className={styles.enlaceLogin}
                tabIndex="3"
                onClick={handleSumbit}
              >
                Registrar <i className="bi bi-chevron-right"></i>
              </a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
