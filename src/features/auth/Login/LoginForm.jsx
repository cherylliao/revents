import React, {useState, Fragment} from 'react';
import { Form, Segment, Button } from 'semantic-ui-react';
import { Field, reduxForm} from 'redux-form';
import TextInput from '../../../app/common/form/TextInput';
import { signin, authenticate, isAuthenticated } from '../index'
import { Redirect } from 'react-router-dom'



const LoginForm = ({history}) => {
  const [values, setValues] = useState({
    email:"alice@gmail.com",
    password:"dsefeasdd9",
    error:''

});
const {email, password, error } = values;
    const { user } = isAuthenticated()

    const handleChange = name => event => {
      setValues({...values,error: false, [name]:event.target.value});
    }
    const clickSubmit = (event) => {
      //prevent browser reload when button clicked
      
      setValues({...values,error:false})
      signin({email, password})
      //data is the json data gotten back
      .then(data =>{
        if(data.error){
          setValues({...values, error: data.error})

      } else {
          
              authenticate(data, () =>{
                  setValues({
                      ...values
                  });
              });

          }
        }
      );
      history.push('/events')
  };

const theForm=()=> (
    <Form error size="large" onSubmit={clickSubmit}>
      <Segment>
        <input
          name="email"
          component={TextInput}
          type="email"
          placeholder="Email Address"
          onChange={handleChange('email')}
          value = {email}
        />
        <input
          name="password"
          component={TextInput}
          type="password"
          placeholder="password"
        />
        <Button onClick ={clickSubmit} fluid size="large" color="teal">
          Login
        </Button>
      </Segment>
    </Form>
  );
  return(
    <Fragment>
      {theForm()}
    </Fragment>
  );
};

export default LoginForm;