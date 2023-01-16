import axios from 'axios'
import React from 'react'
import "./cartProduct.css"
const CartProduct = (props) => {
    function removeItem(e){
        axios.put(`/users/${localStorage.getItem("userId")}/cart`,{
            productId:props.id,
            removeProduct:1
        },{headers:{"Authorization":"Bearer "+localStorage.getItem("token")}})
        .then(res=>window.location.reload())
        .catch(err=>console.log(err))
    }
  return (
    <div className='cartProduct-container'>
        <img src={props.productImage} alt = {props.title}/>
        <label>{props.title}</label> 
        <label><span>Quantity: </span>{props.quantity}</label> 
        <label><span>Price: </span>{props.price}</label>
        <button onClick={removeItem}>Remove Item</button>
    </div>
  )
}

export default CartProduct