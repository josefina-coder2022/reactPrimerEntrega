import React from 'react';
import Logo from '../../imagenes/logo-ecommerce.jpg'
import CartWidget from './CartWidget';
import {Link, NavLink, useNavigate} from "react-router-dom"

function Navbar() {
  return (
    <div className="contenedor-nav">
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse p-4" id="navbar-toggler">
            <a className="navbar-brand p-5" href="#">
              <img src={Logo} />
            </a>
            <ul className="navbar-nav d-flex justify-content-center align-items-center">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home/all">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/womenClothing/women">Mujer</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to="/menClothing/men">Hombre</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-disabled="true" to="/jewelery/jewelery">Accesorios</Link>
              </li>
            </ul>

            <form className="d-flex p-4" role="search">
              <input className="form-control me-2" type="search" placeholder="" aria-label="Search"/>
              <button className="btn btn-outline-primary" type="submit">Buscar</button>
            </form>

            <CartWidget />

          </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar