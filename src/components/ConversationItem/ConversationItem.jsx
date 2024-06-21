import React from 'react'
import "./ConversationItem.css"
import { useNavigate } from 'react-router-dom'
const ConversationItem = ({props}) => {
  const navigate=useNavigate()
  return (
    <div className='conversationitem' onClick={()=>{
      navigate("chat")
  }}>
<div className="conversationitem-icon">
    {props.name[0]}
</div>
<div className="conversationitem-name">
{props.name}
</div>
<div className="conversationitem-message">
{props.message}
</div>
<div className="conversationitem-timestamp">
{props.timeStamp}
</div>
    </div>
  )
}

export default ConversationItem