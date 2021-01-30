import React from "react"
import { bubble as Menu } from 'react-burger-menu'
import LoginButton from "../LoginButton"
import LogoutButton from "../LogoutButton"
import Profile from "../Profile"
import "./index.css"

const SideBar = () => {
  

  
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
      <Menu>
        <a id="profile" className="menu-item" href="/"><Profile/></a>
        <a id="home" className="menu-item" href="/"><LoginButton/></a>
        <a id="about" className="menu-item" href="/about"><LogoutButton/></a>
        <a id="contact" className="menu-item" href="/contact">Something Else</a>
        <a className="menu-item--small" href="">Something Else</a>
      </Menu>
    );
  
}

export default SideBar;