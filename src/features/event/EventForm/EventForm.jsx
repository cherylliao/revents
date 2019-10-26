import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {reduxForm,Field} from 'redux-form'
import {Segment, Form, Button, Grid, Header } from 'semantic-ui-react'
import {createEvent, updateEvent} from '../eventActions'
import cuid from 'cuid'

import TextInput from '../../../app/common/form/TextInput'
import TextArea from '../../../app/common/form/TextArea'
import SelectInput from '../../../app/common/form/SelectInput'

const mapState = (state,ownProps) =>{
  const eventId=ownProps.match.params.id;

  let event={
    title:'',
    date:'',
    city:'',
    venue: '',
    hostedBy:''

  }
  if(eventId && state.events.length>0){
    event=state.events.filter(event =>event.id===eventId)[0]
  }
  return {event}
}

const actions ={
  createEvent, updateEvent
}

const category = [
    {key: 'drinks', text: 'Drinks', value: 'drinks'},
    {key: 'culture', text: 'Culture', value: 'culture'},
    {key: 'film', text: 'Film', value: 'film'},
    {key: 'food', text: 'Food', value: 'food'},
    {key: 'music', text: 'Music', value: 'music'},
    {key: 'travel', text: 'Travel', value: 'travel'},
];

const EventForm=(props)=> {
    const {createEvent,selectedEvent,updateEvent,history,event} = props;


    const [fields, setFields] = useState({
        title:'',
        date:'',
        city:'',
        venue: '',
        hostedBy:''
    })
   const {title,date,city,venue,hostedBy} = fields
    //Component did mount
   useEffect(()=>{
       
       setFields({...event})
   },[event])


    
    //need to set as a single OBJECT
    const handleFormSubmit = e => {
        e.preventDefault()
        if(fields.id){
            updateEvent(fields)
            history.push(`/events/${fields.id}`)

        }else{
            const newEvent ={
              ...fields,
              id:cuid(),
              hostPhotoURL : 'assets/user.png'
            }
            createEvent(newEvent)
            history.push(`/events`)

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
                <Form onSubmit={handleFormSubmit} >
                  <Field name='title' component={TextInput} placeholder='Event Title' />
                  <Field name='category' 
                  options={category}
                  component={SelectInput} 
                  placeholder='about' />
                  <Field name='description' component={TextArea} rows={3} placeholder='description' />
                  <Header sub color='teal' content='Event Location' />
                  <Field name='city' component={TextInput} placeholder='city' />
                  <Field name='venue' component={TextInput} placeholder='venue' />
                  <Field name='date' component={TextInput} placeholder='date' />
               
                
                  <Button positive type="submit">
                    Submit
                  </Button>
                  <Button onClick ={history.goBack} type="button">Cancel</Button>
                </Form>
              </Segment>

        </Grid.Column>
      </Grid>
              
    )
}

export default connect(mapState,actions)(reduxForm({form:'eventForm'})(EventForm));