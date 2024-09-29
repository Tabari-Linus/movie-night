import React from "react";
import "./NavBar.css";
import logo from "../src/assests/logo.png";
import avatar from "../src/assests/avatar.png";

function NavBar() {
  return (
    <div className="navBar">
      <div className="nav_contents">
        <img src={logo} alt="" className="nav_logo" />
        <img src={avatar} alt="" className="nav_avatar" />
      </div>
    </div>
  );
}

export default NavBar;
