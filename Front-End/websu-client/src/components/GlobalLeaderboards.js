import React from "react"
import Item from "./Item"

export default function GlobalLeaderboards(){
    return(
        <div>
            <h3>Global Leaderboard</h3>
            <ul>
                <Item  rank={1} name='a' score={10}/>
                <Item  rank={2} name='b' score={8}/>
                <Item  rank={3} name='c' score={7}/>
            </ul>
        </div>
    );
}


