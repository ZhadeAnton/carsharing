import React from 'react'
import { GoogleMap, Marker } from '@react-google-maps/api';

import './styles.scss'
import * as IMap from '../../interfaces/mapInterfaces'
import useMapContainer from './useMapContainer'
import SearchLocationForm from '../forms/searchLocationForm/index'

export default function CustomMap() {
  const mapContainer = useMapContainer()

  return (
    mapContainer.isLoaded ? (
      <div className='custom-map'>
        <div className='custom-map__search-form'>
          <SearchLocationForm
            town={mapContainer.town}
            pickUp={mapContainer.pickUp}
            coordinatesByPickedTown={mapContainer.coordinatesByPickedTown}
            onSelectTown={mapContainer.handleSelectTown}
            onSelectPickUp={mapContainer.handleSelectPickUp}
            onSetCoordinates={mapContainer.handleSelectCoordinates}
          />
        </div>

        <h6 className='custom-map__title'>
          Выбрать на карте:
        </h6>

        <div className='custom-map__canvas'>
          <GoogleMap
            id="map"
            mapContainerStyle={mapContainer.mapContainerStyle}
            zoom={mapContainer.zoom}
            center={mapContainer.center}
            options={{...mapContainer.options}}
            onLoad={mapContainer.onMapLoad}
            onClick={(event) => mapContainer.handleMapClick(event)}
          >
            { mapContainer.markers.map((marker: IMap.IMark) => (
              <Marker
                key={`${marker.lat}-${marker.lng}`}
                position={{ lat: marker.lat, lng: marker.lng }}
                icon={{
                  url: `./location-marker.svg`,
                  origin: new window.google.maps.Point(0, 0),
                  anchor: new window.google.maps.Point(15, 15),
                  scaledSize: new window.google.maps.Size(18, 18),
                }}
              />
            ))}
          </GoogleMap>
        </div>
      </div>
    ) : <></>
  )
}
