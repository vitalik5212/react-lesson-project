import React from "react";
import s from './Header.module.css';

function Header() {
    return (
      <header className={s.header}>
          <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Echo_link-blue_icon_slanted.svg/1024px-Echo_link-blue_icon_slanted.svg.png"/>
      </header>
    );
}

export default Header;