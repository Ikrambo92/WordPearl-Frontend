import React from 'react'

const Login = () => {
    return (
        <div className="login-container">
            <div className='creds'>
                <h3>Username</h3>
                <input type="text" name="username-input" id="uname" placeholder='John123' />
                <h3>Password</h3>
                <input type="text" name="password-input" id="pname" placeholder='Password123' />
                <p>Forgot Password?</p>
                <div className="button">
                    <button>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Login