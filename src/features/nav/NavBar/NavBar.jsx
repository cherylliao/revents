import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Menu, Container, Button} from 'semantic-ui-react'
import {NavLink, Link,withRouter} from 'react-router-dom'
import SignedOutMenu from '../Menus/SignedOutMenu'
import SignedInMenu from '../Menus/SignedInMenu'
import {openModal} from '../../modals/modalActions'

const actions = {
  openModal
}

const NavBar=({history, openModal})=> {
   const [auth,setAuth]=useState(false)
   const handleSignIn =()=>openModal('LoginModal');
   const handleSignOut =()=>{
     setAuth(false);
     history.push('/')
   }

   const handleRegister = () =>{
     openModal('RegisterModal')
   }
    return (
             <Menu inverted fixed="top">
               <Container>
                 <Menu.Item as ={NavLink} exact to='/' header>
                   <img src="assets/logo.png" alt="logo" />
                   Re-vents
                 </Menu.Item>
                 <Menu.Item as ={NavLink} exact to='/events' name="Events" />
                 <Menu.Item as ={NavLink} to='/people' name="People" />
                 <Menu.Item as ={NavLink} to='/test' name="Test" />
                 <Menu.Item>
                   <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
                 </Menu.Item>
                 {auth? <SignedInMenu signOut={handleSignOut}/>:
                 <SignedOutMenu signIn={handleSignIn} register ={handleRegister}/>}
                 
               </Container>
             </Menu>
    )
}
export default withRouter(connect(null,actions)(NavBar));