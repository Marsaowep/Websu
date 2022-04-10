import React, { Component } from 'react'

export default class Item extends Component {
  render() {
    const {rank,name,score}=this.props;
    return (
      <li> {rank}. {name} : {score} </li>
    )
  }
}
