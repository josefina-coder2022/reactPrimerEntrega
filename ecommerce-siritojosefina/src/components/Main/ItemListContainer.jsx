import React from 'react'

function ItemListContainer({greeting, nombre, beneficios}) {
  return (
    <section className='conteinerItemList'>
      <h1>{greeting} {nombre}</h1>
      <div>
        <p>
          {beneficios}
        </p>
      </div>

      <h2>Algunos de los beneficios de usar {nombre}</h2>
      <ul>
        <li>Ayuda a reducir las calorías que consumis</li>
        <li>Ayuda a bajar tus contenidos de azúcar para que tu alimetación sea más saludable</li>
        <li>Aporta todos los beneficios de la stevia a tus alimetos</li>
        <li>Mejora tu salud</li>
      </ul>
    </section>
    
  )
}

export default ItemListContainer