import React from 'react'
import { useStateValue } from '../../StateProvider';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
            <Card style={{ width: '18rem' }}>
                <Card.Img className="itemCard__image"variant="top" src={items.photos[0]} />
                <Card.Body>
                    <Card.Title>{items.name}</Card.Title>
                    <Card.Text>
                        <p><b>{items.price} $</b></p>
                        <p className="itemCard__description">{items.description}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={removeFromBasket} >REMOVE FROM CARD</Button>
                </Card.Body>
            </Card>
        
        </div>
        
    )
}
