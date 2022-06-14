import React, { useState } from 'react'
import "./PaymentPage.css"
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import Axios from '../../hook/axios';


export default function PaymentPage() {
    const [{basket},dispatch] = useStateValue();
    const [credentials,setCredentials] = useState({
        Costomer_id: localStorage.getItem("userId"),
        Items: basket,
        Total: getBasketTotal(basket),
        Status: "prosseing",
        Address: undefined

    })
    const handleChange = (e)=>{
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        console.log(credentials)
    }
    
    const handleClick  = (e)=>{
        e.preventDefault();
       

            Axios.post("order", credentials)
            .then((res) =>{
                console.log(res)
            } ).catch((e)=>{
                
                console.log(e.message);
            })  
    }
    return (
        <div className="PaymentPage">
            
            <div className="paymnet__container">
                <strong> TOTAL : {getBasketTotal(basket)} $</strong>
                <label>Address</label>
                <input
                    type="Address"
                    className="form-control"
                    placeholder="Enter Your Address"
                    id="Address"
                    onChange={handleChange}
                />
                <div className="placeOrderBtn__container">
                    <button className="placeOrderBtn" onClick={handleClick}>Place Order</button>
                </div>
            </div>
        </div>
    )
}
