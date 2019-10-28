import React from 'react'
import {Menu,Button} from 'semantic-ui-react'
import {NavLink, Link,withRouter} from 'react-router-dom'

const SignedOutMenu = () => {
  return (
    <Menu.Item position="right">
                   <Button  
                   basic inverted content="Login"
                   as={Link} to='/signin' />
                   <Button 
                   as={Link} to='/signup'
                   basic inverted content="Register" 
                   style={{marginLeft: '0.5em'}} />
                 </Menu.Item>
  )
}

export default SignedOutMenu
