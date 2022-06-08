import React from 'react'
import "./ItemCard.css"

export default function ItemCard({items}) {
    const basket = ()=>{
        

        if(localStorage.getItem("basket")){
            const baskets = JSON.parse(localStorage.getItem("basket"))
            baskets.push(items);
            window.localStorage.setItem("basket", JSON.stringify(baskets));

        }else{
            window.localStorage.setItem("basket", JSON.stringify([items]));
        }
    }
    return (
        <div className="itemCard">
            <div className="card">
                <img className="itemCard__image"src={items.photos[0]}></img>
                <div className="container">
                    <h4><b>{items.name}</b></h4>
                    <p><b>{items.price} $</b></p>
                    <p className="itemCard__description">{items.description}</p>
                </div>
                <button className="addtocard"  onClick={basket}>ADD TO CARD</button>
            </div>
            
        
        </div>
        
    )
}
