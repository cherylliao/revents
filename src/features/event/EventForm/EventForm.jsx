import React, {useState} from 'react'
import {Segment, Form, Button } from 'semantic-ui-react'

export default function EventForm(props) {
    const {cancelFormOpen} = props;
    
    const [title,setTitle] =useState('')
    const [date,setDate] =useState('')
    const [city,setCity] =useState('')
    const [venue,setVenue] =useState('')
    const [hostedBy,setHost] =useState('')
    

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log(city,venue)
        
        
    }
    const handleTitleChange = e => {
        setTitle(e.target.value)
   }
   const handleDateChange = e => {
    setDate(e.target.value)
}
const handleCityChange = e => {
    setCity(e.target.value)
}
const handleVenueChange = e => {
    setVenue(e.target.value)
}
const handleHostChange = e => {
    setHost(e.target.value)
}
    return (
              <Segment>
                <Form onSubmit={handleFormSubmit} autoComplete ="off">
                  <Form.Field>
                    <label>Event Title</label>
                    <input 
                    name="title" 
                    onChange = { handleTitleChange} 
                    value = {title} 
                    placeholder="Event Title" 
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Event Date</label>
                    <input type="date" 
                    name="date" 
                    onChange = { handleDateChange} 
                    value = {date} 
                    placeholder="Event Date" />
                  </Form.Field>
                  <Form.Field>
                    <label>City</label>
                    <input 
                    name="city" 
                    onChange = { handleCityChange} 
                    value = {city} 
                    placeholder="City event is taking place" 
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Venue</label>
                    <input 
                    name="venue" 
                    onChange = { handleVenueChange} 
                    value = {venue} 
                    placeholder="Enter the Venue of the event" />
                  </Form.Field>
                  <Form.Field>
                    <label>Hosted By</label>
                    <input 
                    name="hostedBy" 
                    onChange = { handleHostChange} 
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
