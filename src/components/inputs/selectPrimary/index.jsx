import React, { useState } from 'react'
import PlacesAutoComplete, {
  geocodeByAddress,
  getLatLng
} from 'react-places-autocomplete'

import './styles.scss'
import { ReactComponent as Close } from '../../../assets/SVG/close.svg'

export default function InputAutoComplete({ placeholder }) {
  const [address, setAddress] = useState('')
  const [, setCoordinates] = useState({ lat: null, lng: null })

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value)
    const latLng = await getLatLng(results[0])
    setAddress(value)
    setCoordinates(latLng)
  }

  return (
    <div className='input-autocomplete input-primary'>
      <PlacesAutoComplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
        searchOptions={{
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
                  {suggestions.map((suggestion, i) => {
                    return (
                      <div
                        key={i}
                        className='input-autocomplete__suggetion-list--item'
                        {...getSuggestionItemProps(suggestion)}
                      >
                        {suggestion.description}
                      </div>
                    )
                  })}
                </div>}
          </div>
        )}
      </PlacesAutoComplete>

      <span
        className='input-primary__close-btn'
        onClick={() => setAddress('')}
      >
        { address !== '' && <Close /> }
      </span>
    </div>
  )
}
