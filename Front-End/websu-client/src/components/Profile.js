import React from "react";
import { Link } from "react-router-dom";

function Profile() {
    return (
      <div classname="profile">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-sm-4">
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
                  <div class='col-sm-7'>
                      <h3>Player Stats</h3>
                      <h3>Number of Wins: 10</h3><br></br>
                      <h3>Number of Ties: 2 </h3><br></br>
                      <h3>Average Accuracy: 89%</h3><br></br>
                      <div>
                          <h4>Top 3 Scores: </h4>
                          <ul>
                              <li>1</li>
                              <li>2</li>
                              <li>3</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default Profile;