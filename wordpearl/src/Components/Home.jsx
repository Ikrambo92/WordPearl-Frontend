import React from 'react'
import './Home.css'
import { useState } from "react";
import { useEffect } from "react";
import { getPearls } from "../Utils/apis";
import PearlCard from "./PearlCard";

const Home = () => {

    const [pearlsList, setPearlsList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        getPearls().then((PearlsData) => {
            setPearlsList(PearlsData)
            setIsLoading(false);
        })
    }, [])

    if (isLoading) return <p>Pearls are loading...</p>

    return (
        <div>
            <div className="home-container">
                <div className="home-text">
                    <h4>I <span>will</span> be like the <span>moon</span> and learn to shine <span>even</span> when
                        I am not whole.
                    </h4>
                </div>
            </div>

            <section>
                {pearlsList.map((pearl) => {
                    return (
                        <div className="pearl-container">
                            <div className='pearl-content'>
                                <div className="orb">
                                    <div className="reflection"></div>
                                    <div className="inner-glow"></div>
                                    <div className="outer-shadow"></div>
                                    <div className="pearl-text">
                                        <h4>{pearl.username}</h4>
                                        <br />
                                        <h4>{pearl.body}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Home