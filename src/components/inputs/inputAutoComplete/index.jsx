import React from 'react'
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete'

import './styles.scss'
import { ReactComponent as Close } from '../../../assets/SVG/close.svg'

export default function InputAutoComplete(props) {
  const {
    placeholder,
    value,
    coordinates,
    onChange,
    isAddress,
    onSetCoordinates } = props

  const handleSelect = async (value) => {
    onChange(value)

    if (!isAddress) {
      const results = await geocodeByAddress(value)
      const latLng = await getLatLng(results[0])
      onSetCoordinates(latLng)
    }
  }

  return (
    <div className='input-autocomplete input-primary'>
      <PlacesAutoComplete
        value={value}
        onChange={onChange}
        onSelect={handleSelect}
        searchOptions={{
          location: isAddress && new google.maps.LatLng(coordinates),
          radius: isAddress && 100,
          types: isAddress && ['address']
        }}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps }) => (
          <div className='input-autocomplete__wrapper'>
            <input {...getInputProps({
              placeholder: `${placeholder}`,
              className: 'input-autocomplete__input'
            })}
            />

            {
              suggestions.length !== 0 &&
                <div className='input-autocomplete__suggetion-list'>
                  { suggestions.map((suggestion, i) => {
                    return (
                      <div
                        key={i}
                        className={`input-autocomplete__suggetion-list--item${
                          suggestion.active && '-active'}`}
                        {...getSuggestionItemProps(suggestion)}
                      >
                        { suggestion.description }
                      </div>
                    )
                  })}
                </div>}
          </div>
        )}
      </PlacesAutoComplete>

      <span
        className='input-primary__close-btn'
        onClick={() => onChange('')}
      >
        { value !== '' && <Close /> }
      </span>
    </div>
  )
}
