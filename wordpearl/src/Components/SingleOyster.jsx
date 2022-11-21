import { useEffect } from "react";
import { getPearlsByUsername } from '../Utils/apis';
import { useState } from "react";
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