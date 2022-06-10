import React from 'react'
import { useStateValue } from '../../StateProvider';

export default function BasketItemCard({items}) {
    // const removeFromBasket = ()=>{
        
    //     if(sessionStorage.getItem("basket")){
    //         var arr = JSON.parse(sessionStorage.getItem("basket"))
    //         const indexOfObject = arr.findIndex(object => {
    //         return object._id === items._id;
    //             });
    //         arr.splice(indexOfObject, 1);
    //         window.sessionStorage.setItem("basket", JSON.stringify(arr));
            
    //         if(arr.length === 0){
    //             window.sessionStorage.removeItem("basket");
    //         }
    //         window.location.reload();
    //     }
    // }
    const [{basket},dispatch] = useStateValue();

    const removeFromBasket =()=>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            _id: items._id
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
                <button className="addtocard"  onClick={removeFromBasket}>REMOVE FROM CARD</button>
            </div>
            
        
        </div>
        
    )
}
