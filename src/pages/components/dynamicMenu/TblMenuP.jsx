import React, { useEffect, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineSearch } from "react-icons/ai";
import axios from "../../../api/axios";
import Unauthorized from "../../Unauthorized";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { show_alerta } from "../../Admin/componentes/Request/function";

const url = "http://localhost:3001/items";

const MENUPOST_URL = "/menu/registrar";
const MENUGET_URL = "/menu/obtener";
const MENUPUT_URL = "/menu/actualizar/";
const MENUDELETE_URL = "/menu/eliminar/";

export default function TblMenuP({ datarol }) {
  const [datos, setDatos] = useState({
    name: "",
    parentMenuId: "",
    actionName: "",
    controllerName: "",
    areaSection: "",
    isProcess: "",
    orderMenu: "",
    iconMenu: "",
    titleMenu: "",
  });

  const [operation, setOperation] = useState(1);
  const [menus, setMenus] = useState([]);
  const [id_menu, setId] = useState("");
  const [items, setItems] = useState([]);
  const [menusPadres, setMenusPadres] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getMenus();
    getArea();
  }, []);

  const getMenus = async () => {
    var token64 = localStorage.getItem("token");

    for (let i = 0; i < import.meta.env.VITE_B64_NUMTIMES; i++) {
      token64 = atob(token64);
    }
    console.log("token descode", token64);
    const respuesta = await axios.get(MENUGET_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token64}`,
      },
    });
    console.log(respuesta.data);
    setMenus(respuesta.data.menus);
    console.log("Menus", menus);
    filtrarMenu(respuesta.data.menus);
  };

  const getArea = async () => {
    axios
      .get("http://localhost:3001/items")
      .then((response) => {
        console.log(response.data);
        setItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const filtrarMenu = (menusTotal) => {
    var menuPadre = menusTotal.filter((p) => p.parentMenuId == null);
    setMenusPadres(menuPadre);
  };

  const openModal = (op, id_menu) => {
    setOperation(op);
    setDatos("");
    if (op === 1) {
      setTitle("Registrar Menú");
    } else if (op === 2) {
      setTitle("Editar Menú");
      setId(id_menu);
    }
  };

  const handleInput = (event) => {
    if (event.target.name == "iconMenu") {
      setDatos({ ...datos, [event.target.name]: event.target.files[0] });
    } else {
      setDatos({ ...datos, [event.target.name]: event.target.value });
    }
  };

  const validar = () => {
    var idmenu;
    var metodo;
    const formData = new FormData();
    for (const key in datos) {
      if (datos[key] != null) {
        formData.append(key, datos[key]);
      }
    }
    if (operation === 1) {
      metodo = "POST";
      enviarSolicitud(metodo, formData, 0);
    } else {
      idmenu = id_menu;
      metodo = "PUT";
      enviarSolicitud(metodo, formData, id_menu);
    }
  };

  const enviarSolicitud = async (metodo, parametros, id_menu) => {
    var token64 = localStorage.getItem("token");
    for (let i = 0; i < import.meta.env.VITE_B64_NUMTIMES; i++) {
      token64 = atob(token64);
    }
    if (id_menu == 0) {
      await axios({
        method: metodo,
        url: MENUPOST_URL,
        data: parametros,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token64}`,
        },
      })
        .then(function (respuesta) {
          console.log("url", MENUPOST_URL);
          document.getElementById("btnCerrar").click();
          getMenus();
          getArea();
        })
        .catch(function (error) {
          console.log("error de consumo de api:", error);
        });
    } else {
      await axios({
        method: metodo,
        url: MENUPUT_URL + id_menu,
        data: parametros,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token64}`,
        },
      })
        .then(function (respuesta) {
          console.log("url", MENUPUT_URL);
          document.getElementById("btnCerrar").click();
          getMenus();
          getArea();
        })
        .catch(function (error) {
          console.log("error de consumo de api:", error);
        });
    }
  };
  const changevalue = (valor) => {
    if (valor == true) {
      document.getElementById("padreSelect").style.display = "block";
    } else {
      document.getElementById("padreSelect").style.display = "none";
      setDatos((prevState) => ({ ...prevState, parentMenuId: null }));
    }
  };

  const deleteMenu = (id_menu, name) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      title: "¿Seguro de eliminar el producto " + name + " ?",
      icon: "question",
      text: "No se podrá dar marcha atrás",
      showCancelButton: true,
      confirmButtonText: "Si, eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        console.log(id_menu);
        var token64 = localStorage.getItem("token");
        for (let i = 0; i < import.meta.env.VITE_B64_NUMTIMES; i++) {
          token64 = atob(token64);
        }
        await axios.delete(MENUDELETE_URL + id_menu, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token64}`,
          },
        });
        document.getElementById("btnCerrar").click();
        getMenus();
      } else {
        show_alerta("El item NO fue eliminado", "info");
      }
    });
  };

  return datarol === "Admin" ? (
    <>
      <div className="p-5">
        <div className="contain justify-content-between align-items-center">
          <h1 className="h1title">Menús</h1>
          <div className="scontain">
            <input className="searchbar" type="search" placeholder="Buscar" />
            <button className="sbutton btn-danger btn-sm">
              <AiOutlineSearch size={25} />
            </button>
          </div>
          <button
            className="pbutton btn btn-danger btn-lg rounded-4"
            onClick={() => openModal(1)}
            data-bs-toggle="modal"
            data-bs-target="#modalItems"
          >
            <AiOutlinePlusCircle size={40} />
          </button>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container-fluid d-flex justify-content-center">
          <div className="col-12 col-lg-8 offset-0 offset-lg-12">
            <div className="table-responsive-lg">
              <table className="table-secondary rounded-4">
                <thead>
                  <tr className="Ttr">
                    <th className="text-center">#</th>
                    <th className="text-center">Nombre</th>
                    <th className="text-center">Área</th>
                    <th className="text-center">Pertenece</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody className="Ttb">
                  {menus.map((menu, i) => (
                    <tr key={menu.id_menu}>
                      <td className="text-center">{i + 1}</td>
                      <td className="text-center">{menu.name}</td>
                      <td className="text-center">{menu.areaSection}</td>
                      <td className="text-center">{menu.parentMenuId}</td>
                      <td className="text-center">
                        <button
                          onClick={() => openModal(2, menu.id_menu, menu.name)}
                          className="btn btn-warning"
                          data-bs-toggle="modal"
                          data-bs-target="#modalItems"
                        >
                          <i className="bi bi-pencil-square"></i>
                        </button>
                        &nbsp;
                        <button
                          onClick={() => deleteMenu(menu.id_menu, menu.name)}
                          className="btn btn-danger"
                        >
                          <i className="bi bi-trash"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div id="modalItems" className="modal fade" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header"></div>
            <div className="modal-body">
              {/* <form onSubmit={validar}> */}
              <div className="container">
                <h6>Seleccione el tipo de Menú:</h6>

                <div className="form-check form-switch">
                  <input
                    type="radio"
                    className="btn-check"
                    onClick={() => changevalue(false)}
                    name="options-base"
                    id="option5"
                    autoComplete="off"
                  />
                  <label className="btn" htmlFor="option5">
                    Padre
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    onClick={() => changevalue(true)}
                    name="options-base"
                    id="option6"
                    autoComplete="off"
                  />
                  <label className="btn" htmlFor="option6">
                    Hijo
                  </label>

                  {/* <input
                                                type="checkbox"
                                                id="flexSwitchCheckChecked"
                                                className="form-check-input mb-2"
                                                onClick={() => handleToggle()}
                                                
                                            />
                                            <label id="Disp" className="form-check-label" htmlFor="flexSwitchCheckchecked" >{estado}</label> */}
                </div>

                {/* Menús Padres*/}
                <div id="padreSelect" style={{ display: "none" }}>
                  <div className="input-group mb-3">
                    <span className="input-group-text">
                      <i className="fa-solid fa-gift"></i>
                    </span>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      placeholder="Área"
                      onChange={handleInput}
                      name="parentMenuId"
                      id="parentMenuId"
                    >
                      <option defaultValue>-- Seleccionar Padre --</option>
                      {menusPadres.map((menuPadre) => (
                        <option
                          key={menuPadre.id_menu}
                          value={menuPadre.id_menu}
                        >
                          {menuPadre.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    {/* name del Menú */}
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa-solid fa-gift"></i>
                      </span>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={menus.name}
                        className="form-control"
                        placeholder="Nombre"
                        onChange={handleInput}
                      ></input>
                    </div>
                    {/* areaSection del Menú */}
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa-solid fa-gift"></i>
                      </span>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        placeholder="Área"
                        onChange={handleInput}
                        name="areaSection"
                        id="areaSection"
                      >
                        <option defaultValue>-- Seleccionar Área --</option>
                        {items.map((item) => (
                          <option key={item.id} value={item.nombre}>
                            {item.nombre}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* iconMenu del Menú */}
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa-solid fa-comment"></i>
                      </span>
                      <input
                        type="file"
                        id="iconMenu"
                        name="iconMenu"
                        className="form-control"
                        placeholder="Icono"
                        onChange={handleInput}
                      ></input>
                    </div>
                    {/* isProcess del Menú */}
                    <div className="row">
                      <h6>Está en proceso?</h6>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          value={true}
                          type="radio"
                          name="isProcess"
                          id="isProcess"
                          onChange={handleInput}
                        />
                        <label className="form-check-label" htmlFor="isProcess">
                          En Proceso
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          value={false}
                          type="radio"
                          name="isProcess"
                          id="isProcess"
                          onChange={handleInput}
                        />
                        <label className="form-check-label" htmlFor="isProcess">
                          No esta en proceso
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    {/* actionName del Menú */}
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa-solid fa-comment"></i>
                      </span>
                      <input
                        type="text"
                        id="actionName"
                        name="actionName"
                        className="form-control"
                        placeholder="Acción"
                        onChange={handleInput}
                      ></input>
                    </div>
                    {/* controllerName del Menú */}
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa-solid fa-comment"></i>
                      </span>
                      <input
                        name="controllerName"
                        type="text"
                        id="controllerName"
                        className="form-control"
                        placeholder="Controlador"
                        onChange={handleInput}
                      ></input>
                    </div>
                    {/* orderMenu del Menú */}
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa-solid fa-comment"></i>
                      </span>
                      <input
                        type="number"
                        min="1"
                        name="orderMenu"
                        id="orderMenu"
                        className="form-control"
                        placeholder="Orden del Menú"
                        onChange={handleInput}
                      ></input>
                    </div>
                    <div className="input-group mb-3">
                      <span className="input-group-text">
                        <i className="fa-solid fa-comment"></i>
                      </span>
                      <input
                        type="text"
                        min="1"
                        name="titleMenu"
                        id="titleMenu"
                        className="form-control"
                        placeholder="Titulo de Menú"
                        onChange={handleInput}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <input type="hidden" id="id"></input>
              <div className="d-grid col-6 mx-auto">
                <button onClick={validar} className="btn btn-success">
                  <i className="fa-solid fa-floppy-disk"></i> Guardar
                </button>
              </div>
              <div className="modal-footer">
                <button
                  id="btnCerrar"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cerrar
                </button>
              </div>
              {/* </form> */}
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <Unauthorized></Unauthorized>
  );
}
