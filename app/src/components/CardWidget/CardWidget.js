import React from 'react'
import LogoB from '../../images/kisspng-online-shopping-shopping-cart-logo-icon-shopping-cart-smiley-face-micro-logo-5a81414313e8e5.0378479615184202910816.png'
import { Link } from 'react-router-dom'

const CardWidget = () => {
  return (
    <div>
      <Link to='/CardWidget'>
      <img
        width="50" 
        className='LogoCarrito'
        src={LogoB} 
        alt='Carrito Logo'/>
      </Link>
    </div>
  )
}

export default CardWidget