import React, { useState } from 'react'
import "./MainContainer.css"
import {IconButton} from "@mui/material"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import ConversationItem from '../ConversationItem/ConversationItem';
import ChatArea from '../ChatArea/ChatArea';
import Welcome from '../Welcome/Welcome';
import CreateGroup from '../CreateGroup/CreateGroup';
import OnlineUser from '../OnlineUsers/OnlineUser';
import { Outlet, useNavigate } from 'react-router-dom';
const MainContainer = () => {
    const [conversations,setconversations]=useState([
{
    name:"Test 1",
    message:"last",
    timeStamp:"today"
},
{
    name:"Test 1",
    message:"last",
    timeStamp:"today"
},
{
    name:"Test 1",
    message:"last",
    timeStamp:"today"
}
    ]
    )
    const navigate=useNavigate()
  return (
    <div className='maincontainer'>
       <div className="maincontainer-left">
<div className="maincontainer-left-header">
    <div className="maincontainer-left-header-left">
<IconButton>
<AccountCircleIcon/>
</IconButton>
    </div>
    <div className="maincontainer-left-header-right">
    <IconButton onClick={
    ()=>{
        navigate("user");
    }
}>
<PersonAddIcon/>
</IconButton>
<IconButton onClick={
    ()=>{
        navigate("group");
    }
}>
<GroupAddIcon/>
</IconButton>
<IconButton onClick={()=>{
    navigate("create-group")
}}>
<AddCircleIcon/>
</IconButton>
<IconButton>
<NightlightIcon/>
</IconButton>
    </div>
</div>
<div className="maincontainer-left-search">
<IconButton>
    <SearchIcon/>
</IconButton>
<input type="text" placeholder='Enter your Search' />
</div>
<div className="maincontainer-left-conversation">
{
    conversations.map((conversation)=>(
        <ConversationItem props={conversation} key={conversation.name} />
    ))
}
</div>
</div>  
     <div className="maincontainer-right">

  <Outlet/>
     </div>
       
    </div>

  )
}

export default MainContainer