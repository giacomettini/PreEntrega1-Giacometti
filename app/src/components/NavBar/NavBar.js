import React from 'react'
import CardWidget from '../CardWidget/CardWidget'
import LogoA from '../images/doula_amatista_Logo_biar0y.png'
import '../../styles/NavBar.css'

const NavBar = () => {
  return (
<header>
        <nav class="container-wid navbar">
            <picture class="logo">
                <img 
                className='logo__img'
                src={LogoA} 
                Alt='Logo DoulaMatista'/>
                </picture>
            <ul class="menu">
            <li class="menu__item">
                    <a href="/#">Servicios</a>
                </li>
                <li class="menu__item">
                    <a href="/#">Productos</a>
                </li>
                <li class="menu__item">
                    <a href="/#">Sobre Mi</a>
                </li>
                <li class="menu__item">
                    <a href="/#">Contacto</a>
                </li>
                <li>
                    <a href="/#">
                        <CardWidget/> 
                    </a>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar