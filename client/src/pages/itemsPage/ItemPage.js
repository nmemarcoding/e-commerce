import React, { useState, useEffect } from 'react';
import ItemCard from '../../components/itemCard/ItemCard.js'
import Axios from '../../hook/axios.js'
import './ItemPage.css'
import Placeholder from 'react-bootstrap/Placeholder'


export default function ItemPage() {
    const [items,setItems] = useState();
    useEffect(() => {
        Axios.get('/item').then((res)=>{
        
            setItems(res.data)
            console.log(items)
            })
    },[])
    return (
        <>
        {items ? <div className="itemPage__container">
            {items && items.map((data,index)=>(
                <div key = {index} className="item__containers">
                    <ItemCard items = {data}/>
                </div>
                
            ))}
            
        </div>: <>
                        <Placeholder as="p" animation="glow">
                        <Placeholder xs={12} />
                    </Placeholder>
                    <Placeholder as="p" animation="wave">
                        <Placeholder xs={12} />
                    </Placeholder>
                </>}
        </>
        
    )
}
