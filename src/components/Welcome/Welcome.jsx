import React from 'react'
import "./Welcome.css"
import chat from "./chat.png"
const Welcome = () => {
  return (
    <div className='welcome'>
<img src={chat} alt=""  className='welcome-logo'/>
<p>view and text directly to the people present in the room</p>
    </div>
  )
}

export default Welcome