import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { getOysterByUsername } from '../Utils/apis';
import { useState } from 'react';

const Login = () => {

    const { user, setUser } = useContext(UserContext)
    const [newOyster, setNewOyster] = useState({})
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [avaUrl, setAvaUrl] = useState('')

    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
       setPassword(event.target.value)
    }

    const handleChangeUrl = (event) => {
       setAvaUrl(event.target.value)
    }

    console.log(user)

    const handleClick = (event) => {
       event.preventDefault()
       getOysterByUsername(username).then((response) => {
       if(response.length !== 0 && password === response[0].password){
        setUser(response[0])
       }
       })
    }

    return (
        <div className="login-container">
            <div className='creds'>
                <h2>Login</h2>
                <h3>Username</h3>
                <form action="">
                <input type="text" name="username-input" id="uname" placeholder='John123' onChange={handleChangeUsername} />
                <h3>Password</h3>
                <input type="text" name="password-input" id="pname" placeholder='Password123' onChange={handleChangePassword}/>
                <a href='#'>Forgot Password?</a>
                {/* <Link to='/signup'>Dont have an account? Sign up!</Link> */}
                <div className="button">
                    <button onClick={handleClick} >Login</button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Login

{/* <h3>Avatar URL</h3>
                <input type="text" name="Avatar-URL-input" id="avname" placeholder='URL' onChange={handleChangeUrl}/> */}

// setNewOyster({
//     username: username,
//     password: password,
//     avatar_url: avaUrl,
//     points: 0
//    })