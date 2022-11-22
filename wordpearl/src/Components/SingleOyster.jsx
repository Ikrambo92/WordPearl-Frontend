import { useEffect } from "react";
import { getPearlsByUsername } from '../Utils/apis';
import { useState } from "react";
import { Link } from "react-router-dom";
import './SingleOyster.css'
import './PearlCard.css'
import { UserContext } from "../Context/UserContext";
import { useContext } from "react";
import PearlCard from "./PearlCard";

const SingleOyster = () => {

    const [pearlsList, setPearlsList] = useState([]);

    const { user } = useContext(UserContext);

    useEffect(() => {
        getPearlsByUsername(user.username).then((userPearls) => {
            setPearlsList(userPearls)
        })
    }, [user.username])

    if(user.id === undefined){
        return <h2>Please <Link to={'/Login'} >log in</Link></h2>
    } else {
    return (
        <article>
            <div className="card-container1">
                <div className="card1">
                    <div className="lines1"></div>
                    <div className="imgBx">
                        <img src={user.avatar_url} alt={user.username}></img>
                    </div>
                    <div className="content1">
                        <div className="details1">
                            <h2> Author: {user.username}</h2>
                            <p> points: <span>{user.points}</span></p>

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