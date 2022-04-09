import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Profile extends Component {
    state = { win:'0',tie:'0',accuracy:'0',top1:'10',top2:'5',top3:'3'};
    render(){
    return (
      <div className="profile">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-sm-4">
                    <Link to="/Game">Back</Link>
                    <h1>Profile Customization</h1>
                    <br></br>
                    <form>
                        <label>
                            Cursor Color:
                            <input type="text" name="cursorColor" />
                        </label><br></br>
                        <label>
                            Website Theme:
                            <input type="text" name="websiteTheme" />
                        </label><br></br>
                        <label>
                            Nickname:
                            <input type="text" name="name" />
                        </label><br></br>
                        <label>
                            Target Color:
                            <input type="text" name="targetColor" />
                        </label><br></br>
                        <input type="submit" value="Submit" />
                    </form>
                  </div>
                  <div className='col-sm-7'>
                      <h3>Player Stats</h3>
                      <h3>Number of Wins: {this.state.win}</h3><br></br>
                      <h3>Number of Ties: {this.state.tie} </h3><br></br>
                      <h3>Average Accuracy: {this.state.accuracy}%</h3><br></br>
                      <div>
                          <h4>Top 3 Scores: </h4>
                          <ul>
                              <li>{this.state.top1}</li>
                              <li>{this.state.top2}</li>
                              <li>{this.state.top3}</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}
}

