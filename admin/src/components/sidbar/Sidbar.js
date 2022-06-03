import React from 'react'
import './Sidebar.css'
import { useNavigate } from 'react-router-dom';

export default function Sidbar() {
    const navigate = useNavigate();
  return (
    <div className="sidbar">
        <div className="sidbar__container">
            <div className="sidebar__item">
                <h2>ITEMS</h2>
            </div>
            <div className="sidebar__item">
                <h2>ADD ITEMS</h2>
            </div>
            <div className="sidebar__item">
                <h2>REMOVE ITEMS</h2>
            </div>
            <div className="sidebar__item">
                <h2>EDIT ITEMS</h2>
            </div>
        
        </div>
    </div>
  )
}
