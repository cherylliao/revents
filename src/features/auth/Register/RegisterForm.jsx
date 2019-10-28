import React, {useState,Fragment} from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { signup } from '../index'
import {Link } from 'react-router-dom'

const RegisterForm = ({history}) => {
  const [values, setValues] = useState({
    name:'',
    email:'',
    password:'',
    success:false
})
const {name, email, password, success} = values
const handleChange = name => event => {
  setValues({...values,  [name]:event.target.value});

}
const clickSubmit = (event) => {
  //prevent browser reload when button clicked
  event.preventDefault()
  setValues({...values})
  signup({name, email, password})
  .then(data =>{
      
          setValues({
              ...values,
              name:'',
              email:'',
              password:'',
              success: true

          })

      
  }) 
  showSuccess();
  history.push('/events')
}
const showSuccess = () => {
  return(
  <div className="alert alert-info" style={{display: success ? '':'none'}}>
      New account is created. 
  </div>
  );
  
}

  const theForm = () =>(
    
      <Form size="large">
        <Segment>
          <input
            name="displayName"
            type="text"
            component={TextInput}
            placeholder="Known As"
            value = {name}
            onChange={handleChange('name')}
          />
         
          <input
            name="email"
            type="text"
            component={TextInput}
            placeholder="Email"
            onChange={handleChange('email')}
            value = {email}
          />
          
          <input
            name="password"
            type="password"
            component={TextInput}
            placeholder="Password"
            onChange={handleChange('password')}
            value={password}
          />
          <Button onClick ={clickSubmit} fluid size="large" color="teal">
            Register
          </Button>
        </Segment>
      </Form>
   
  );
  return(
    <Fragment>
      
      
    {theForm()}
    </Fragment>
    
  )
  
  }

export default RegisterForm;