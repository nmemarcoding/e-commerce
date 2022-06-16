import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from '../../hooks/axios.js'
import './Orders.css'
export default function Orders({order}) {
    const[start,setStart]= useState(false);
    const [Items,setItems]=useState(order.Items);
    const startf = ()=>{
        
        setStart(true)
        
    }
    const close = ()=>{
        setStart(false)
    }

   
    const picked = (e)=>{
      
        setItems(Items.filter(data=>data._id != JSON.parse(e.target.id)._id))
        console.log(Items)
    }
    const deliverd = ()=>{
        Axios.put(`order/${order._id}`,{Status : "shipped"})
        .then((res) =>{
            console.log(res);
        } ).catch((e)=>{
           
            console.log(e.message);
        })
    }
   
  return (
    <div className="orders">
        
        <div className="order__container">
            <div className="customer__detail__container" >
                <div>{order._id}</div>
                <dive>{order.Address}</dive>
                <button onClick={startf}>Start</button>
                <button onClick={close}>EXITE</button>
                {Items.length === 0 ? <button onClick={deliverd}>DONE</button>:<div></div>}
            </div>
        </div>
        {start === true ? <div>{Items.map((item) => (<div className="customer__detail__container" >
            <div>{item.name}</div>
            <button   onClick={picked} id = {JSON.stringify(item)}>PICKED</button>
        </div>))}</div> : <div></div>}

    </div>
  )
}
