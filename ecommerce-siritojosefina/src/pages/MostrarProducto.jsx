import React from 'react'
import ItemListContainer from '../components/Main/ItemListContainer'
import { useParams } from 'react-router-dom'

function MostrarProducto() {

    const params = useParams()
    if (!params.categoria) { 
        params.categoria = "all"
    }

  return (
      <div> 
          <ItemListContainer
              greeting="Bienvenidos a..."
              nombre="Clotheshop"
              categoria={params.categoria}
          />
       </div>
  )
}

export default MostrarProducto