import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="nav-bar">
            <nav>
                <ul className='nav-list'>
                    <li>Home</li>
                    <li>User Profile</li>
                    <li>Login</li>
                    <li>Sign Up</li>
                   <Link to={'/PearlGenerator'}>
                   <li>Generate Pearls</li>
                   </Link>
                    <li>Successful Pearl Animation Page</li>
                    <li>Chest of Pearls</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar