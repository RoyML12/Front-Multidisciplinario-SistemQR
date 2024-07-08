import React from "react";
import "./dropdownmenu.css";
import { useState, useEffect } from "react";
import axios from "../../../api/axios";
import { FaLock, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import {
  FaHome,
  FaPencilAlt,
  FaPeopleArrows,
  FaPeopleCarry,
  FaRegListAlt,
  FaSellcast,
  FaStore,
  FaStoreAlt,
  FaUserAlt,
} from "react-icons/fa";

const MENUGET_URL = "/menu/obtener";

const MenuDesplegable = () => {
  const [pmenu, setPmenu] = useState([]);
  const [cmenu, setCmenu] = useState([]);

  useEffect(() => {
    // fetchdata(){
    //     llenarPrueba();
    // }

    getMenus();
  }, []);

  async function getMenus() {
    console.log("holasadas");
    var token64 = localStorage.getItem("token");

    for (let i = 0; i < import.meta.env.VITE_B64_NUMTIMES; i++) {
      token64 = atob(token64);
    }
    const respuesta = await axios.get(MENUGET_URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token64}`,
      },
    });
    console.log("datosss", respuesta.data.menus);
    filter2(respuesta.data.menus);

    // .then(async data => {
    // filter();
    // console.log('Datos:', data.data.menusTotal)
    // console.log('Datos2:', data.data)
    // console.log('Datos3:', data)

    // })
  }
  const filter2 = (menusTotal) => {
    if (menusTotal != null && menusTotal.length > 0) {
      var menuPadre = menusTotal.filter((p) => p.parentMenuId == null);
      var menuHijo = menusTotal.filter((p) => p.parentMenuId != null);
      setCmenu(menuHijo);
      setPmenu(menuPadre);
      console.log("datos padres", menuPadre);
      console.log("datos hijos", menuHijo);
    }
    // setIcons(iconsM);
  };
  const clickS = () => {
    toggle ? setToggle(false) : setToggle(true);
    console.log(toggle);
    showContent(toggle);
  };

  const showContent = (valor) => {
    if (valor == true) {
      document.getElementById("childoption").style.display = "none";
    }
    if (valor == false) {
      document.getElementById("childoption").style.display = "block";
    }
  };

  return (
    <>
      {/* Menu desplegable */}
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark p-2">
        <div className="navbar-collapse container-fluid">
          <div className="navbar-nav" id="navbarSupportedContent">
            <div className="navbar-collapse" id="navbarNav">
              {pmenu.map((parentMenu, key) => {
                let html = "";
                var father = (
                  <div key={parentMenu.id_menu}>
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                        <a
                          className="nav-link dropdown-toggle"
                          data-bs-auto-close="outside"
                          href="/home"
                          id="navbarDropdown"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <span className="spanBar">
                            <FaStoreAlt></FaStoreAlt>
                          </span>
                          {parentMenu.name}
                        </a>

                        {/* {prueba(parentMenu.id_menu)} */}
                        {cmenu.map((hijo) => {
                          if (hijo.parentMenuId == parentMenu.id_menu) {
                            html += ` <li key = ${hijo.id_menu}><a class="dropdown-item" href="#">
                                                                        <span className='spanSubBar'>
                                                                            <FaSellcast></FaSellcast>
                                                                        </span>
                                                                        ${hijo.name}<Tooltip id="adminVentas" place="left" />
                                                                    </a></li>`;
                          }
                        })}
                        {/* {if(html =! ""){
                                                    
                                                }} */}
                        <ul
                          className="dropdown-menu"
                          dangerouslySetInnerHTML={{ __html: html }}
                        ></ul>
                      </li>
                    </ul>
                  </div>
                );
                // <div dangerouslySetInnerHTML = {{__html:html}}><div/>
                {
                  /* prueba(key, html) */
                }
                return father;
              })}
            </div>
            {/* {llenarPrueba()} */}
          </div>
        </div>
      </nav>
      <div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            onClick={() => clickS()}
            id="flexSwitchCheckChecked"
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            Default switch checkbox input
          </label>
        </div>
        <div id="childoption">
          <div className="card card-body">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
          </div>
          <p>Heribeibi</p>
        </div>
      </div>

      {/* <div className='container'>
                {pmenu.map((parentMenu) => {
                    <div key={parentMenu.id_menu}>
                    navindex++
                    return (
                        <div key={parentMenu.id_menu}>
                            <ul className="list-group">
                                <li className="list-group-item">

                                    <div>
                                        <div className="container text-center">
                                            <div className="row">
                                                <div className="col d-flex justify-content-center ">
                                                    <p className="fw-bold m-3 ">{titleP = (parentMenu.iconMenu == null ? "" : parentMenu.titleMenu)}</p>
                                                    <p className="fw-bold m-3">{iconsP = (parentMenu.iconMenu == null ? <FaUser /> : parentMenu.iconMenu)}</p>

                                                </div>

                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <a className="btn btn-primary" data-bs-toggle="collapse" href={"#" + navindex} role="button" aria-expanded="false" aria-controls="collapseExample" ><FaUser />
                                                Menú: {parentMenu.name}
                                            </a>
                                        </div>


                                        <div>
                                            <div className="collapse" id={navindex}>
                                                <div className="card card-body m-2">
                                                <div key={hijo.id_menu}>
                                                            <p className="text-center">{hijo.name}  {titleC = hijo.titleMenu == null ? "" : hijo.titleMenu}  {iconsC = (parentMenu.iconMenu == null ? <FaUser /> : parentMenu.iconMenu)}</p>
                                                        </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>


                            </ul>
                        </div>
                    )
                })}
            </div> */}
    </>
  );
};

export default MenuDesplegable;
