import React from 'react'
import { Link } from 'react-router-dom'
import CardWidget from '../CardWidget/CardWidget'
import LogoA from '../../images/doula_amatista_Logo_biar0y.png'
import '../../styles/NavBar.css'

const NavBar = () => {
  return (
<header>
        <nav class="container-wid navbar">
            <picture class="logo">
                <Link to='/'>
                <img 
                className='logo__img'
                src={LogoA} 
                Alt='Logo DoulaMatista'/>
                </Link>
            </picture>

            <ul class="menu">
            <li class="menu__item">
            <Link to='/categoria/Asesoramiento'>Asesoramiento</Link>
                </li>
                <li class="menu__item">
                    <Link to='/categoria/Acompañamiento'>Acompañamiento</Link>
                </li>
                <li class="menu__item">
                    <a href="/#">Sobre Mi</a>
                </li>
                <li class="menu__item">
                    <a href="/#">Contacto</a>
                </li>
                <li>
                        <CardWidget/> 
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default NavBar