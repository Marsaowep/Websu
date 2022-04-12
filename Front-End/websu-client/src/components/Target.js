import React, { Component } from 'react'

export default class Target extends Component {
    static defaultProps = {
        target: false
    }

    handleClick=(event)=>{
        const{target} = event
        this.props.click(target.style.backgroundColor)
    }
  render() {
    const {target} = this.props
    return (
        <button className="button" style={{backgroundColor: target ? "red" : "white"}} onClick={this.handleClick}/>
        
    )
  }
}
