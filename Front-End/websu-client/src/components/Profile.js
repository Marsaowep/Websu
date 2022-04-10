import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class Profile extends Component {
    render(){
        const {win,tie,accuracy,top1,top2,top3}=this.props.profile
    return (
      <div className="profile">
          <div className="container">
              <div className="row align-items-center">
                  <div className="col-sm-6">
                    <Link to="/Game" className='list-group-item'>Back</Link>
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
                  <div className='col-sm-6'>
                      <h3>Player Stats</h3>
                      <h3>Number of Wins: {win}</h3><br></br>
                      <h3>Number of Ties: {tie} </h3><br></br>
                      <h3>Average Accuracy: {accuracy}%</h3><br></br>
                      <div>
                          <h4>Top 3 Scores: </h4>
                          <ul className='list-group'>
                              <li className='list-group-item'>{top1}</li>
                              <li className='list-group-item'>{top2}</li>
                              <li className='list-group-item'>{top3}</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}
}

