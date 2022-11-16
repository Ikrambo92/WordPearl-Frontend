import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav-bar">
            <nav>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>User Profile</li>
                   <Link to={'/PearlGenerator'}>
                   <li>Generate Pearls</li>
                   </Link>
                    <li>Successful Pearl Animation Page</li>
                    <li>Login/Sign Up</li>
                    <li>Generate Pearls</li>
                    <li>Chest of Pearls</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar