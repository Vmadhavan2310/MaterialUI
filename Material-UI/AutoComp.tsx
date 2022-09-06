import {Stack,Autocomplete,TextField} from '@mui/material'
import { useState } from 'react'

export default function AutoComp() {

    const[values,setValue]=useState<string|null>(null)

    const skills=['HTML','CSS','JavaScript','React','Redux']

    console.log(values)
  return (
    <Stack spacing={2} width="250px">
        <Autocomplete 
        options={skills}
        renderInput={(param)=><TextField {...param} label='skills'/>}
        value={values}
        onChange={(event:any,newValue:string|null)=>setValue(newValue)}
        />
    </Stack>
  )
}
