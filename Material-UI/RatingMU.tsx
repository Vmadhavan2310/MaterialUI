import {Stack,Rating} from '@mui/material'
import React, { useState } from 'react'
import EmojiEmotionsOutlined from '@mui/icons-material/EmojiEmotionsOutlined';
import { fontSize } from '@mui/system';

export default function RatingMU() {
    const[values,setValue]=useState<number|null>(null)

    const handleChange=(event:React.ChangeEvent<{}>,newValue:number|null)=>{
        setValue(newValue)
    }

    console.log(values)
  return (
    <Stack>
        <Rating value={values}
        onChange={handleChange}
        precision={0.5}
        icon={<EmojiEmotionsOutlined fontSize='inherit'/> }
        emptyIcon={<EmojiEmotionsOutlined fontSize='inherit'/>}
        />
    </Stack>
  )
}
