import React from "react";
import '../index.css';

function NavBar() {
    return (
        <nav className="nav">
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <br/>
            <div>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default NavBar;