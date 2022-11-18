import React from 'react'

export const SuccessfulPearl = () => {


const handleClick = event => {

}

  return <div>
    <h1>PEARLS!!!</h1>
      <p>Successful Pearl !</p>
      <button onSubmit={handleClick}> Try Again ?</button>
      {/* <button onClick={handleClick}> </button> */}
    </div>
  
}

export default SuccessfulPearl;