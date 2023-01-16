import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./payment.css"

const Payment = () => {
    let navigate = useNavigate()
    let token = localStorage.getItem("token")

    function generateOtp(){
        axios.get("/getOtp",{headers:{"Authorization":`Bearer ${token}`}})
        .then(res=>{
            console.log(res.data.otp)
            localStorage.setItem("otp",res.data.otp)
            navigate("/paymentGateway")
        })
        .catch(err=>{
            alert(err.response.data.message)
        })

        // let sms = new SMS("r2rp2000","admin")
        // sms.send('+917978851598', 'Hello!')
        //     .then(body => console.log(body)) // returns { message_id: 'string' }
        //     .catch(err => console.log(err.message))
    }
  return (
    <div className='payment-container'>
        <div className='payment-form'>
            <p>Here you can check the final price</p>
            <h2>${localStorage.getItem("totalPrice")}</h2>
            <button onClick={generateOtp}>Proceed to pay</button>
        </div>
    </div>
  )
}

export default Payment