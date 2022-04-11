import React, { Component } from 'react'

export default class Target extends Component {
    static defaultProps = {
        target: false
    }

    handleClick=(event)=>{
        const{target} = event
        alert("u clicked "+target.style.backgroundColor)
        return (target)=>{
         this.props.click(target.style.backgroundColor)
        }
    }
  render() {
    console.log(this.props.target ? "red" : "white")
    const {xid,yid,target} = this.props
    return (
        <button className="button" style={{backgroundColor: target ? "red" : "white"}} onClick={this.handleClick}/>
        
    )
  }
}
