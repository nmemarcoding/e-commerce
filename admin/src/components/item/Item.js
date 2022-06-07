import React, { useState, useEffect } from 'react';
import Axios from '../../hooks/axios'
import Login from '../login/Login';
import './Item.css'
export default function Item({item}) {
    const [edit,setEdit] = useState(false)
    const [popup,setPopup] = useState(false);
    const [description,setDescription] = useState(false);
    const [credentials,setCredentials] = useState({
        name: undefined,
        price: undefined,
        description: undefined,
    })
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        console.log(credentials)
      };
    const hadleDelete = ()=>{
        const delet = window.confirm("Are you sure you want to delete this item?")
        if (delet){

            Axios.delete(`/item/${item._id}`).then((res)=>{
                console.log(res.data)
                window.location.reload()
            })
        }

    }
    const hadleEdit = ()=>{
        setEdit(true);
    }
    const saveEdit = ()=>{
        Axios.put(`/item/${item._id}`, credentials)
        .then((res) =>{
            console.log(res.data)
            setEdit(false)
            window.location.reload()
        } ).catch((e)=>{
            console.log(e.message);
        })
        
    }
    
    return (
        <div className="item">
            <div className="item__container">
                <div>{item.name}</div>
                <img onClick={()=>{setPopup(true)}} className="item__image" src={item.photos[0]}></img>
                <div>{item.price} $</div>
                <div onClick={()=>{setDescription(true)}}>Description</div>
                <button onClick={hadleEdit}>Edit</button>
                <button onClick={hadleDelete}>Delete</button>
               
            </div>
            <br></br>

            {/* edit */}
            {edit === true ? <div className="item__container">
            <input
            type="name"
            className="form-controls"
            placeholder={item.name}
            id="name"
            onChange={handleChange}
          />
          <input
            type="name"
            className="form-controls"
            placeholder={item.type}
            id="type"
            onChange={handleChange}
          />
          <input
            type="name"
            className="form-controls"
            placeholder={item.price + " $"}
            id="price"
            onChange={handleChange}
          />
          <textarea
            type="name"
            className="form-controls"
            placeholder={item.description}
            id="description"
            onChange={handleChange}
          />
          <button onClick={saveEdit}>Save</button>
          <button onClick={()=>{setEdit(false)}}>Cancel</button>
            </div> : <div></div>}
        {popup === true ? <div onClick={()=>{setPopup(false)}} className="image__popup">
                <dic className="image__container">
                    <img className="popup__image__size" src={item.photos[0]}></img>
                </dic>
            </div> : <div></div>}
            {description === true ? <div onClick={()=>{setDescription(false)}} className="image__popup">
                <dic className="image__container">
                    <div className="description__containder">

                        {item.description}
                    </div>
                </dic>
            </div> : <div></div>}
         
            
        </div>
    )
}
