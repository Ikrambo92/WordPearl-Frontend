import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav-bar">
            <nav>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>Login/Sign Up</li>
                    <li>Generate Pearls</li>
                    <li>Chest of Pearls</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar