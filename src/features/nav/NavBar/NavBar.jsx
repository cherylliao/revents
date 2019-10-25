import React, {useState} from 'react'
import {Menu, Container, Button} from 'semantic-ui-react'
import {NavLink, Link,withRouter} from 'react-router-dom'
import SignedOutMenu from '../Menus/SignedOutMenu'
import SignedInMenu from '../Menus/SignedInMenu'

const NavBar=({history})=> {
   const [auth,setAuth]=useState(false)
   const handleSignIn =()=>setAuth(true);
   const handleSignOut =()=>{
     setAuth(false);
     history.push('/')
   }
    return (
             <Menu inverted fixed="top">
               <Container>
                 <Menu.Item as ={NavLink} exact to='/' header>
                   <img src="assets/logo.png" alt="logo" />
                   Re-vents
                 </Menu.Item>
                 <Menu.Item as ={NavLink} to='/events' name="Events" />
                 <Menu.Item as ={NavLink} to='/people' name="People" />
                 <Menu.Item>
                   <Button as={Link} to='/createEvent' floated="right" positive inverted content="Create Event" />
                 </Menu.Item>
                 {auth? <SignedInMenu signOut={handleSignOut}/>:
                 <SignedOutMenu signIn={handleSignIn} />}
                 
               </Container>
             </Menu>
    )
}
export default withRouter(NavBar);