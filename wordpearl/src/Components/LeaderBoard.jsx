import React from 'react';
import { getOystersByPoints } from '../Utils/apis';
import { useEffect, useState } from 'react';
import './LeaderBoard.css'


const LeaderBoard = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [oysters, setOysters] = useState([])

    useEffect(() => {
        setIsLoading(true)
        getOystersByPoints().then((oysters) => {
            setIsLoading(false)
            setOysters(oysters)
        })
    }, [])



    if (isLoading) return <h2>Loading...</h2>


    return (
        <div className="card-container1">
            {oysters.map((oyster, index) => {
                return (
                    <div className='card1'>
                        <div className="lines1"></div>
                        <div className="imgBx">
                            <li><img src={oyster.avatar_url} alt="avatar" />
                            </li>
                        </div>
                        <h2 className="leader-pos"># <span>{index + 1}</span></h2>
                        <div className='content1'>
                            <div className='details1'>
                                <ul>
                                    <li key={oyster.id} />
                                    <li className='user-name'>{oyster.username}</li>
                                    <li><span>Score: {oyster.points}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )



}

export default LeaderBoard
