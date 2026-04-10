import React from "react";
import { useState } from "react";


const Lift5=(props)=>{
  return(
    <div>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" /><br/>
      <label htmlFor="password">Password</label>
      <input type="password" id="password" /><br/>
      <button onClick={props.func}>Login</button>
    </div>
  )
}




export default Lift5