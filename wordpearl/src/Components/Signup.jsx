import './Login.css';
import React from 'react'
import { useContext } from 'react';
import { UserContext } from '../Context/UserContext';
import { getOysterByUsername, postOyster } from '../Utils/apis';
import { useState } from 'react';

const Signup = () => {

    const { setUser } = useContext(UserContext)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [newOyster, setNewOyster] = useState({})
    const [avaUrl, setAvaUrl] = useState('')
    const [isSignUp, setSignUp] = useState(false)

    const handleChangeUsername = (event) => {
        setUsername(event.target.value)
    }

    const handleChangePassword = (event) => {
       setPassword(event.target.value)
    }

    const handChangeConfirmPassword = (event) => {
        setConfirmPassword(event.target.value)
    }

    const handleChangeUrl = (event) => {
        setAvaUrl(event.target.value)
    }
 
    const handleClick = () => {
        if(password !== confirmPassword){
            alert('Your passwords do not match')
            return
        }
        else if(username === '' || password === '' || avaUrl === ''){
            alert('Both username and password and Avatar URL must be filled in')
            return
        }
        else {
        getOysterByUsername(username).then((response) => {
            if(response.length === 0){
            setSignUp(true)
                setNewOyster({
                    username: username,
                    password: password,
                    avatar_url: avaUrl,
                    points: 0
                   })
            postOyster(newOyster).then((response) => {
                setUser(response)
                setSignUp(false)
                   })
                }
                else {
                    alert('This username is already taken')
                    return
                }
            })
        }
    }
   
    if(isSignUp) return <h2>Signing up!...</h2>
    return (
        <div className="login-container">
            <div className='creds'>
                <h2>Sign Up</h2>
                <h3>New Username</h3>
                <input type="text" name="username-input" id="uname" placeholder='Jane123' onChange={handleChangeUsername}/>
                <h3>Password</h3>
                <input type="text" name="password-input" id="pname" placeholder='Password123' onChange={handleChangePassword}/><h3>Confirm Password</h3>
                <input type="text" name="password-input" id="cname" placeholder='Password123' onChange={handChangeConfirmPassword}/>
                <h3>Avatar URL</h3>
                <input type="text" name="Avatar-URL-input" id="avname" placeholder='URL' onChange={handleChangeUrl}/>
                <a href='/Login'>Already have an account? Log in</a>
                <div className="button">
                    <button onClick={handleClick} >Signup</button>
                </div>
            </div>
        </div>
    )
}

export default Signup