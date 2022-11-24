import { useState } from "react";
import { useEffect } from "react";
import { getPearls } from "../Utils/apis";
import PearlCard from "./PearlCard";

const Pearls = () => {

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
        <section className="pearl-main-container">
            {pearlsList.map((pearl) => {
                return <PearlCard key={pearl.id} pearl={pearl} />;
            })}
            <br />
        </section>
    )
}

export default Pearls;