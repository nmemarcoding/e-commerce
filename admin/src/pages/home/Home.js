import React, { useState } from 'react'
import './Home.css'
import AddItem from '../../components/addItem/AddItem'
import RemoveItem from '../../components/removeItem/RemoveItem';
import UpdateItem from '../../components/updateItem/UpdateItem';
import Item from '../../components/item/Item';

export default function Home() {
    const [page,setPage] = useState();
    return (
        <div className="home">
            
            <div class="sidebar">
                <a className="active" href="#home">Home</a>
                <a onClick={()=>{setPage(Item)}}>Items</a>
                <a onClick={()=>{setPage(AddItem)}}>Add Items</a>
                <a onClick={()=>{setPage(RemoveItem)}}>Remove Items</a>
                <a onClick={()=>{setPage(UpdateItem)}}>Update Items</a>
            </div>

            <div class="content">
                {page}
            </div>

        </div>
    )
}
