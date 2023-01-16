import React from 'react'
import "./cartProduct.css"
const CartProduct = (props) => {
  return (
    <div className='cartProduct-container'>
        <img src={props.productImage} alt = {props.title}/>
        <label>{props.title}</label> 
        <label>{props.quantity}</label> 
        <label>{props.price}</label>
    </div>
  )
}

export default CartProduct