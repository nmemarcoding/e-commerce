import React from 'react'
import "./ItemCard.css"
import { useStateValue } from '../../StateProvider'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


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
            <Card style={{ width: '18rem' }}>
                <Card.Img className="itemCard__image"variant="top" src={items.photos[0]} />
                <Card.Body>
                    <Card.Title>{items.name}</Card.Title>
                    <Card.Text>
                        <p><b>{items.price} $</b></p>
                        <p className="itemCard__description">{items.description}</p>
                    </Card.Text>
                    <Button variant="primary" onClick={addToBasket} >ADD TO CARD</Button>
                </Card.Body>
            </Card>
        
        </div>
        
    )
}
