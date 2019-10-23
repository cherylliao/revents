import React from 'react'
import { List, Image } from 'semantic-ui-react'

export default function EventListAttendee(props) {
    return (
        <List.Item>
            <Image as ='a' size = 'mini' cicular 
            src={props.attendee.photoURL} />
        </List.Item>
    )
}
