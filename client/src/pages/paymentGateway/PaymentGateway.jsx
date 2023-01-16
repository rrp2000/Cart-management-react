import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./paymentGateway.css"

const PaymentGateway = () => {

    let navigate = useNavigate()

    let [otp, setOtp] = useState("")

    function handleChange(e){
        let {value} = e.target
        setOtp(value)
    }

    function payment(){
        let localOtp = localStorage.getItem("otp")
        if(otp===localOtp){
            alert("Payment Successful.... Comaback again!")
            localStorage.removeItem("otp")
            navigate("/products")
        }else{
            alert("Please Enter the correct OTP!!!")
        }
    }
  return (
    <div className='paymentGateway-container'>
        <div className='paymentGateway-form'>
        <h2>Last step to get your product</h2>
            <input onChange={handleChange} name="otp" value={otp} placeholder="Enter your OTP" />
            <button onClick={payment}>Proceed to pay</button>
        </div>
    </div>
  )
}

export default PaymentGateway