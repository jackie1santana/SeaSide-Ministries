import React from 'react';
import { NavLink } from 'react-router-dom';
import './../../styles/base.scss'

export default function Footer() {
    return (
        <div className="footer">
            <div className="left-footer">
                <p>&copy;  Copyright 2019 SeaSide Ministries Incorporation &trade;</p>
            </div>
            <div className="right-footer">

               <NavLink style={{color: 'white'}}  
                 to="/about"><p>About</p></NavLink>

               <NavLink style={{color: 'white'}}  
               to="/contact"><p>Contact</p></NavLink>

               <NavLink style={{color: 'white'}}  
                to="/give"><p>Support</p></NavLink>

               <NavLink style={{color: 'white'}}    
               to="/faq"><p>FAQ</p></NavLink>
               </div>
    </div>
    )
}