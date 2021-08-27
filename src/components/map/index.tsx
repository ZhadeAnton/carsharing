import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';

import './styles.scss'
import * as IMap from '../../interfaces/mapInterfaces'
import useMapContainer from './useMapContainer'
import SearchLocationForm from '../forms/searchLocationForm/index'

interface Props {
  town: string | null,
  pickUp: string | null
}

export default function CustomMap(props: Props) {
  const mapContainer = useMapContainer()

  return (
    mapContainer.settings.isLoaded ? (
      <div className='map'>
        <div className='map__search-form'>
          <SearchLocationForm
            town={props.town}
            pickUp={props.pickUp}
            coordinatesByPickedTown={mapContainer.state.coordinatesByPickedTown}
            onSelectTown={mapContainer.handlers.handleSelectTown}
            onSelectPickUp={mapContainer.handlers.handleSelectPickUp}
            onSetCoordinates={mapContainer.handlers.handleSelectCoordinates}
          />
        </div>

        <h6 className='map__title'>
          Выбрать на карте:
        </h6>

        <GoogleMap
          id="map"
          mapContainerStyle={mapContainer.settings.mapContainerStyle}
          zoom={mapContainer.settings.zoom}
          center={mapContainer.settings.center}
          options={{...mapContainer.settings.options}}
          onLoad={mapContainer.settings.onMapLoad}
          onClick={(event) => mapContainer.handlers.handleMapClick(event)}
        >
          {mapContainer.state.markers.map((marker: IMap.IMark) => (
            <Marker
              key={`${marker.lat}-${marker.lng}`}
              position={{ lat: marker.lat, lng: marker.lng }}
              icon={{
                url: `/location-marker.svg`,
                origin: new window.google.maps.Point(0, 0),
                anchor: new window.google.maps.Point(15, 15),
                scaledSize: new window.google.maps.Size(18, 18),
              }}
            />
          ))}
        </GoogleMap>
      </div>
    ) : <></>
  )
}
