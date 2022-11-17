import { useEffect } from "react";
import { getOysterById } from '../Utils/apis';
import { useParams } from 'react-router-dom';
import { useState } from "react";


const SingleOyster = () => {

    const { id } = useParams();

    const [oyster, setOyster] = useState({})

    useEffect(() => {
        getOysterById(id).then((response) => {
        setOyster(response)
        })
    })

    return (

        <article>
            <div>
                <p> author: {oyster.username}</p>
                <p> points: {oyster.points}</p>
                <img src={oyster.avatar_url} alt={oyster.username}></img>
            </div>
    
        </article>
    )
}

export default SingleOyster;