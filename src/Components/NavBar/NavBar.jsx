import React from "react";
import s from './Navbar.module.css';

function NavBar() {
    return (
        <nav className={s.nav}>
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