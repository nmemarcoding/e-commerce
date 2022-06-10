import React from 'react'
import "./ItemCard.css"
import { useStateValue } from '../../StateProvider'


export default function ItemCard({items}) {
    const [{basket},dispatch] = useStateValue();
    
    const addToBasket = ()=>{
        

        // if(sessionStorage.getItem("basket")){
        //     const baskets = JSON.parse(sessionStorage.getItem("basket"))
        //     baskets.push(items);
        //     window.sessionStorage.setItem("basket", JSON.stringify(baskets));

        // }else{
        //     window.sessionStorage.setItem("basket", JSON.stringify([items]));
        // }
        dispatch({
            type : "ADD_TO_BASKET",
            item:{
                name : items.name,
                photos: items.photos,
                price: items.price,
                type: items.type,
                _id:items._id,
                description:items.description
            }
        })
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
                <button className="addtocard"  onClick={addToBasket}>ADD TO CARD</button>
            </div>
            
        
        </div>
        
    )
}
