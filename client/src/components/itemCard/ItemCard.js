import React from 'react'
import "./ItemCard.css"

export default function ItemCard({items}) {
    return (
        <div className="itemCard">
            <div className="card">
                <img src={items.photos[0]}></img>
                <div className="container">
                    <h4><b>{items.name}</b></h4>
                    <p><b>{items.price} $</b></p>
                    <p>{items.description}</p>
                </div>
                <button className="addtocard">ADD TO CARD</button>
            </div>
            
        
        </div>
        
    )
}
