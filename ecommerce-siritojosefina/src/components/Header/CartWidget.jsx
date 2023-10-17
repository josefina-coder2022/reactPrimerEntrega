import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function CartWidget() {

  //Estados
  const [contador, setContador] = useState(1)

  //Métodos
  const handleSumar = () => {
    setContador (contador + 1)
  }

  //Vista
  return (
    <Link to="/cart" className="iconNavBar">
      1 <i className="bi bi-cart4"></i>
    </Link>
  )
}

export default CartWidget