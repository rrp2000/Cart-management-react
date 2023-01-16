import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import CartProduct from '../../components/cartProduct/CartProduct'
import "./cart.css"

const Cart = () => {
    let navigate = useNavigate()
    let [cart, setCart] = useState([])
    let [totalPrice, setTotalPrice] = useState(0)

    useEffect(()=>{
        axios.get(`/users/${localStorage.getItem("userId")}/cart`,{headers:{"Authorization":"Bearer "+localStorage.getItem("token")}})
        .then(res=>{
            setCart(res.data.data.items)
            setTotalPrice(res.data.data.totalPrice)
        }).catch(err =>{
            console.log(err)
        })
    },[])

    console.log(cart)
  return (
    <div className='cart-container'>
        <div className='cart-products'>
            {cart.map(product=>{
                return <CartProduct key = {product.productId._id} id = {product.productId._id} title = {product.productId.title} price = {product.productId.price} quantity = {product.quantity} productImage = {product.productId.productImage} />
            })}
            <div className='cart-details'>
                <label><span>Total Price: </span>{totalPrice}</label>
                <button onClick={()=>{
                    localStorage.setItem("totalPrice",totalPrice)
                    navigate("/payment")
                    }}>Proceed To Payment</button>
            </div>
        </div>
    </div>
  )
}

export default Cart