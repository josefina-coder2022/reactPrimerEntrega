import React from 'react';
import Logo from '../../imagenes/logoNutevia.jpg'
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <div class="contenedor-nav">
      <nav class="navbar navbar-expand-md navbar-light">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler" aria-controls="navbarTogglerDemo01" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse p-4" id="navbar-toggler">
            <a class="navbar-brand p-5" href="#">
              <img src={Logo} />
            </a>
            <ul class="navbar-nav d-flex justify-content-center align-items-center">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Nosotros</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true">Stevia</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-disabled="true">Contacto</a>
              </li>
            </ul>

            <form class="d-flex p-4" role="search">
              <input class="form-control me-2" type="search" placeholder="" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Buscar</button>
            </form>

            <CartWidget />

          </div>
        </div>

      </nav>
    </div>
  )
}

export default Navbar