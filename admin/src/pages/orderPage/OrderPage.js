import React, { useState, useEffect } from 'react';
import Orders from '../../components/orders/Orders'
import "./OrderPage.css"
import Axios from '../../hooks/axios.js'

export default function OrderPage() {
    const [orderData,setOrderData] = useState([]);
    useEffect(() => {
        Axios.get("order")
        .then((res) =>{
            setOrderData(res.data)
            console.log(orderData)
    
           
        } ).catch((e)=>{
            console.log(e.message);
        })
      },[]);
    return (
        <div className="orderPage">
            <div className="order__container">
                
                {orderData && orderData.map((data,index)=>(
                    <div key = {index}>
                        <Orders order ={data}/>
                    </div>
                    
                ))}
                
            </div>
        </div>
    )
}
