import React, { useEffect, useState }from "react";
import "./NavBar.css";
import logo from "../src/assests/logo.png";
import avatar from "../src/assests/avatar.png";

function NavBar() {
    const [show, handleShow] = useState(false);

    const transitionNavBar = () =>{
        if(window.scrollY > 100){
            handleShow(true);
        }
        else{
            handleShow(false);
        }
    }

useEffect(()=>{
    window.addEventListener('scroll', transitionNavBar);
    return ()=> window.addEventListener('scroll', transitionNavBar);
}, [])
  return (
    <div className={`navBar ${show && `nav_black`}`}>
      <div className="nav_contents">
        <img src={logo} alt="" className="nav_logo" />
        <img src={avatar} alt="" className="nav_avatar" />
      </div>
    </div>
  );
}

export default NavBar;
