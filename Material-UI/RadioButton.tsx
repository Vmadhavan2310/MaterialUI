import {Box,FormControl,FormControlLabel,FormLabel,RadioGroup,Radio} from '@mui/material'
import React, { useState } from 'react'

export default function () {
    const[values,setValue]=useState('')

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }
    console.log(values)
  return (
    <div>
        <Box>
            <FormControl>
                <FormLabel id='Qualification'>
                    Qualification
                </FormLabel>
                <RadioGroup value={values} onChange={handleChange} row >
                    <FormControlLabel control={<Radio />} label='B.E CSE' value='B.E CSE'/>
                    <FormControlLabel control={<Radio/>} label='B.Tech' value='B.Tech'/>
                    <FormControlLabel control={<Radio/>} label='Bio chemical' value='Bio chemical'/>

                </RadioGroup>
            </FormControl>
        </Box>

    </div>
  )
}
