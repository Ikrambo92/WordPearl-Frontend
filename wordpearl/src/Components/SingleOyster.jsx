import { useEffect } from "react";
import { getOysterById } from '../Utils/apis';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import './SingleOyster.css'


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
            <div className="card-container1">
                <div className="card1">
                    <div className="lines1"></div>
                    <div className="imgBx">
                        <img src={oyster.avatar_url} alt={oyster.username}></img>
                    </div>
                    <div className="content1">
                        <div className="details1">
                            <h2> Author: {oyster.username}</h2>
                            <p> points: <span>{oyster.points}</span></p>
                        </div>
                        <div className="data1">
                            <p>Most Voted:</p>
                            <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, architecto iure? Aliquam placeat ex"</p>
                        </div>
                    </div>
                </div>
            </div>

        </article>
    )
}

export default SingleOyster;