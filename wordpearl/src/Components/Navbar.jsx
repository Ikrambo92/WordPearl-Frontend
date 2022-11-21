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
                    <Link to={'/Login'}>
                        <li>Oyster Profile</li>
                    </Link>
                    <Link to={'/PearlGenerator'}>
                        <li>Generate Pearls</li>
                    </Link>
                    <li>Chest of Pearls</li>
                    <Link to={'/LeaderBoard'}>
                        <li>Leader Board</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar