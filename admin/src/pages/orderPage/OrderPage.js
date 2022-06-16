import React, { useState, useEffect } from 'react';
import Orders from '../../components/orders/Orders'
import "./OrderPage.css"
import Axios from '../../hooks/axios.js'

export default function OrderPage() {
    const [orderData,setOrderData] = useState([]);
    useEffect(() => {
        Axios.get("order")
        .then((res) =>{
            setOrderData(res.data.sort((a,b)=>{const bandA = a.Status.toUpperCase();
                const bandB = b.Status.toUpperCase();
              
                let comparison = 0;
                if (bandA > bandB) {
                  comparison = 1;
                } else if (bandA < bandB) {
                  comparison = -1;
                }
                return comparison;}))
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
                        
                        {data.Status === "processing" ? <Orders order ={data}/> : <div className="shipped">
                            <div>{data._id}</div>
                            <div>SHIPPED</div>

                            </div>}
                    </div>
                    
                ))}
                
            </div>
        </div>
    )
}

