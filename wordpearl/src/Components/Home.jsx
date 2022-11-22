import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="home-container">
                <div className="home-text">
                    <h4>I <span>will</span> be like the <span>moon</span> and learn to shine <span>even</span> when
                        I am not whole.
                    </h4>
                </div>
            </div>
            <div className="pearl-container">
                <div className='pearl-content'>
                    <div className="orb">
                        <div className="reflection"></div>
                        <div className="inner-glow"></div>
                        <div className="outer-shadow"></div>
                        <div className="pearl-text">
                            <h4>“I will be like the moon and learn to shine even when I am not whole.”</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home