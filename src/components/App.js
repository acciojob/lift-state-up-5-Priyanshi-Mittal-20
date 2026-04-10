
import React from "react";
import './../styles/App.css';
import { useState } from "react";
import Lift5 from "./Lift5";

const App = () => {
  let [isLoggedIn,setIsLoggedIn]=useState(false)
  function updateIsLoggedIn()
  {
    setIsLoggedIn(true)
  }
  return (
    <div>
        {isLoggedIn ?<p>You are logged in!</p> : <Lift5 func={updateIsLoggedIn} />}
    </div>
  )
}

export default App
