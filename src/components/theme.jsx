import React from "react"

export default function Theme(props){
    
    function handleChangeLight(){
        props.switchTheme('light')
    }

    function handleChangeDark(){
        props.switchTheme('dark')
    }

    function handleChangeSolar(){
        props.switchSolar()
    }
    
    return(
        <div class="has-dropdown">
          <a href="#">Theme</a>
          <ul class="dropdown">
            <li class="dropdown-item">
              <div id="light" onClick={handleChangeLight}>light</div>
            </li>
            <li class="dropdown-item">
              <div id="dark"  onClick={handleChangeDark}>dark</div>
            </li>
            <li class="dropdown-item">
              <div id="solar"  onClick={handleChangeSolar}>solar</div>
            </li>
          </ul>
        </div>
    )
}