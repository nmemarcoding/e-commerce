import React from 'react'
import "./ItemCard.css"

export default function ItemCard() {
    return (
        <div className="itemCard">
            <div className="card">
                <img src="https://www.w3schools.com/howto/img_avatar.png"></img>
                <div className="container">
                    <h4><b>Item Name</b></h4>
                    <p><b>22$</b></p>
                    <p>This is one of the best item in the world</p>
                </div>
                <button className="addtocard">ADD TO CARD</button>
            </div>
            
        
        </div>
        
    )
}
