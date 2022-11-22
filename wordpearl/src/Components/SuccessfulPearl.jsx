import React from 'react'
import './SuccessfulPearl.css'



export const SuccessfulPearl = (message) => {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="congratsPage">
      <h1 id="banner">Congratulations!!!</h1>
      <p>Successful Pearl !</p>
      <p>+10 points</p>
      <button onClick={refreshPage}>Try again !</button>
    </div>
  )
}

export default SuccessfulPearl;