import React, { useEffect, useState } from 'react'
import axios from 'axios'

import "./product.css"
import { useNavigate } from 'react-router-dom'
import ProductCard from '../../components/productCard/ProductCard'
const Products = () => {

  const navigate = useNavigate()

  let [products, setProducts] = useState([])


  useEffect(()=>{
    axios.get("/products")
    .then(res => {
      setProducts(res.data.data)
    })
    .catch(err => console.log(err))
    axios.get(`/user/${localStorage.getItem("userId")}/profile`,{headers:{"Authorization": `Bearer ${localStorage.getItem("token")}` }})
        .then(res => {
            localStorage.setItem("loggedInUser",JSON.stringify(res.data.data))
        }).catch(err => {
        console.log(err)
        })
  }, [])

  return (

    <div className='product-container'>
        {products.map(product=><ProductCard key={product._id} title={product.title}  price = {product.price} currencyFormat = {product.currencyFormat}/>)}

        <button className='product-button' onClick={() => navigate("/createProduct")}>Add product</button>
        
    </div>
  )
}

export default Products