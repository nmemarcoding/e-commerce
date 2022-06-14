import React, { useState, useEffect } from 'react';
import './Orders.css'
export default function Orders({order}) {
    const[start,setStart]= useState(false);
    const [Items,setItems]=useState([]);
    const startf = ()=>{
        setItems(order.Items)
        setStart(true)
        
    }
    const close = ()=>{
        setStart(false)
    }
   
    
   
  return (
    <div className="orders">
        <div className="order__container">
            <div className="customer__detail__container" >
                <div>{order._id}</div>
                <dive>{order.Address}</dive>
                <button onClick={startf}>Start</button>
                
            </div>
        </div>
        {start === true ? <div>{Items.map((item) => (<div className="customer__detail__container" onClick={close}>
            <div>{item.name}</div>
        </div>))}</div> : <div></div>}

    </div>
  )
}
