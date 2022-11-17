import React from 'react'
import './PearlGenerator.css'
import { useState } from 'react';
import pearlCheck from './pearlCheckFuc'
const PearlGenerator = ()=> {
    const [pearl, setPearl] = useState('');
    const [oddLetters, setOddLetters] = useState('')
    const [isSuccessful, setisSuccessful] = useState(false)
    const handleSubmit = event => {
        event.preventDefault()
        setPearl(event.target.value);
        setOddLetters(pearlCheck(pearl))
        setPearl('')
    }
return <div className='pearlGenerator'>
    <label className='pearlGenerator'>Create a Pearl !</label>
    <form onSubmit={handleSubmit}>
        <textarea name="pearl" id="pearl" cols="50" rows="12"
        value={pearl} onChange={(event)=> setPearl(event.target.value)}></textarea>
        <p> Odd Letters : {oddLetters}</p>
    <button disabled={!isSuccessful} type='submit'> Check Pearl </button>
    </form>
</div>
}
export default PearlGenerator;