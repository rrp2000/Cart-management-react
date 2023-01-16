import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CartProduct from '../../components/cartProduct/CartProduct'
import "./cart.css"

const Cart = () => {
    let [cart, setCart] = useState([])

    useEffect(()=>{
        axios.get(`/users/${localStorage.getItem("userId")}/cart`,{headers:{"Authorization":"Bearer "+localStorage.getItem("token")}})
        .then(res=>{
            setCart(res.data.data.items)
        }).catch(err =>{
            console.log(err)
        })
    },[])

    console.log(cart[0])
  return (
    <div className='cart-container'>
        <div className='cart-products'>
            {cart.map(product=>{
                return <CartProduct title = {product.productId.title} price = {product.productId.price} quantity = {product.quantity} productImage = {product.productId.productImage} />
            })}
        </div>
    </div>
  )
}

export default Cart