import React, { useState, useEffect } from 'react'
import Presentacional from './Presentacional'
import { getProductos } from '../utils'
import PresentacionalDetalle from './PresentacionalDetalle'


function Container({ categoria, detalleId }) {

  //Estados
  const [productos, setProductos] = useState([])

  //Efectos
  useEffect(() => {
    const resultado = getProductos(categoria, detalleId)
    resultado.then(productos => {
      setProductos(productos)
    })
  }, [categoria, detalleId])

  //Vista
  if (categoria) {
    return (
      <Presentacional productos={productos} />
    )
  } else {
    return (
      <PresentacionalDetalle producto={productos} />
    )
  }
}

export default Container 