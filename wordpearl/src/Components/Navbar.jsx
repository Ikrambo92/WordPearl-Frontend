import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className="nav-bar">
            <nav>
                <div className="main-heading">
                    <h1>Word<span>Pearl '</span><span className='bubble'></span></h1>
                </div>
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

                    <Link to={'/Pearls'}>
                        <li>Chest of Pearls</li>
                    </Link>
                    
                    <li onClick={() => {
                        window.scroll({
                            top: document.body.offsetHeight,
                            left: 0,
                            behaviour: 'smooth'
                        })
                    }}>How To Play?</li>

                    <Link to={'/LeaderBoard'}>
                        <li>Leader Board</li>
                    </Link>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar