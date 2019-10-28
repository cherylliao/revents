import React, {useState,Fragment} from 'react'
import {connect} from 'react-redux'
import {Menu, Container, Button} from 'semantic-ui-react'
import {NavLink, Link,withRouter} from 'react-router-dom'
import SignedOutMenu from '../Menus/SignedOutMenu'
import SignedInMenu from '../Menus/SignedInMenu'

import { logout} from '../../auth/authActions'
import RegisterModal from '../../modals/RegisterModal'

const actions = {
  
  logout
}

const mapState = state => ({
  auth:state.auth
})

const NavBar=({history, openModal, auth, logout})=> {
  
   
   
   const handleSignIn =()=>openModal('LoginModal');
   const handleSignOut =()=>{
     logout();
     history.push('/')
   }

   const handleRegister = () =>{
     return(
       <RegisterModal />
     )
   }
   const authenticated = auth.authenticated;
    return (
             <Menu inverted fixed="top">
               <Container>
                 <Menu.Item as ={NavLink} exact to='/' header>
                   <img src="assets/logo.png" alt="logo" />
                   Re-vents
                 </Menu.Item>
                 <Menu.Item as ={NavLink} exact to='/events' name="Events" />
                 
                 <Fragment>
                 <Menu.Item as ={NavLink} to='/people' name="People" />
                 <Menu.Item as ={NavLink} to='/test' name="Test" />
                 <Menu.Item>
                   <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
                   {/* <Button as={Link} to='/signup' floated="right" positive inverted content="Register" /> */}
                 </Menu.Item>
                 </Fragment>
                 <SignedInMenu signOut={handleSignOut} currentUser = {auth.currentUser}/>:
                 <SignedOutMenu signIn={handleSignIn} />
                 
               </Container>
             </Menu>
    )
}
export default withRouter(connect(mapState,actions)(NavBar));