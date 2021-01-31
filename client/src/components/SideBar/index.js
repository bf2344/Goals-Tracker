import React, {useContext} from "react"
import { bubble as Menu } from 'react-burger-menu'
import UserContext from "../../utils/UserContext";
import LoginButton from "../LoginButton"
import LogoutButton from "../LogoutButton"
import Profile from "../Profile"
import "./index.css"

const SideBar = () => {
  const user = useContext(UserContext);


  // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
  return (
    <Menu>
      <a id="profile" className="menu-item" href="/"><Profile /></a>
      {user ?
      <>
        <a id="about" className="menu-item" href="/about"><LogoutButton /></a>
        <br />
        <a id="contact" className="menu-item" href={`/goal-creation/${user._id}`}>Add a Goal</a>
        <a className="menu-item--small" href="">Something Else</a>
        </>
        :
        <>
        <a id="home" className="menu-item" href="/"><LoginButton /></a>
        </>
      }
    </Menu>
  );

}

export default SideBar;