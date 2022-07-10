import React from "react"
import './App.css';
import Navbar from './components/navbar.jsx'
import Header from './components/header'

function App() {

  const [theme, setTheme] = React.useState({
    theme: 'light',
    isSolar:''
  });

  function switchTheme(color){
    setTheme((prev)=>{
      return({
        ...prev,
        theme: color
      })
    })
  }

  function switchSolar(){
    setTheme((prev)=>{
      return({
      ...prev,
      isSolar:prev.isSolar?"":' solar'
      })
    })
  }
  

  return (
    <div className={'page ' + theme.theme + theme.isSolar}>
        <Navbar switchSolar={switchSolar} switchTheme={switchTheme}/>
        <Header/>
    </div>
  )
}

export default App;
