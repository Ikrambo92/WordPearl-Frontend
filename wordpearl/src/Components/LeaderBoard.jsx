import React from 'react';
import { getOystersByPoints } from '../Utils/apis';
import { useEffect, useState } from 'react';

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
        <h2>LEADER BOARD</h2>
        <ul className="oysterCard"  >
        {oysters.map((oysters) => {
            return (
                <div key={oysters.id}>
                    <li>Oyster ID Number: {oysters.id}</li>
                    <li>Username: {oysters.username}</li>
                    <li> <img src={oysters.avatar_url} alt="avatar" style={{width: "200px", height:"200px"}} />
                        Avatar:</li>
                </div>
            )
        })}
        </ul>
        </div>
    


}

export default LeaderBoard

