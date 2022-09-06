import {Box, TextField,Select,MenuItem} from '@mui/material'
import React, { useState } from 'react'

export default function SelectProp() {

    const[product,setProduct]=useState<string[]>([])

    const productChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const value=event.target.value
        
        setProduct(typeof value==='string'?value.split(','):value)
    }

    console.log(product)
  return (
    <>
   <Box width="250px" margin='40px 20px' >
    <TextField label='Products' select value={product} onChange={productChange} fullWidth SelectProps={{multiple:true}}>
    <MenuItem value='Dress'>Dress</MenuItem>
    <MenuItem value='Electronics'>Electronics</MenuItem>
    <MenuItem value='Gifts'>Gifts</MenuItem>
    <MenuItem value='watch'>watch</MenuItem>
    </TextField>
   </Box>
   </>
  )
}
