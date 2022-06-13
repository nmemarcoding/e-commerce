import React, { useState, useEffect } from 'react';
import "./BasketPage.css"
import Axios from '../../hook/axios.js'
import ItemCard from '../../components/itemCard/ItemCard.js'
import BasketItemCard from '../../components/basketItemCard/BasketItemCard';
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import Subtotal from '../../components/subtotal/Subtotal';
export default function BasketPage() {
    const [{basket},dispatch] = useStateValue();
    console.log(basket);
    
    return (
        <div className="basketPage">
            {JSON.stringify(basket)}
            {basket ? <div className="basketPage__item__container">
                {basket && basket.map((data,index)=>(
                    <div key = {index} className="item__containers">
                        < BasketItemCard items ={data}/>
                    </div>
                    
                ))}
            </div>: <h1 className="empty">BASKET IS EMPTY</h1>}
            <div className="subtotal__conatiner">
                
                <Subtotal/>
            </div>
        </div>
    )
}
