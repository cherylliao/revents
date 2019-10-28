import React from 'react'
import {Menu,Button} from 'semantic-ui-react'
import {NavLink, Link,withRouter} from 'react-router-dom'

const SignedOutMenu = ({signIn,register}) => {
  return (
    <Menu.Item position="right">
                   <Button onClick={signIn} basic inverted content="Login" />
                   <Button onClick={register}
                   as={Link} to='/signup'
                   basic inverted content="Register" style={{marginLeft: '0.5em'}} />
                 </Menu.Item>
  )
}

export default SignedOutMenu
