import React from 'react'
import './PearlGenerator.css'
import { useState } from 'react';
import pearlCheck from './PearlCheck'
import { SuccessfulPearl } from './SuccessfulPearl';

const PearlGenerator = ()=> {
    const [message, setMessage] = useState('');
    const [pearl, setPearl] = useState(false)
 
    

    const handleChange = event => {
        setMessage(event.target.value);
    };


    const handleSubmit = event => {
        event.preventDefault()
        if (pearlCheck(message).length === 0) {  
            setPearl(true)
        }   
    }

    if (pearl === false) {

        return <div className='pearlGenerator'>
    <label className='pearlGenerator'>Create a Pearl !</label>
    <form >
        <textarea type="text" name="message" id="message" cols="50" rows="12"
        value={message} onChange={handleChange}></textarea>
       <button id="pgsubmit" onClick={handleSubmit} >Submit</button>    
           <p> Oddletters: {pearlCheck(message)} </p>
    </form>
</div>

    } else {
      return   <div>
            <SuccessfulPearl/>
        </div>
    }
 


}
export default PearlGenerator;