import React from "react";

function Profile() {
    return (
      <div classname="profile">
          <div class="container">
              <div class="row align-items-center">
                  <div class="col-sl-4">
                    <h1>Profile Customization</h1>
                    <br></br>
                    <form>
                        <label>
                            Cursor Color:
                            <input type="text" name="cursorColor" />
                        </label>
                        <label>
                            Website Theme:
                            <input type="text" name="websiteTheme" />
                        </label>
                        <label>
                            Nickname:
                            <input type="text" name="name" />
                        </label>
                        <label>
                            Target Color:
                            <input type="text" name="targetColor" />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                  </div>
              </div>
          </div>
      </div>
    );
}

export default Profile;