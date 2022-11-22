import { useEffect } from "react";
import { getPearlsByUsername } from '../Utils/apis';
import { useState } from "react";
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
            <div>
                <p> author: {user.username}</p>
                <p> points: {user.points}</p>
                <img src={user.avatar_url} alt={user.username}></img>
                {/* <Pearls username={user.username} /> */}
                {pearlsList.map((pearl) => {
                    return <PearlCard key={pearl.id} pearl={pearl} />;
                })}
            </div>
        </article>
    )
}

export default SingleOyster;