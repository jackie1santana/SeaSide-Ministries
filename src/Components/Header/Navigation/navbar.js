import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (

        <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <span className="navbar-brand">Icon Here</span>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
        <li className="nav-item active">
            <Link className="nav-link" to="/">Home<span class="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item active">
            <Link className="nav-link" to="/about">About<span class="sr-only">(current)</span></Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/blog">Blog</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/dailydevotions">Daily Devotions</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/contact">Ask Pastor Juanita</Link>
        </li>
        <li class="nav-item">
        <Link className="nav-link" to="/support">Support</Link>
        </li>
        </ul>
    </div>
    </nav>
        </div>
    )
}
