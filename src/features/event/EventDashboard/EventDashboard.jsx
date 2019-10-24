import React, {useState} from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import cuid from 'cuid';

const eventsFromDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Bob',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/20.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      },
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Tom',
    hostPhotoURL: 'https://randomuser.me/api/portraits/men/22.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Tom',
        photoURL: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        id: 'a',
        name: 'Bob',
        photoURL: 'https://randomuser.me/api/portraits/men/20.jpg'
      }
    ]
  }
]


export default function EventDashboard() {
    const [events,setEvents] =useState(eventsFromDashboard);
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
        setEvents([...events,newEvent])
        setOpen(false)
    }

    const handleSelectEvent = event =>{
        setSelectedEvent(event)
        setOpen(true)

    }
    const handleUpdateEvent = updatedEvent =>{
        setEvents(events.map(event=>{
            if(event.id===updatedEvent.id){
                return{...updatedEvent}
            }else{
                return event
            }
        }
        )
        
        )
        setOpen(false)
        setSelectedEvent(null)
    }
    return (
        <div>
            <Grid>
                <Grid.Column width={10}>
                    <EventList 
                    selectEvent ={handleSelectEvent}
                    events={events} 
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
