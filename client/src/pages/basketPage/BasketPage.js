import React, { useState, useEffect } from 'react';
import "./BasketPage.css"
import Axios from '../../hook/axios.js'
import ItemCard from '../../components/itemCard/ItemCard.js'
import BasketItemCard from '../../components/basketItemCard/BasketItemCard';

export default function BasketPage() {
    const [items,setItems] = useState();
    useEffect(() => {
        if(sessionStorage.getItem("basket")){
            setItems(JSON.parse(sessionStorage.getItem("basket")))
        }
    },[])
    return (
        <div className="basketPage">
            {items ? <div className="basketPage__item__container">
                {items && items.map((data,index)=>(
                    <div key = {index} className="item__containers">
                        < BasketItemCard items = {data}/>
                    </div>
                    
                ))}
            </div>: <h1 className="empty">BASKET IS EMPTY</h1>}
            
        </div>
    )
}
