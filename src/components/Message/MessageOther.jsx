import React from 'react'
import './Message.css'
import "../ConversationItem/ConversationItem.css"
const MessageOther = () => {
    var props1={name:"RandomUser",message:"Sample message"}
  return (
    <div className='messageother-container'>
<div className="conversation-container">
    <p className='conversationitem-icon'>{props1.name[0]}</p>
    <div className="other-text-content">
        <p className='conversationitem-name'>{props1.name}</p>
        <p className='conversationitem-message'>{props1.message}</p>
        <p className='other-timestamp'>12:00 am</p>
    </div>
</div>
    </div>
  )
}

export default MessageOther