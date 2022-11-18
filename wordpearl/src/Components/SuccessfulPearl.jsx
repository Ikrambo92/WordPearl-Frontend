import React from 'react'

export const SuccessfulPearl = () => {


  function refreshPage() {
    window.location.reload(false);
  }

  return <div>
    <h1 >Congratulations !!</h1>
      <p>Successful Pearl !</p>
      <button onClick={refreshPage}>Try again !</button>
    </div>
  
}

export default SuccessfulPearl;