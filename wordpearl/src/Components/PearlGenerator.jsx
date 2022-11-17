import React from 'react'
import './PearlGenerator.css'
import { useState } from 'react';
import pearlCheck from './PearlCheck'

const PearlGenerator = ()=> {


    const [pearl, setPearl] = useState('');
    const [oddLetters, setOddLetters] = useState('')
    const [isSuccessful, setisSuccessful] = useState(false)
    const [text, setText] = useState('')


    const handleSubmit = event => {
        event.preventDefault()
        console.log(oddLetters)
        if (oddLetters === []) { 
             setisSuccessful(true);
        }
        setPearl('')
    }

    const handleChange = (event)=>{
        setText(event.target.value)
        setPearl(event.target.value);
        setOddLetters(pearlCheck(pearl))
        console.log(text)
    }

return <div className='pearlGenerator'>
    <label className='pearlGenerator'>Create a Pearl !</label>
    <form >
        <textarea name="pearl" id="pearl" cols="50" rows="12"
        value={pearl} onChange={handleChange}></textarea>
        <div >
      { //Check if submission pearl
        ( isSuccessful === true ) ? <p> Successful Pearl </p> : <p>Oddletters: {oddLetters} </p>
        }
    </div>
    <button type='submit' onClick={handleSubmit}> Check Pearl </button>
    </form>
</div>
}

export default PearlGenerator;