import React from 'react'
import Axios from '../../hooks/axios'
import './Item.css'
export default function Item({item}) {
    const hadleDelete = ()=>{
        Axios.delete(`/item/${item._id}`).then((res)=>{
            console.log(res.data)
        })

    }
    return (
        <div className="item">
            <div className="item__container">
                <div>{item.name}</div>
                <img className="item__image" src={item.photo}></img>
                <div>{item.price} $</div>
                <div>{item.description}</div>
                <button onClick={hadleDelete}>Delete</button>

            </div>
        </div>
    )
}
