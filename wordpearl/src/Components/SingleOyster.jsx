import { useEffect } from "react";
import { getOysterByUsername, getPearlsByUsername } from '../Utils/apis';
import { useState } from "react";
import { Link } from "react-router-dom";
import './SingleOyster.css'
import './PearlCard.css'
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import PearlCard from "./PearlCard";

const SingleOyster = () => {

    const [pearlsList, setPearlsList] = useState([]);
    const [oyster, setOyster] = useState({})
    const { user } = useContext(UserContext);

    useEffect(() => {
        getPearlsByUsername(user.username).then((userPearls) => {
            setPearlsList(userPearls)    
            getOysterByUsername(user.username).then((res) => {
                setOyster(res[0])
            }) 
        })
    }, [user.username])


    if (user.id === undefined) {
        return <div className="logout-message">
            <h2>Please <Link to={'/Login'} >log in</Link></h2>
        </div>
    } else {
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
                        </div>
                    </div>
                    {pearlsList.map((pearl) => {
                        return <PearlCard key={pearl.pearl_id} pearl={pearl} />
                    })}
                </div>

            </article>
        )
    }
}

export default SingleOyster;