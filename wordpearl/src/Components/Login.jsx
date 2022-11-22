import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { getOysterByUsername } from '../Utils/apis';
import { useState } from 'react';

const Login = () => {

    const { user, setUser } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLogginIn, setIsLogginIn] = useState(false)

    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
       setPassword(event.target.value)
    }

    const handleClick = (event) => {
      if(username === '' || password === ''){
        alert('Both the username and password must be filled in')
        return
       }
       event.preventDefault()
       getOysterByUsername(username).then((response) => {
       if(response.length !== 0 && password === response[0].password){
        setIsLogginIn(true)
        setUser(response[0])
        setIsLogginIn(false)
       } else {
        alert('username or password is incorrect')
       }
       })
    }

    const handleLogoutClick = () => {
        setUser({})
    }

    if(isLogginIn) return <h2>Loggin in...</h2>
    if(user.id === undefined){
    return (
        <div className="login-container">
            <div className='creds'>
                <h2 id='login' >Login</h2>
                <h3>Username</h3>
                <form id='form'>
                <input type="text" name="username-input" id="uname" placeholder='John123' onChange={handleChangeUsername} />
                <h3>Password</h3>
                <input type="text" name="password-input" id="pname" placeholder='Password123' onChange={handleChangePassword}/>
                <div className="button">
                    <button className='button' onClick={handleClick} >Login</button>
                </div>
                <Link to='/signup' >Don't have an account? sign-up...</Link>
                </form>
            </div>
        </div>
    )
    } else {
        return (
            <div>
              <h2>You're signed in as {user.username}</h2>
              <button onClick={handleLogoutClick}>Logout</button>
            </div>
        )
      }
}

export default Login