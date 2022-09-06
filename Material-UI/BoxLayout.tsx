import {Box} from '@mui/material'
import { cursorTo } from 'readline'

export default function BoxLayout() {
  return (
    <>
    <Box sx={{
        bgcolor:"success.main",
        height:'100px',
        width:'100px',
        '&:hover':{
            backgroundColor:'primary.light',
            cursor:'pointer'
        }
    }}>
        
    </Box>
    <Box display='flex' height="100px" width="100px" bgcolor="error.main" p={2}></Box>
    </>
  )
}
