import React from 'react'
import Logo from '../../imagenes/logoNutevia2.jpg'

function Footer() {
  return (

  <div>
    <section id="contenidoFooter">
      <section className="infoFooter">

        <div className="logoFooter">
            <img src={Logo} />
        </div>

        <div className="parrFooter">
          Bv. Los Alemanes 453 <br />Tel. +543453 445790 <br />nutevia.com.ar
        </div>

      </section>


        <div className="iconFooter">
            <i class="bi bi-facebook" > </i>
            <i class="bi bi-instagram"> </i>
            <i class="bi bi-whatsapp"></i> 
          </div>
    </section>
    
  </div>
    
  )
}


export default Footer