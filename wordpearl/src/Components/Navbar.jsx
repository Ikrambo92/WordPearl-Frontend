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
                        <li>Login</li>
                    </Link>

                    <Link to={'/Oyster'}>
                        <li>Oyster Profile</li>
                    </Link>

                    <Link to={'/PearlGenerator'}>
                        <li>Generate Pearls</li>
                    </Link>

                    <Link to={'/PearlGenerator'}>
                         <li>Chest of Pearls</li>
                    </Link>

                    <Link to={'/LeaderBoard'}>
                        <li>Leader Board</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar