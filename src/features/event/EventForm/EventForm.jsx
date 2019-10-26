import React, {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import {reduxForm,Field} from 'redux-form'
import {Segment, Form, Button } from 'semantic-ui-react'
import {createEvent, updateEvent} from '../eventActions'
import cuid from 'cuid'

import TextInput from '../../../app/common/form/TextInput'

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
              <Segment>
                <Form onSubmit={handleFormSubmit} >
                  <Field name='title' component={TextInput} placeholder='Event Title' />
                  <Form.Field>
                    <label>Event Date</label>
                    <input type="date" 
                    onChange = { handleChange('date')} 
                    value = {date} 
                    placeholder="Event Date" />
                  </Form.Field>
                  <Form.Field>
                    <label>City</label>
                    <input 
                    onChange = { handleChange('city')} 
                    value = {city} 
                    placeholder="City event is taking place" 
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Venue</label>
                    <input 
                    onChange = { handleChange('venue')} 
                    value = {venue} 
                    placeholder="Enter the Venue of the event" />
                  </Form.Field>
                  <Form.Field>
                    <label>Hosted By</label>
                    <input 
                    onChange = { handleChange('hostedBy')} 
                    value = {hostedBy} 
                    placeholder="Enter the name of person hosting" />
                  </Form.Field>
                
                  <Button positive type="submit">
                    Submit
                  </Button>
                  <Button onClick ={history.goBack} type="button">Cancel</Button>
                </Form>
              </Segment>
    )
}

export default connect(mapState,actions)(reduxForm({form:'eventForm'})(EventForm));