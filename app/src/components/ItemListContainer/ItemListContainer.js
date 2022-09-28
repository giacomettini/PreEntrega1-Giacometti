import React from 'react'
import '../../styles/ItemListContainer.css'

const ItemListContainer = ( {mensaje} ) => {
  return (
    <div className='ItemListContainer'>
        {mensaje}
    </div>
  )
}

export default ItemListContainer