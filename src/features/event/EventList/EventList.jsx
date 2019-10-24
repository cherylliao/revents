import React,{Fragment} from 'react'
import EventListItem from './EventListItem'

export default function EventList(props) {
    const {events,selectEvent,deleteEvent}=props
    return (
        <Fragment>
            {events.map(event =>(
                <EventListItem key={event.id} event ={event} 
                selectEvent={selectEvent}
                deleteEvent={deleteEvent}
                />

            ))}
            
        
        </Fragment>
    )
            
}
