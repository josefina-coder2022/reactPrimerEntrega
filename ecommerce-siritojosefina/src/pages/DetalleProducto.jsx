import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailContainer from '../components/Main/ItemDetailContainer'

function DetalleProducto() {

  const params = useParams()

  return (
    <>
      <ItemDetailContainer
        detalleId={params.id}
      />
      
    </>
   
  )
}

export default DetalleProducto