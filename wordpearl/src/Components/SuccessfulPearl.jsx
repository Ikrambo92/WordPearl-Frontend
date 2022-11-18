import React from 'react'
import { useState } from 'react';
import { postPearl } from '../Utils/apis';

export const SuccessfulPearl = (message) => {

  const {body} = message
  const [pearl, setPearl] = useState({})

  function refreshPage() {
    window.location.reload(false);
  }

  function sendPearl() {
    postPearl(body).then((res)=>{
      setPearl(res)
    })
  }


  return <div>
    <h1 >Congratulations !!</h1>
      <p>Successful Pearl !</p>
      <button onClick={refreshPage}>Try again !</button>
      <button onClick={sendPearl}>Submit to chest</button>
    </div>
  
}

export default SuccessfulPearl;