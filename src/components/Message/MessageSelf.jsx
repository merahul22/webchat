import React from 'react'
import "./Message.css"
const MessageSelf = () => {
    var props2={name:"you",message:"this is a sample message"}
  return (
    <div className='messageself-container'>
    <div className="messagebox">
        <p>{props2.message}</p>
        <p className='self-timestamp'>12:00</p>
    </div>
    </div>
  )
}

export default MessageSelf