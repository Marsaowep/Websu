import React, { Component } from 'react'

export default class Target extends Component {
    static defaultProps = {
        id: "0",
        target: false
    }
    handleClick=(event)=>{
        const{target} =event
        alert("u clicked "+target.id)
    }
  render() {
    return (
        <button className="button" id={this.props.id} target={this.props.target} onClick={this.handleClick}/>
    )
  }
}
