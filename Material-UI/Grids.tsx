import { Grid,Box,Paper} from '@mui/material'


export default function Grids() {
  return (
    <Paper sx={{padding:'40px',margin:'50px'}} elevation={8}>
    <Grid container my={2} mx={2}>
        <Grid item sm={6} xs={12}>
            <Box p={2} sx={{backgroundColor:'success.main'}}>Box 1</Box>
        </Grid>
        <Grid item sm={3} xs={12}>
            <Box p={2} sx={{backgroundColor:'error.main'}}>Box 2</Box>
        </Grid>
        <Grid item sm={3} xs={12}>
            <Box p={2} sx={{backgroundColor:'primary.main'}}>Box 3</Box>
        </Grid>
        <Grid item sm={12} xs={12}>
            <Box p={2} sx={{backgroundColor:'secondary.main'}}>Box 4</Box>
        </Grid>
    </Grid>
    </Paper>
  )
}
