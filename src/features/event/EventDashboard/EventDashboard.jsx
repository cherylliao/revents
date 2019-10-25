import React, {useState} from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList'

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
    
 

    const handleDeleteEvent = id =>{
        deleteEvent(id)
        }
    return (
        <div>
            <Grid>
                <Grid.Column width={10}>
                    <EventList 
                    
                    events={events} 
                    deleteEvent={handleDeleteEvent}
                    />
                </Grid.Column>
                <Grid.Column width={6}>
                    <h2>Activity Feed</h2>
                </Grid.Column>
            </Grid>
        </div>
    )
}
export default connect(mapState,actions)(EventDashboard)