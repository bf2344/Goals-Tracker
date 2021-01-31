import React from "react"
import { bubble as Menu } from 'react-burger-menu'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton"
import LogoutButton from "../LogoutButton"
import Profile from "../Profile"
import "./index.css"

const SideBar = () => {
  const { user } = useAuth0();


  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu>
      <a id="profile" className="menu-item" href="/"><Profile /></a>
      {user ?
        <a id="about" className="menu-item" href="/about"><LogoutButton /></a>
        :
        <a id="home" className="menu-item" href="/"><LoginButton /></a>
      }
      <a id="contact" className="menu-item" href="/goal-creation/:userId">Add a Goal</a>
      <a className="menu-item--small" href="">Something Else</a>
    </Menu>
  );

}

export default SideBar;