<<<<<<< HEAD
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
=======
import React from 'react';

import FormInput from '../../../app/common/form/form-input.component';


import { auth, createUserProfileDocument } from '../firebase.utils';


import CustomButton from '../../../app/common/form/custom-button.component';

// import './sign-up.styles.scss';

class RegisterForm extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
>>>>>>> temp
