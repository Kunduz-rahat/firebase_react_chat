import React from 'react'
import {Button, Container, Grid} from '@mui/material'
import { Box } from '@mui/system'

function Login() {
  return (
	 <Container>
     <Grid container style={{heigh:window.innerHeight - 50}} alignItems={'center'} justifyContent={'center'} >
     <Grid style={{width:400, background:'lightgray'}} container alignItems={'center'} direction={'column'}>
     <Box p={5}>
          <Button variant={'outlined'} >
            Войти с помощью Google
          </Button>
        </Box>
     </Grid>
       
     </Grid>
   </Container>
  )
}

export default Login