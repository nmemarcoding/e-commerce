import React, { useState, useEffect } from 'react';
import Item from '../../components/item/Item'
import Axios from '../../hooks/axios.js'
import './ItemPage.css'


export default function ItemPage() {
    const [items,setItems] = useState([]);
    useEffect(() => {
        Axios.get('/item').then((res)=>{
        
            setItems(res.data)
            console.log(items)
            })
    },[])
    
    return (
        <div className="itemPage">
            {items && items.map((data,index)=>(
                <div key = {index} className="item__containers">
                    <Item item = {data}/>
                </div>
                
            ))}
        </div>
    )
}
