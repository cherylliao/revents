import React,{Fragment} from 'react'
import { Container } from 'semantic-ui-react'
import EventDashboard from '../../features/event/EventDashboard/EventDashboard'
import NavBar from '../../features/nav/NavBar/NavBar'

export default function App() {
    return (
        <Fragment>
        <NavBar />
        <Container className="main">
            
            <EventDashboard />
        </Container>
        </Fragment>
    )
}
