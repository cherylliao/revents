import React from 'react'
import { Segment,Icon } from 'semantic-ui-react';
import GoogleMapReact from 'google-map-react';


const Marker = () => <Icon name="marker" size="big" color="red" />;

const EventDetailedMap = ({center}) => {
    const zoom=14;
  return (
    <Segment attached='bottom'>
          <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAX3Bc5jSPiHlcFcOwyut0EKxxMxdfrJ8g' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={center.lat}
            lng={center.lng}
            
          />
        </GoogleMapReact>
      </div>
      
    </Segment>
  )
}

export default EventDetailedMap
