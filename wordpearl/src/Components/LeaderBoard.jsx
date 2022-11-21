import React from 'react';
import { getOystersByPoints } from '../Utils/apis';

const LeaderBoard = () => {

    console.log(getOystersByPoints().then((res) => {return res}), "tag")

    return <div>
        <h2>LEADER BOARD</h2>
        </div>
    


}

export default LeaderBoard

