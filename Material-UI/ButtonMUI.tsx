import {Button, Stack,IconButton,ButtonGroup,ToggleButtonGroup,ToggleButton} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import SettingsBluetoothIcon from '@mui/icons-material/SettingsBluetooth';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import React, { useState } from 'react';


export default function ButtonMUI() {

  const[format,setFormat]=useState<string|null>(null)

  const handleFormat=(event:React.MouseEvent<HTMLElement>,textformat:string|null)=>{
    setFormat(textformat)
  }

  console.log(format)
  
 
  return (
    <>
    {/* <Stack spacing={2} display='block'>
        <Button variant='text' href='https://v4.mui.com/api/button/' target="_blank" size='small'>Click Here</Button >
        <Button variant='outlined'size='medium' color='warning'>Click Here</Button >
        <Button variant='contained' size='large' startIcon={<SendIcon/>} >Click Here</Button >    
    </Stack>
    <Stack display='inline-block' >
      <Button variant='contained' onClick={()=>window.print()} endIcon={<PrintOutlinedIcon/>}>Print the Website</Button>
      <IconButton color='error' size='large' href='https://v4.mui.com/api/button/'  target="_blank">
        <SettingsBluetoothIcon/>
      </IconButton>
    </Stack> */}
    
   {/*  //Button Group
    <Stack spacing={2} display='block' >
      <ButtonGroup variant='contained' orientation='vertical' >
        <Button color='success'>Button 1</Button>
        <Button color='warning'>Button 2</Button>
        <Button >Button 3</Button>

      </ButtonGroup>
    </Stack> */}
   

    <Stack>
      <ToggleButtonGroup aria-labelledby='format-texting' value={format} onChange={handleFormat} exclusive color='primary'>
        <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
        <ToggleButton value='bold' aria-label='bold'><FormatBoldIcon/></ToggleButton>
        <ToggleButton value='underline' aria-label='underline'><FormatUnderlinedIcon/></ToggleButton>
      </ToggleButtonGroup>
    </Stack>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, modi optio, inventore consequuntur illum, est reprehenderit nostrum asperiores eius ratione at perspiciatis debitis ex praesentium beatae voluptates fugiat totam suscipit?</p>
    </>
  ) 
}
