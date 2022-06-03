import React, { useState } from 'react'
import Axios from '../../hooks/axios';

export default function AddItem() {
    const [credentials,setCredentials] = useState({
        name: undefined,
        type: undefined,
        photos: [],
        price: undefined,
        description: undefined,
    })
    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
        console.log(credentials)
      };
      const handleClick  = (e)=>{
        e.preventDefault();
       

            Axios.post("item", credentials)
            .then((res) =>{
                console.log(res.data)
            } ).catch((e)=>{
                console.log(e.message);
            })
            
       
    }
    return (
        <div className="addItem">
            <form>
        <h3>Add Item</h3>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="name"
            className="form-control"
            placeholder="Enter Item Name"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Type</label>
          <input
            type="type"
            className="form-control"
            placeholder="Enter Item Type"
            id = "type"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Photos</label>
          <input
            type="photos"
            className="form-control"
            placeholder="Enter Item Photo"
            id = "photos"
            onChange={(e) => {
                setCredentials((prev) => ({ ...prev, [e.target.id]: [e.target.value] }));
                console.log(credentials)
              }}
          />
        </div>
        <div className="mb-3">
          <label>Price</label>
          <input
            type="price"
            className="form-control"
            placeholder="Enter Item Price"
            id = "price"
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea
            type="description"
            className="form-control"
            placeholder="Enter Item description"
            id = "description"
            onChange={handleChange}
          />
        </div>

        <div className="d-grid">
          <button type="submit"  onClick={handleClick} className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
        </div>
    )
}
