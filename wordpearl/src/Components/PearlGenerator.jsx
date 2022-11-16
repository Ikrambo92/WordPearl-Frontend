import React from 'react'
import './PearlGenerator.css'
import { useState } from 'react';



const PearlGenerator = ()=> {
    
    const [pearl, setPearl] = useState('');

    // const handleChange = event => {
    //     setPearl(event.target.value);

return <div className='pearlGenerator'>
    <p className='pearlGenerator'>
    <h2 className='pearlGenerator'>Create a Pearl !</h2>
    <form action="">
        <textarea name="" id="pearl" cols="50" rows="12" value={pearl}></textarea>
    </form>
    </p>
</div>


}

export default PearlGenerator;