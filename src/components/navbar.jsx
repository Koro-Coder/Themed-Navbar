import React from "react"
import Theme from "./theme"

export default function Navbar(props){
    return(
    <nav class="navbar">
      <ul class="navbar-nav">

        <li class="nav-item">Home</li>

        <li class="nav-item">About</li>

        <li class="nav-item ">
          <Theme switchTheme={props.switchTheme}  switchSolar={props.switchSolar}/>
        </li>

        <li class="nav-item">Login</li>

      </ul>
    </nav>
    )
}