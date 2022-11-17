import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav-bar">
            <nav>
                <ul className='nav-list'>
                    <Link to={'/'}>
                        <li>Home</li>
                    </Link>
                    <li>User Profile</li>
                    <Link to={'/PearlGenerator'}>
                        <li>Generate Pearls</li>
                    </Link>
                    <li>Successful Pearl Animation Page</li>
                    <Link to={'/Login'}>
                        <li>Login/Sign Up</li>
                    </Link>
                    <li>Generate Pearls</li>
                    <li>Chest of Pearls</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar