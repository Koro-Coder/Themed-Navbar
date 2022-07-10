import React from "react"

export default function Navbar(){
    return(
    <nav class="navbar">
      <ul class="navbar-nav">

        <li class="nav-item">Home</li>

        <li class="nav-item">About</li>

        <li class="nav-item has-dropdown">
          <a href="#">Theme</a>
          <ul class="dropdown">
            <li class="dropdown-item">
              <a id="light" href="#">light</a>
            </li>
            <li class="dropdown-item">
              <a id="dark" href="#">dark</a>
            </li>
            <li class="dropdown-item">
              <a id="solar" href="#">solarize</a>
            </li>
          </ul>
        </li>

        <li class="nav-item">Login</li>

      </ul>
    </nav>
    )
}