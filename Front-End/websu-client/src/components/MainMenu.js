import React from "react";
import { Link } from "react-router-dom";
function MainMenu(){
    return(
        <div>
            <h2>Websu</h2>
            <Link to="/Game">Play Single</Link><br></br>
            <Link to="/Game">Play Multiple</Link><br></br>
        </div>
    );
}

export default MainMenu;