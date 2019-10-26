import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {reduxForm,Field} from 'redux-form'
import {composeValidators, combineValidators, isRequired, hasLengthGreaterThan} from 'revalidate'
import {Segment, Form, Button, Grid, Header } from 'semantic-ui-react'
import {createEvent, updateEvent} from '../eventActions'
import cuid from 'cuid'

import TextInput from '../../../app/common/form/TextInput'
import TextArea from '../../../app/common/form/TextArea'
import SelectInput from '../../../app/common/form/SelectInput'
import DateInput from '../../../app/common/form/DateInput'

const mapState = (state,ownProps) =>{
  const eventId=ownProps.match.params.id;

  let event={
   
  }
  if(eventId && state.events.length>0){
    event=state.events.filter(event =>event.id===eventId)[0]
  }
  return {initialValues:event}
}

const actions ={
  createEvent, updateEvent
}

const validate=combineValidators({
  title:isRequired({message:'required'}),
  category:isRequired({message:'required'}),
  description:composeValidators(
    isRequired({message:'required'}),
    hasLengthGreaterThan(4)({message:'too short'})
  )(),
  city:isRequired({message:'required'}),
  venue:isRequired({message:'required'})
  
})

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

const EventForm=(props)=> {
    const {createEvent,selectedEvent,updateEvent,history,event,handleSubmit,initialValues
    ,invalid,submitting,pristine} = props;


    const [fields, setFields] = useState({
        title:'',
        date:'',
        city:'',
        venue: '',
        hostedBy:''
    })
   const {title,date,city,venue,hostedBy} = fields
    //Component did mount
 
    //need to set as a single OBJECT
    const onFormSubmit = values => {
       
        if(initialValues.id){
            updateEvent(values)
            history.push(`/events/${initialValues.id}`)

        }else{
            const newEvent ={
              ...values,
              id:cuid(),
              hostPhotoURL : 'assets/user.png',
              hostedBy:'Bob'
            }
            createEvent(newEvent)
            history.push(`/events/${newEvent.id}`)

        }
    }
const handleChange = name => e => {
        setFields({...fields, [name]:e.target.value});

    }

  
 
    return (
      <Grid>
        <Grid.Column width={10}>
        <Segment>
          <Header sub color='teal' content='Event Details' />
                <Form onSubmit={handleSubmit(onFormSubmit)} >
                  <Field name='title' component={TextInput} placeholder='Event Title' />
                  <Field name='category' 
                  options={category}
                  component={SelectInput} 
                  placeholder='about' />
                  <Field name='description' component={TextArea} rows={3} placeholder='description' />
                  <Header sub color='teal' content='Event Location' />
                  <Field name='city' component={TextInput} placeholder='city' />
                  <Field name='venue' component={TextInput} placeholder='venue' />
                  <Field name='date' 
                  component={DateInput} 
                  dateFormat ='dd LLL yyyy h:mm a'
                  showTimeSelect
                  timeFormat = 'HH:mm'
                  placeholder='date' />
               
                
                  <Button disabled={invalid ||submitting || pristine} positive type="submit">
                    Submit
                  </Button>
                  <Button onClick ={initialValues.id ? () => history.push(`/events/${initialValues.id}`)
                  :() => history.push('/events')} 
                  type="button">Cancel</Button>
                </Form>
              </Segment>

        </Grid.Column>
      </Grid>
              
    )
}

export default connect(mapState,actions)(reduxForm({form:'eventForm',validate})(EventForm));