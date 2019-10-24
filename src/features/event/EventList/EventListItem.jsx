import React from 'react'
import {Segment, Item, Icon, List, Button} from 'semantic-ui-react';
import EventListAttendee from './EventListAttendee'

export default function EventListItem(props) {
    return (
             <Segment.Group>
                <Segment>
                  <Item.Group>
                    <Item>
                      <Item.Image size="tiny" circular 
                      src={props.event.hostPhotoURL} />
                      <Item.Content>
                        <Item.Header >{props.event.title}</Item.Header>
                        <Item.Description>
                          Hosted by {props.event.hostedBy}
                        </Item.Description>
                      </Item.Content>
                    </Item>
                  </Item.Group>
                </Segment>
                <Segment>
                  <span>
                    <Icon name="clock" /> {props.event.date} |
                    <Icon name="marker" /> {props.event.venue}
                  </span>
                </Segment>
                <Segment secondary>
                  <List horizontal>
                  {props.event.attendees&&props.event.attendees.map(attendee => (
                    <EventListAttendee key={attendee.id} attendee={attendee}/>

                  ))}
                    
                   
                  </List>
                </Segment>
                <Segment clearing>
                    <span>{props.event.description}</span>
                    <Button 
                  onClick={()=> props.deleteEvent(props.event.id)} 
                  as="a" color="red" floated="right" content="Delete" />
                  <Button 
                  onClick={()=> props.selectEvent(props.event)} 
                  as="a" color="teal" floated="right" content="View" />
                </Segment>
              </Segment.Group>
    )
}
