import React from 'react'
import "./productCard.css"
const productCard = (props) => {
  return (
    <div className='productCard-container'>
        <h3>{props.title}</h3>
        <label><span>{props.currencyFormat}</span>{props.price}</label>
    </div>
  )
}

export default productCard