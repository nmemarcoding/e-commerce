import React, { useState } from 'react'
import './Home.css'
import AddItem from '../../components/addItem/AddItem'
import RemoveItem from '../../components/removeItem/RemoveItem';
import UpdateItem from '../../components/updateItem/UpdateItem';
import ItemPage from '../../pages/itemsPage/ItemPage.js';
import Orders from '../../components/orders/Orders';
import OrderPage from '../orderPage/OrderPage';

export default function Home() {
    const [page,setPage] = useState("items");
    return (
        <div className="home">
            
            <div class="sidebar">
                <a className="active" href="#home">Home</a>
                <a onClick={()=>{setPage("items")}}>Items</a>
                <a onClick={()=>{setPage('AddItem')}}>Add Items</a>
                <a onClick={()=>{setPage('Orders')}}>Orders</a>
            </div>

            <div class="content">
                {page === "items" ? <ItemPage/> : <div></div>}
                {page === "AddItem" ? <AddItem/> : <div></div>}
                {page === "RemoveItem" ? <RemoveItem/> : <div></div>}
                {page === "UpdateItem" ? <UpdateItem/> : <div></div>}
                {page === "Orders" ? <OrderPage/> : <div></div>}
                
            </div>

        </div>
    )
}
