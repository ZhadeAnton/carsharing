import React from 'react'
import GoogleMapReact from 'google-map-react';

import MapMarker from './mapMarker/index'

export default function GoogleMap({ location, zoomLevel }) {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyAHsXVmKxiEc2J3QSK6wjzhGsWpMJvtTzk' }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
        yesIWantToUseGoogleMapApiInternals
      >
        <MapMarker />
      </GoogleMapReact>
    </div>
  );
}
