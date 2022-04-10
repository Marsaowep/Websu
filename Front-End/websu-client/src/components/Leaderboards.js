import React, { Component } from "react"
import Item from "./Item"

export default class Leaderboards extends Component{
    render(){
        const {type,leaders} = this.props
    return(
        <div>
            <h3>{type} Leaderboard</h3>
            <ul>
                {
                    leaders.map( leader =>{
                        return <Item key={leader.rank} {...leader}/>})

                }
            </ul>
        </div>
    );
}
}


