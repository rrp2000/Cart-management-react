import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import "./productDescription.css"

const ProductDescription = () => {
    const productId = useParams().productId

    let [product, setProduct] = useState({})
    
    useEffect(() => {
        axios.get(`/products/${productId}`)
        .then(res => {
            setProduct(res.data.data)
        })
        .catch(err => {
            alert(err.response.data.message)
            Navigate("/products")
        })
    }, [productId])

    function addToCart(e){
        axios.post(`/users/${localStorage.getItem("userId")}/cart`,{
            productId
        },{headers:{"Authorization": `Bearer ${localStorage.getItem("token")}` }})
        .then(res=>{
            alert("product added successfully. You can check the cart.")
        })
        .catch(err=>{
            console.log(err)
        })
    }

  return (
    <div className='product-container'>
        <div className='product-details'>
            <div className = "product-image">
                <img src = {product.productImage} alt = {product.name} />
            </div>
            <div className = "product-info">
                <label><h2>{product.title}</h2></label>
                <label>Description - {product.description}</label>
                <label>Style  - {product.style}</label>
                <label>Price - <span>{product.currencyFormat}</span>{product.price}</label>
                <label>AvailableSizes - {product.availableSizes}</label>
            </div>
            <button onClick ={addToCart}>Add To Cart</button>
            
        </div>
    </div>
  )
}

export default ProductDescription