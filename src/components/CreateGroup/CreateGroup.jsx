import React from 'react'
import { IconButton } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done';
import "./CreateGroup.css"
const CreateGroup = () => {
  return (
    <div className='creategroup'>
<input type="text" placeholder='Create your group' />
<IconButton>
<DoneIcon/>
</IconButton>
    </div>
  )
}

export default CreateGroup