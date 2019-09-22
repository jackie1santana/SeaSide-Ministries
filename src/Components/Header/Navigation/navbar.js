import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../../styles/base.scss';
import Cross from '../../../Images/SVG/CrossSVG'

export default function Navbar() {
    return (

        <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <span className="navbar-brand"><Cross /></span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

 
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item active">
            <NavLink exact={true} 
            style={{color: 'white'}}
            activeStyle={{
            fontWeight: "bold",
            color: "#ffcc4b"
            }} 
            className="nav-link" to="/">Home<span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item active">
            <NavLink 
            style={{color: 'white'}}
            activeStyle={{
            fontWeight: "bold",
            color: "#ffcc4b"
            }} className="nav-link" to="/about">About<span className="sr-only">(current)</span></NavLink>
        </li>
        <li className="nav-item">
        <NavLink 
        style={{color: 'white'}}
            activeStyle={{
            fontWeight: "bold",
            color: "#ffcc4b"
            }} className="nav-link" to="/testimonies">Testimonies</NavLink>
        </li>
        <li class="nav-item">
        <NavLink 
        style={{color: 'white'}}
        activeStyle={{
            fontWeight: "bold",
            color: "#ffcc4b"
            }} className="nav-link" to="/dailydevotions">Daily Devotions</NavLink>
        </li>
        <li className="nav-item">
        <NavLink 
        style={{color: 'white'}}
            activeStyle={{
            fontWeight: "bold",
            color: "#ffcc4b"
            }} className="nav-link" to="/contact">Ask Pastor Juanita</NavLink>
        </li>
        <li className="nav-item">
        <NavLink 
        style={{color: 'white'}}
            activeStyle={{
            fontWeight: "bold",
            color: "#ffcc4b"
            }} className="nav-link" to="/give">Give</NavLink>
        </li>
        </ul>
    </div>
    </nav>
        </div>
        
    )
}
