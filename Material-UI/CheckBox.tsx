import {Box,FormControlLabel,Checkbox} from '@mui/material'
import { useState } from 'react'

export default function CheckBox() {
    const[values,setValue]=useState(false)

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.checked)
    }
    console.log(values)
  return (
    <Box >
        

        <FormControlLabel control={<Checkbox checked={values} onChange={handleChange}/>} label='Accept the Terms and conditions' />
    </Box>
  )
}
