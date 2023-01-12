import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./signup.css"
const Signup = () => {

    let [isClicked, setIsClicked] = useState(false);

    let [signupDetails, setSignupDetails] = useState({
        fname:"",
        lname:"",
        email:"",
        phone:"",
        password:""
    })

    let [shippingDetails, setShippingDetails] = useState({
        street:"",
        city:"",
        pincode:""
    })
    let [billingDetails, setBillingDetails] = useState({
        street:"",
        city:"",
        pincode:""
    })

    const handleChange = (e) => {
        let {name, value} = e.target
        setSignupDetails({...signupDetails, [name]: value})
    }
    const handleShipping = (e) =>{
        let {name, value} = e.target
        setShippingDetails({...signupDetails, [name]: value})
    }
    const handleBilling = (e) =>{
        let {name, value} = e.target
        setBillingDetails({...signupDetails, [name]: value})
    }

    const handleSubmit = (e) => {
        axios.post("/register",{
            fname: signupDetails.fname,
            lname: signupDetails.lname,
            email: signupDetails.email,
            phone: signupDetails.phone,
            password: signupDetails.password,
            address:{
                shipping:{
                    street:shippingDetails.street,
                    city:shippingDetails.city,
                    pincode:shippingDetails.pincode
                },
                billing:{
                    street:billingDetails.street,
                    city:billingDetails.city,
                    pincode:billingDetails.pincode
                }
            }
        }).then(res => {
            console.log(res.data)
        }).catch(error => {
            console.log(error)
        })
    }
  return (
    <div className='signup-container'>
        <div className='signup-form'>
            <h1>Sign Up</h1>
            {!isClicked?<>
            <input onChange={handleChange} type='text' name='fname' placeholder='First Name' value={signupDetails.fName}/>
            <input onChange={handleChange} type='text' name='lname' placeholder='Last Name' value={signupDetails.lName}/>
            <input onChange={handleChange} type='text' name='email' placeholder='Email' value={signupDetails.email}/>
            <input onChange={handleChange} type='text' name='phone' placeholder='Phone' value={signupDetails.phone}/>
            <input onChange={handleChange} type='text' name='password' placeholder='Password' value={signupDetails.password}/>
            </>:<>
            <h5>Shipping</h5>
            <input onChange={handleShipping} type='text' name='street' placeholder='Street' value={shippingDetails.street}/>
            <input onChange={handleShipping} type='text' name='city' placeholder='City' value={shippingDetails.city}/>
            <input onChange={handleShipping} type='text' name='pincode' placeholder='Pincode' value={shippingDetails.pincode}/>
            
            <h5>Billing</h5>
            <input onChange={handleBilling} type='text' name='street' placeholder='Street' value={billingDetails.street}/>
            <input onChange={handleBilling} type='text' name='city' placeholder='City' value={billingDetails.city}/>
            <input onChange={handleBilling} type='text' name='pincode' placeholder='Pincode' value={billingDetails.pincode}/>
            </>}
            
            <Link to="/login">Already Registed?</Link>
            {!isClicked?<button onClick={()=>setIsClicked(!isClicked)} >Next</button>:<button onClick={handleSubmit} >Register</button>}
        </div>
    </div>
  )
}

export default Signup