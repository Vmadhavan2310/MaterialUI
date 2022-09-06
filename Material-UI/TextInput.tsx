import {TextField,Stack,InputAdornment} from '@mui/material'
import React, { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function TextInput() {

    const[values,setValue]=useState('')

   const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(event.target.value)
   }

    console.log(values)
  return (
    
    <Stack  spacing={2} margin='25px 15px'>
        <Stack display='inline'>
        <TextField label="FirstName" 
        type='text' 
        variant='outlined' 
        size='small' 
        error={!values}
        helperText={!values?"Required":"Dont share credentials"} 
        required color='secondary' 
       InputProps={{
        endAdornment:<InputAdornment position='end'><VisibilityOffIcon/></InputAdornment>
       }}
       value={values}
       onChange={handleChange}
        
        />
        </Stack>
    </Stack>
  )
}
