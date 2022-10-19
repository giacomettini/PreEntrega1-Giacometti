import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/Item.css'


const Item = ( {id, nombre, imagen, precio} ) => {
  return (
    <Link to={`/Detalle/${id}`}>
        <div className="article">
            <img  src={imagen} alt="" className="article__img"/>

            <div className="article__information">
                <p className="article__name">${nombre}</p>
                <p className="article__price">${precio}</p>
            </div>
        </div> 
    </Link> 
  )
}

export default Item