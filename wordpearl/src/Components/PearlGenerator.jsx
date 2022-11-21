import React from 'react'
import './PearlGenerator.css'
import { useState } from 'react';
import pearlCheck from './PearlCheck'
import { SuccessfulPearl } from './SuccessfulPearl';
import myGif from './WPword_earl.gif'
import myGif2 from './WPpearlie.gif'

const PearlGenerator = ()=> {
    const [message, setMessage] = useState('');
    const [pearl, setPearl] = useState(false)
 
    

    const handleChange = event => {
        const result = event.target.value.replace(/[^a-z\s]/gi, '');
        // if (pearlCheck(message).length === 3)
        setMessage(result);
    };


    const handleSubmit = event => {
        event.preventDefault()
        if (pearlCheck(message).length === 0) {  
            setPearl(true)
        }   
    }

    if (pearl === false) {

        return <div className='pearlGenerator'>
    <h2 className='pearlGenerator'>Create a Pearl !</h2>
    <img src={myGif} alt={"my-gif"} style={{width: "200px", height:"200px"}}/>
    <img src={myGif2} alt={"my-gif2"} style={{width: "200px", height:"200px"}}/>
    <form >
        <textarea type="text" name="message" id="message" cols="50" rows="12"
        value={message} onChange={handleChange}></textarea>
        <br/>
       <button id="pgsubmit" onClick={handleSubmit} >Submit</button>    
           <p id="oddLetters"> These letters need a counterpart to make them an even pair: {pearlCheck(message)} </p>
    </form>
    <p>A Pearl is a poem with a particular set of rules, for a poem to be a Pearl it needs to have an equal number of each letter used in the poem. You will not be able to use numbers or special characters in the text field. You will have a Pearl when there are no Odd Letters displayed. Good Luck!</p>
</div>

    } else {
      return   <div>
            <SuccessfulPearl message={message}/>
        </div>
    }
 


}
export default PearlGenerator;