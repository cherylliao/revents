import React, {useState} from 'react'
import {Segment, Form, Button } from 'semantic-ui-react'

export default function EventForm(props) {
    const {cancelFormOpen,createEvent} = props;

    const [fields, setFields] = useState({
        title:'',
        date:'',
        city:'',
        venue: '',
        hostedBy:''
    })
   const {title,date,city,venue,hostedBy} = fields
    
   
    
    //need to set as a single OBJECT
    const handleFormSubmit = event => {
        event.preventDefault()
        props.createEvent(fields)
        
        
    }
const handleChange = name => event => {
        setFields({...fields, [name]:event.target.value});

    }
 
    return (
              <Segment>
                <Form onSubmit={handleFormSubmit} >
                  <Form.Field>
                    <label>Event Title</label>
                    <input 
                    
                    onChange = { handleChange('title')} 
                    value = {title} 
                    placeholder="Event Title" 
                    />
                  </Form.Field>
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
                  <Button onClick ={cancelFormOpen} type="button">Cancel</Button>
                </Form>
              </Segment>
    )
}
