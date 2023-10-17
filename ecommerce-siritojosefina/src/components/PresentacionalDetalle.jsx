import React, { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function PresentacionalDetalle(props) {

  return (

    <section className="card-container">

      <div className="card mb-3">
        <img src={props.producto.image} style={{ width: '50%' , marginLeft:'auto', marginRight:'auto'}} />
        <div className="card-body">
          <h1><b>{props.producto.title}</b></h1>
          <h2>${props.producto.price}</h2>
          <h4>Categoria: <b>{props.producto.category}</b></h4>
          <p className="card-text">{props.producto.description}</p>
          
        </div>
      </div>

    </section>
  )
}

export default PresentacionalDetalle