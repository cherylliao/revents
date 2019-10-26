import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { Icon } from 'semantic-ui-react';

const AnyReactComponent = () => <Icon name='marker' size='big' color='red' />

const SimpleMap=({center})=> {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };



  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAX3Bc5jSPiHlcFcOwyut0EKxxMxdfrJ8g' }}
          defaultCenter={center}
          defaultZoom={11}
        >
          <AnyReactComponent
            lat={center.lat}
            lng={center.lng}
            
          />
        </GoogleMapReact>
      </div>
    );
  
}

export default SimpleMap;