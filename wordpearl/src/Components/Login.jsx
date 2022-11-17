import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className="login-container">
            <div className='creds'>
                <h2>Login</h2>
                <h3>Username</h3>
                <input type="text" name="username-input" id="uname" placeholder='John123' />
                <h3>Password</h3>
                <input type="text" name="password-input" id="pname" placeholder='Password123' />
                <a href='#'>Forgot Password?</a>
                <Link to='/signup'>Dont have an account? Sign up!</Link>
                <div className="button">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login