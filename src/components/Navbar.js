import React, {useContext} from 'react'
import { AppBar, Button, Grid, Toolbar } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE } from '../utils/const';
import { Context } from '..';
import {useAuthState} from 'react-firebase-hooks/auth'

export default function Navbar() {
	const {auth} = useContext(Context)
	const [user] = useAuthState(auth)
  return (
<AppBar color={'secondary'} position="static" >
  <Toolbar variant={'dense'} >
   <Grid container justifyContent={'flex-end'}>
   {!user? 
    <Button variant={'outlined'} >
       Логин
     </Button>
     :
     <NavLink to={LOGIN_ROUTE}>
     <Button variant={'outlined'} onClick={()=> auth.signOut()} >
         Выйти
      </Button>
     </NavLink>
   }
   
   </Grid>
  </Toolbar>
</AppBar>
  )
}
