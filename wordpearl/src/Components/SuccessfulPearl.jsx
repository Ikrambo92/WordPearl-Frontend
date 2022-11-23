import React from 'react'
import { useNavigate } from 'react-router-dom';
import './SuccessfulPearl.css'



export const SuccessfulPearl = (message) => {
  const navigate = useNavigate()

  const tryAgain = () => {
    navigate('/PearlGenerator')
  }

  return (
    <div className="congratsPage">
      <h1 id="banner">Congratulations!!!</h1>
      <p>Successful Pearl !</p>
      <p>+10 points</p>
      <button onClick={tryAgain}>Try again !</button>
    </div>
  )
}

export default SuccessfulPearl;