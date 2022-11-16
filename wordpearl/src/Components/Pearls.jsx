import { useState } from "react";
import { useEffect } from "react";
import { getPearls } from "../Utils/apis";

const Pearls = () => {

    const [pearlsList, setPearlsList] = useState([]);
    
    useEffect(() => {
        getPearls().then((pearls) => {
            setPearlsList(pearls)
        })
    })
    
}

export default Pearls;