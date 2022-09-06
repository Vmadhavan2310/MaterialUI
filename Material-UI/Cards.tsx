import {Box,Card,CardActions,CardContent,Typography,Button,CardMedia} from '@mui/material'

export default function () {
  return (
    <Box width='30%' margin={5}>
        <Card>
        <CardMedia
            component='img'
            height='170px'
            image='https://images.unsplash.com/photo-1485856407642-7f9ba0268b51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlYWN0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
            alt='image'

            />
            <CardContent>
                <Typography variant='h5' color='primary' gutterBottom>
                    Material UI Learning
                </Typography>
                <Typography variant='body1'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nihil fugit explicabo. Numquam laborum nemo, repudiandae corrupti quo vitae, cupiditate reiciendis officia inventore alias blanditiis? Error porro voluptas eligendi deserunt.
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' href="https://v4.mui.com/customization/palette/" target="_blank">Learn more</Button>
                <Button variant='contained' href="https://v4.mui.com/customization/palette/" target="_blank">Join the course</Button>

            </CardActions>
        </Card>
    </Box>
  )
}
