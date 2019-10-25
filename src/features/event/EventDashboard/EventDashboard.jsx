import React, {useState} from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import cuid from 'cuid';
import {connect} from 'react-redux'
import {deleteEvent,updateEvent,createEvent} from '../eventActions'

const mapState = state =>({
  events:state.events
})
const actions = {
  createEvent,
  deleteEvent,
  updateEvent
} 


const EventDashboard=({events,deleteEvent,updateEvent,createEvent})=> {
    
    const [isOpen,setOpen] = useState(false);
    const [selectedEvent,setSelectedEvent] = useState(null);
    
    // const handleFormOpen =() =>{
    //     !isOpen ? setOpen(true) : setOpen(false);
    // }

    const handleCreateFormOpen =() =>{
        setOpen(true)
        //empty out the content using an empty list?
        //set empty fields.
        setSelectedEvent({
            id: '',
            title: '',
            date: '',
            category: '',
            description:
              ' ',
            city: '',
            venue: "",
            hostedBy: '',
            hostPhotoURL: '',
            attendees: [
             
            ]
          })
        
    }

    const handleFormCancel =() =>{
        setOpen(false)
        
    }

    const handleCreateEvent =(newEvent) => {
        newEvent.id=cuid();
        newEvent.hostPhotoURL = 'assets/user.png'
        createEvent(newEvent)
        setOpen(false)
    }

    const handleSelectEvent = event =>{
        setSelectedEvent(event)
        setOpen(true)

    }
    const handleUpdateEvent = updatedEvent =>{
        updateEvent(updatedEvent)
        setOpen(false)
        setSelectedEvent(null)
    }
    const handleDeleteEvent = id =>{
        deleteEvent(id)
        }
    return (
        <div>
            <Grid>
                <Grid.Column width={10}>
                    <EventList 
                    selectEvent ={handleSelectEvent}
                    events={events} 
                    deleteEvent={handleDeleteEvent}
                    />
                </Grid.Column>
                <Grid.Column width={6}>
                    <Button onClick={handleCreateFormOpen} positive content ='Create Event' />
                    {isOpen && <EventForm createEvent ={handleCreateEvent}
                    cancelFormOpen={handleFormCancel} 
                    selectedEvent={selectedEvent}
                    updateEvent={handleUpdateEvent}
                    />}
                    
                </Grid.Column>
            </Grid>
        </div>
    )
}
export default connect(mapState,actions)(EventDashboard)