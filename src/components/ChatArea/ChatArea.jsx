import React from 'react'
import {IconButton} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import './ChatArea.css'
import MessageOther from '../Message/MessageOther';
import MessageSelf from '../Message/MessageSelf';
const ChatArea = () => {
  const props={name:"Test",timeStamp:"today"}
  return (
<div className='chatarea-container'>
<div className="chatarea-header">
<div className="conversationitem-icon">  
    {props.name[0]}
</div>
<div className="chatarea-header-text">
    <p className='conversationitem-name'>{props.name}</p>
    <p className='conversationitem-timestamp'>{props.timeStamp}</p>
</div>
<IconButton>
    <DeleteIcon/>
</IconButton>
</div>
<div className="message-container">

<MessageOther/>
<MessageSelf/>
<MessageOther/>
<MessageSelf/>
<MessageSelf/>
<MessageSelf/>
<MessageOther/>
<MessageSelf/>
<MessageOther/>
<MessageSelf/>
<MessageSelf/>
<MessageSelf/>

</div>
<div className="input-text">
<input type="text" placeholder='Enter your text' className='inputbox'/>
<IconButton>
    <SendIcon/>
</IconButton>
</div>
</div>
  )
}

export default ChatArea