import {Box,FormControlLabel,Switch} from '@mui/material'
import { useState } from 'react'

export default function SwitchMU() {

    const[values,setValue]=useState(false)

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.checked)
    }

    console.log(values)
  return (
    <Box>
        <FormControlLabel control={<Switch color='error' checked={values} onChange={handleChange}/>} label="Dark mode"/>
    </Box>
  )
}
