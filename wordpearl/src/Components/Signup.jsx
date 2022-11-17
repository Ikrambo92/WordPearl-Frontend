import './Login.css';
import React from 'react'

const Signup = () => {
    return (
        <div className="login-container">
            <div className='creds'>
                <h2>Sign Up</h2>
                <h3>New Username</h3>
                <input type="text" name="username-input" id="uname" placeholder='Jane123' />
                <h3>Password</h3>
                <input type="text" name="password-input" id="pname" placeholder='Password123' /><h3>Confirm Password</h3>
                <input type="text" name="password-input" id="cname" placeholder='Password123' />
                <a href='#'>Already have an account? Log in</a>
                <div className="button">
                    <button>Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Signup