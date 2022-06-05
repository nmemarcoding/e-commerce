import React, { useState, useEffect } from 'react';
import Axios from '../../hooks/axios'
import './Item.css'
export default function Item({item}) {
    const [edit,setEdit] = useState(false)
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
        } ).catch((e)=>{
            console.log(e.message);
        })
        
    }
    
    return (
        <div className="item">
            <div className="item__container">
                <div>{item.name}</div>
                <img className="item__image" src={item.photo}></img>
                <div>{item.price} $</div>
                <div>{item.description}</div>
                <button onClick={hadleEdit}>Edit</button>
                <button onClick={hadleDelete}>Delete</button>
               
            </div>
            <br></br>
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
            
        </div>
    )
}
