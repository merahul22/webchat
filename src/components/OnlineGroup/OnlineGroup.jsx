import React from 'react'
import chat from "../Welcome/chat.png"
import { IconButton } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import "../OnlineUsers/OnlineUser.css"
const OnlineGroup = () => {
  return (
    <div className='onlineuser'>
<div className="onlineuser-header">
    <img src={chat} alt="" />
    <p>Available Group</p>
</div>
<div className="onlineuser-search">
<IconButton>
    <SearchIcon/>
</IconButton>
<input type="text"  placeholder='search user'/>
</div>
<div className="onlineuser-list">
   <div className="onlineuser-list-item">
    <p className='onlineuser-icon'>T</p>
    <p className='onlineuser-name'>Test Group</p>
   </div>
   <div className="onlineuser-list-item">
    <p className='onlineuser-icon'>T</p>
    <p className='onlineuser-name'>Test Group</p>
   </div>
   <div className="onlineuser-list-item">
    <p className='onlineuser-icon'>T</p>
    <p className='onlineuser-name'>Test Group</p>
   </div>
   <div className="onlineuser-list-item">
    <p className='onlineuser-icon'>T</p>
    <p className='onlineuser-name'>Test Group</p>
   </div>
   <div className="onlineuser-list-item">
    <p className='onlineuser-icon'>T</p>
    <p className='onlineuser-name'>Test Group</p>
   </div>
   <div className="onlineuser-list-item">
    <p className='onlineuser-icon'>T</p>
    <p className='onlineuser-name'>Test Group</p>
   </div>
   <div className="onlineuser-list-item">
    <p className='onlineuser-icon'>T</p>
    <p className='onlineuser-name'>Test Group</p>
   </div>
   <div className="onlineuser-list-item">
    <p className='onlineuser-icon'>T</p>
    <p className='onlineuser-name'>Test Group</p>
   </div>
   <div className="onlineuser-list-item">
    <p className='onlineuser-icon'>T</p>
    <p className='onlineuser-name'>Test Group</p>
   </div>
   <div className="onlineuser-list-item">
    <p className='onlineuser-icon'>T</p>
    <p className='onlineuser-name'>Test Group</p>
   </div>
</div>

    </div>
  )
}

export default OnlineGroup