import React from 'react';
import { getOystersByPoints } from '../Utils/apis';
import { useEffect, useState } from 'react';
import './LeaderBoard.css'

const LeaderBoard = () => {

    const [isLoading, setIsLoading] =useState(true)
    const [oysters, setOysters] = useState([])

    useEffect(()=>{
        setIsLoading(true)
        getOystersByPoints().then((oysters)=>{
            setIsLoading(false)
            setOysters(oysters)
        })
    },[] ) 


    
          if (isLoading) return <h2>Loading...</h2>


    return <div>
        <div className="board" id='profile'>
        <h2  className='leaderboard' >LEADER BOARD</h2>
        <ul >
        {oysters.map((oysters) => {
            return (
                <div key={oysters.id}>
                    <li>Oyster ID : {oysters.id}</li>
                    <li>Username: {oysters.username}</li>
                    <li><img src={oysters.avatar_url} alt="avatar" style={{width: "200px", height:"200px"}} />
                        </li>
                        <li>  <span>Score: {oysters.points}</span> </li>
                </div>
            )
        })}
        </ul>
        </div>
        </div>
    


}

export default LeaderBoard
